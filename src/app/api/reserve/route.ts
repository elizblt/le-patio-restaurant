import { NextResponse } from "next/server";

// Simulate business hours validation
const isValidBusinessHours = (date: string, time: string): boolean => {
  const reservationDate = new Date(`${date}T${time}`);
  const dayOfWeek = reservationDate.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = parseInt(time.split(':')[0]);
  
  // Closed on Sunday (0)
  if (dayOfWeek === 0) {
    return false;
  }
  
  // Lunch service: Monday-Friday 12:00-14:00, Saturday closed for lunch
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    if (hour >= 12 && hour <= 14) {
      return true;
    }
  }
  
  // Dinner service: Monday-Saturday 19:00-21:30
  if (dayOfWeek >= 1 && dayOfWeek <= 6) {
    if (hour >= 19 && (hour <= 21 || (hour === 21 && parseInt(time.split(':')[1]) <= 30))) {
      return true;
    }
  }
  
  return false;
};

// Simulate availability check (in a real app, this would check a database)
const checkAvailability = (date: string, time: string, guests: number): boolean => {
  // Simple simulation: 30% chance of unavailability for realism
  const random = Math.random();
  
  // Peak times are more likely to be unavailable
  const hour = parseInt(time.split(':')[0]);
  const isPeakTime = hour === 20 || hour === 13; // 8 PM dinner, 1 PM lunch
  const unavailabilityChance = isPeakTime ? 0.4 : 0.15;
  
  // Large groups are harder to accommodate
  if (guests >= 8) {
    return random > unavailabilityChance + 0.2;
  }
  
  return random > unavailabilityChance;
};

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number (French format)
const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(?:(?:\+33|0)[1-9](?:[0-9]{8}))$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Validate required fields
    const { date, time, guests, name, email, phone, note } = data;
    
    if (!date || !time || !guests || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être renseignés." },
        { status: 400 }
      );
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "L'adresse email n'est pas valide." },
        { status: 400 }
      );
    }
    
    // Validate phone format
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Le numéro de téléphone n'est pas valide." },
        { status: 400 }
      );
    }
    
    // Validate guests count
    if (guests < 1 || guests > 12) {
      return NextResponse.json(
        { error: "Le nombre de couverts doit être entre 1 et 12." },
        { status: 400 }
      );
    }
    
    // Check if reservation is for today or in the future
    const today = new Date().toISOString().split('T')[0];
    if (date < today) {
      return NextResponse.json(
        { error: "Impossible de réserver pour une date passée." },
        { status: 400 }
      );
    }
    
    // Check business hours
    if (!isValidBusinessHours(date, time)) {
      return NextResponse.json(
        { error: "Ce créneau n'est pas disponible. Consultez nos horaires d'ouverture." },
        { status: 400 }
      );
    }
    
    // Simulate availability check
    if (!checkAvailability(date, time, guests)) {
      return NextResponse.json(
        { error: "Ce créneau est complet. Veuillez choisir une autre heure ou nous appeler." },
        { status: 409 }
      );
    }
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Log reservation request (in production, save to database)
    console.log("Reservation confirmed:", {
      date,
      time,
      guests,
      name,
      email,
      phone: phone.replace(/\s/g, ''),
      note: note || null,
      timestamp: new Date().toISOString(),
      confirmationId: `LP${Date.now().toString().slice(-6)}`,
    });
    
    const confirmationId = `LP${Date.now().toString().slice(-6)}`;
    
    return NextResponse.json({
      ok: true,
      confirmationId,
      message: `Parfait ! Votre réservation est confirmée (n° ${confirmationId}). Vous recevrez un email de confirmation dans quelques minutes. À bientôt au Patio !`
    });
    
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { error: "Une erreur inattendue s'est produite. Veuillez réessayer ou nous appeler." },
      { status: 500 }
    );
  }
}
