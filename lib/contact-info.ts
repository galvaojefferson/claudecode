export type ContactInfo = {
  icon: string;
  label: string;
  value: string;
};

export const WHATSAPP_URL = "https://wa.me/5511999990000";

export const contactInfo: ContactInfo[] = [
  { icon: "📍", label: "Endereço", value: "Rua das Palmeiras, 123 · Centro" },
  { icon: "🕗", label: "Horários", value: "Seg a Sáb, das 8h às 19h" },
  { icon: "📞", label: "Telefone", value: "(11) 99999-0000" },
];
