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
        <section className="section bg-gradient-to-br from-rose-50 to-pink-50 border-b">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Réserver une Table
            </h1>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Réservez votre table en quelques clics pour une expérience gastronomique inoubliable 
              dans notre cadre exceptionnel.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-2xl">
            {/* Success Message */}
            {ok && (
              <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check className="text-emerald-600" size={16} />
                </div>
                <p className="text-emerald-800">{ok}</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="text-red-600" size={16} />
                </div>
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {/* Info Section */}
            <div className="mb-8 p-6 bg-neutral-50 rounded-3xl">
              <h2 className="font-bold text-lg mb-4">Informations importantes</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-700">
                <div>
                  <p className="font-medium mb-1">Horaires de service</p>
                  <p>Déjeuner : 12h00 - 14h00</p>
                  <p>Dîner : 19h00 - 21h30</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Politique d'annulation</p>
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
                    className="w-full rounded-2xl border-2 border-neutral-200 p-4 focus:border-rose-400 focus:outline-none transition-colors"
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
                    className="w-full rounded-2xl border-2 border-neutral-200 p-4 focus:border-rose-400 focus:outline-none transition-colors"
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
                    className="w-full rounded-2xl border-2 border-neutral-200 p-4 focus:border-rose-400 focus:outline-none transition-colors"
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
                    className="w-full rounded-2xl border-2 border-neutral-200 p-4 focus:border-rose-400 focus:outline-none transition-colors"
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
                    className="w-full rounded-2xl border-2 border-neutral-200 p-4 focus:border-rose-400 focus:outline-none transition-colors"
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
                    className="w-full rounded-2xl border-2 border-neutral-200 p-4 focus:border-rose-400 focus:outline-none transition-colors"
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
                  className="w-full rounded-2xl border-2 border-neutral-200 p-4 focus:border-rose-400 focus:outline-none transition-colors resize-none"
                  {...register("note")}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold text-lg hover:from-rose-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
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
        <section className="section bg-neutral-50">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">Préférez réserver par téléphone ?</h2>
            <p className="text-neutral-600 mb-6">
              Notre équipe se fera un plaisir de vous accueillir et de répondre à toutes vos questions.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="tel:0563917842"
                className="px-6 py-3 rounded-2xl border-2 border-neutral-300 hover:border-neutral-400 transition-colors font-semibold"
              >
                05 63 91 78 42
              </a>
              <a 
                href="/contact"
                className="px-6 py-3 rounded-2xl bg-neutral-200 hover:bg-neutral-300 transition-colors font-semibold"
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