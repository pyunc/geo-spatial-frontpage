import {
  Brain,
  Building2,
  Car,
  CreditCard,
  Database,
  GraduationCap,
  HardHat,
  HeartPulse,
  Layers,
  Map,
  Radar,
  Route,
  Satellite,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Sprout,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { IconName } from "@/data/site";

export const iconMap = {
  Brain,
  Building2,
  Car,
  CreditCard,
  Database,
  GraduationCap,
  HardHat,
  HeartPulse,
  Layers,
  Map,
  Radar,
  Route,
  Satellite,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Sprout,
  Target,
  TrendingUp,
  Users,
  Zap,
} satisfies Record<IconName, typeof Map>;

export function FeatureIcon({ name }: { name: IconName }) {
  const Icon = iconMap[name];
  return <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2} />;
}
