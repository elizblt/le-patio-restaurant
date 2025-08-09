"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "../components/Navbar";

const schema = z.object({
  date: z.string().min(1),
  time: z.string().min(1),
  guests: z.number().min(1).max(12),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  note: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

export default function ReservationPage() {
  const [ok, setOk] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    setOk(json.message);
    if (res.ok) reset();
  };

  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container max-w-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
            Réserver une table
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Date</label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-xl border p-3"
                  {...register("date")}
                />
                {errors.date && (
                  <p className="text-sm text-red-600 mt-1">Date requise</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium">Heure</label>
                <input
                  type="time"
                  className="mt-1 w-full rounded-xl border p-3"
                  {...register("time")}
                />
                {errors.time && (
                  <p className="text-sm text-red-600 mt-1">Heure requise</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1">
                <label className="text-sm font-medium">Couverts</label>
                <input
                  type="number"
                  min={1}
                  max={12}
                  className="mt-1 w-full rounded-xl border p-3"
                  {...register("guests")}
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium">Nom</label>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  {...register("name")}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  {...register("email")}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Téléphone</label>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  {...register("phone")}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Note</label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-xl border p-3"
                {...register("note")}
              />
            </div>

            <button
              disabled={isSubmitting}
              className="px-5 py-3 rounded-2xl bg-black text-white text-sm font-semibold"
            >
              {isSubmitting ? "Envoi..." : "Valider la demande"}
            </button>

            {ok && <p className="text-green-700 text-sm">{ok}</p>}
          </form>
        </div>
      </main>
    </>
  );
}
