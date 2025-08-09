import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // TODO: vérifier les créneaux et enregistrer en base
  console.log("Reservation request:", data);
  return NextResponse.json({ ok: true, message: "Merci ! Votre demande est bien reçue. Un email de confirmation vous sera envoyé." });
}
