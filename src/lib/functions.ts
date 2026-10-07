import {
  BadgeDollarSignIcon,
  ImagesIcon,
  MapPinIcon,
  ScissorsIcon,
  ShoppingBagIcon,
  SparklesIcon,
  type LucideIcon,
} from "lucide-react";

export type NavItem = { name: string; href: string; icon: LucideIcon };
export const navItems = [
  {
    name: "Servicios",
    href: "#services",
    icon: SparklesIcon,
  },
  {
    name: "Cómo trabajamos",
    href: "#carefoul",
    icon: ScissorsIcon,
  },
  {
    name: "Galería",
    href: "#gallery",
    icon: ImagesIcon,
  },
  {
    name: "Petshop",
    href: "#petshop",
    icon: ShoppingBagIcon,
  },
  {
    name: "Precios",
    href: "#prices",
    icon: BadgeDollarSignIcon,
  },
  {
    name: "Ubicación",
    href: "#location",
    icon: MapPinIcon,
  },
];

export const WHATSAPP_PHONE = "5491139394949";

export function buildWhatsAppUrl(phone: string, message: string) {
  const url = new URL("https://api.whatsapp.com/send");
  url.searchParams.set("phone", phone);
  url.searchParams.set("text", message);
  url.searchParams.set("type", "phone_number");
  url.searchParams.set("app_absent", "0");
  return url.toString();
}

export const BOOKING_WHATSAPP_MESSAGE =
  "¡Hola! 👋 ¿Cómo están? Quisiera reservar un turno en De Pelos para mi perrito 🐶🐾";

export const BOOKING_WHATSAPP_URL = buildWhatsAppUrl(
  WHATSAPP_PHONE,
  BOOKING_WHATSAPP_MESSAGE,
);

export type IntakeWhatsAppData = {
  dogName: string;
  ownerName: string;
  breed: string;
  sex: string;
  color: string;
  age: string;
  weight: string;
  neutered: string;
  vaccinated: string;
  firstVisit: string;
  allergy: string;
  healthProblem: string;
  behavior: string;
  note: string;
};

function sanitizeWhatsAppValue(value: string) {
  const withoutControlCharacters = Array.from(value)
    .filter((character) => {
      const code = character.charCodeAt(0);
      return (
        code === 9 || code === 10 || code === 13 || (code >= 32 && code !== 127)
      );
    })
    .join("");

  return withoutControlCharacters
    .replace(/[\u202A-\u202E\u2066-\u2069]/g, "")
    .replace(/[*_~`]/g, "")
    .trim();
}

export function buildIntakeWhatsAppMessage(data: IntakeWhatsAppData) {
  const safe = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      sanitizeWhatsAppValue(value),
    ]),
  ) as IntakeWhatsAppData;

  const healthProblem = safe.healthProblem || "No informado";
  const allergy = safe.allergy || "No informada";
  const note = safe.note || "Sin notas adicionales";

  return [
    "🐾 *FICHA PREVIA · DE PELOS*",
    "━━━━━━━━━━━━━━━━",
    "",
    "🐶 *DATOS DEL PERRITO*",
    `• *Nombre:* ${safe.dogName}`,
    `• *Raza:* ${safe.breed}`,
    `• *Sexo:* ${safe.sex}`,
    `• *Color:* ${safe.color}`,
    `• *Edad:* ${safe.age}`,
    `• *Peso aproximado:* ${safe.weight}`,
    "",
    "👤 *PROPIETARIO*",
    `• *Nombre:* ${safe.ownerName}`,
    "",
    "🩺 *SALUD Y CUIDADOS*",
    `• *Castrado:* ${safe.neutered}`,
    `• *Vacunado:* ${safe.vaccinated}`,
    `• *Alergias:* ${allergy}`,
    `• *Problemas de salud:* ${healthProblem}`,
    `• *Primera vez en la pelu:* ${safe.firstVisit}`,
    "",
    "💛 *COMPORTAMIENTO*",
    safe.behavior,
    "",
    "📝 *NOTA ADICIONAL*",
    note,
    "",
    "━━━━━━━━━━━━━━━━",
    "📲 _Enviado desde el formulario web de De Pelos_",
  ].join("\n");
}
