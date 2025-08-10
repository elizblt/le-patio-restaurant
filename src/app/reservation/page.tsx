"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "../components/Navbar";
import {
  Calendar,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
  AlertCircle,
} from "lucide-react";

const schema = z.object({
  date: z.string().min(1, "La date est requise"),
  time: z.string().min(1, "L'heure est requise"),
  guests: z.number().min(1, "Au moins 1 personne").max(12, "Maximum 12 personnes"),
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  note: z.string().optional(),
});

interface FormData {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  note?: string;
}

// Note: metadata is handled in layout.tsx for client components

export default function ReservationPage() {
  const [ok, setOk] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { guests: 1 }
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setError(undefined);
    setOk(undefined);

    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const json = await res.json();
      
      if (res.ok) {
        setOk(json.message);
        reset();
      } else {
        setError(json.error || "Une erreur est survenue");
      }
    } catch (err) {
      setError("Erreur de connexion. Veuillez réessayer.");
    }
  };

  // Generate time options
  const generateTimeOptions = () => {
    const times = [];
    // Lunch service: 12:00 - 14:00
    for (let hour = 12; hour <= 14; hour++) {
      for (let min = 0; min < 60; min += 30) {
        if (hour === 14 && min > 0) break; // Stop at 14:00
        times.push(`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`);
      }
    }
    // Dinner service: 19:00 - 21:30
    for (let hour = 19; hour <= 21; hour++) {
      for (let min = 0; min < 60; min += 30) {
        if (hour === 21 && min > 30) break; // Stop at 21:30
        times.push(`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50">
          <div className="container text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-800 via-violet-800 to-purple-800 bg-clip-text text-transparent">
              Réserver une Table
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Réservez votre table en quelques clics pour une expérience gastronomique inoubliable 
              dans notre cadre exceptionnel.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-2xl">
            {/* Success Message */}
            {ok && (
              <div className="mb-8 p-6 bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/50 rounded-3xl flex items-center gap-4 shadow-lg shadow-emerald-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <Check className="text-white" size={20} />
                </div>
                <p className="text-emerald-800 font-medium">{ok}</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-8 p-6 bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-3xl flex items-center gap-4 shadow-lg shadow-red-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/25">
                  <AlertCircle className="text-white" size={20} />
                </div>
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}

            {/* Info Section */}
            <div className="mb-10 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-violet-500/5 border border-white/50">
              <h2 className="font-bold text-xl mb-6 text-slate-800">Informations importantes</h2>
              <div className="grid md:grid-cols-2 gap-6 text-slate-600">
                <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl">
                  <p className="font-semibold mb-2 text-slate-800">Horaires de service</p>
                  <p>Déjeuner : 12h00 - 14h00</p>
                  <p>Dîner : 19h00 - 21h30</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                  <p className="font-semibold mb-2 text-slate-800">Politique d'annulation</p>
                  <p>Annulation gratuite jusqu'à 24h avant</p>
                  <p>Contact : 05 63 91 78 42</p>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="space-y-6">
              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Calendar size={16} />
                    Date souhaitée *
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-2xl border-2 border-violet-200/50 bg-white/80 backdrop-blur-sm p-4 focus:border-violet-400 focus:bg-white focus:outline-none transition-all duration-300 shadow-sm focus:shadow-lg focus:shadow-violet-500/10"
                    min={new Date().toISOString().split('T')[0]}
                    {...register("date")}
                  />
                  {errors.date && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.date.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Clock size={16} />
                    Heure souhaitée *
                  </label>
                  <select
                    className="w-full rounded-2xl border-2 border-violet-200/50 bg-white/80 backdrop-blur-sm p-4 focus:border-violet-400 focus:bg-white focus:outline-none transition-colors"
                    {...register("time")}
                  >
                    <option value="">Choisir une heure</option>
                    <optgroup label="Service déjeuner">
                      {timeOptions.slice(0, 5).map(time => (
                        <option key={`lunch-${time}`} value={time}>{time}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Service dîner">
                      {timeOptions.slice(5).map(time => (
                        <option key={`dinner-${time}`} value={time}>{time}</option>
                      ))}
                    </optgroup>
                  </select>
                  {errors.time && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.time.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Guests & Name */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Users size={16} />
                    Nombre de couverts *
                  </label>
                  <select
                    className="w-full rounded-2xl border-2 border-violet-200/50 bg-white/80 backdrop-blur-sm p-4 focus:border-violet-400 focus:bg-white focus:outline-none transition-colors"
                    {...register("guests", { valueAsNumber: true })}
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} personne{i > 0 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                  {errors.guests && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.guests.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <User size={16} />
                    Nom de la réservation *
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-2xl border-2 border-violet-200/50 bg-white/80 backdrop-blur-sm p-4 focus:border-violet-400 focus:bg-white focus:outline-none transition-colors"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Mail size={16} />
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full rounded-2xl border-2 border-violet-200/50 bg-white/80 backdrop-blur-sm p-4 focus:border-violet-400 focus:bg-white focus:outline-none transition-colors"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Phone size={16} />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full rounded-2xl border-2 border-violet-200/50 bg-white/80 backdrop-blur-sm p-4 focus:border-violet-400 focus:bg-white focus:outline-none transition-colors"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <MessageSquare size={16} />
                  Demandes particulières
                </label>
                <textarea
                  rows={4}
                  placeholder="Allergies, régimes alimentaires, occasion spéciale, préférences de placement..."
                  className="w-full rounded-2xl border-2 border-violet-200/50 bg-white/80 backdrop-blur-sm p-4 focus:border-violet-400 focus:bg-white focus:outline-none transition-colors resize-none"
                  {...register("note")}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-lg hover:from-violet-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/40 transform hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Check size={20} />
                    Confirmer ma réservation
                  </>
                )}
              </button>

              <p className="text-xs text-neutral-500 text-center">
                En cliquant sur "Confirmer ma réservation", vous acceptez que nous traitions vos données 
                personnelles uniquement dans le cadre de votre réservation.
              </p>
            </form>
          </div>
        </section>

        {/* Contact Fallback */}
        <section className="section bg-gradient-to-br from-slate-50 to-violet-50/30">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-violet-800 bg-clip-text text-transparent">Préférez réserver par téléphone ?</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Notre équipe se fera un plaisir de vous accueillir et de répondre à toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0563917842"
                className="px-8 py-4 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-violet-200 hover:border-violet-400 hover:bg-white/90 transition-all duration-300 font-bold text-lg text-slate-700 hover:text-violet-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                05 63 91 78 42
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 rounded-3xl bg-gradient-to-r from-slate-200 to-slate-300 hover:from-slate-300 hover:to-slate-400 transition-all duration-300 font-bold text-lg text-slate-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Voir les horaires
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}