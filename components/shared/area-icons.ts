import {
  Briefcase,
  FileSignature,
  HeartPulse,
  Landmark,
  Scale,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

// Ícones por área (Lucide, traço fino — iconografia definida no DS).
export const areaIcons: Record<string, LucideIcon> = {
  "direito-do-consumidor": ShoppingCart,
  "direito-bancario": Landmark,
  "direito-civel": Scale,
  "direito-da-saude": HeartPulse,
  "direito-contratual": FileSignature,
  "direito-empresarial": Briefcase,
};
