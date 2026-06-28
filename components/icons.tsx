import {
  Brain,
  Building2,
  Database,
  Layers,
  Map,
  Radar,
  Route,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { IconName } from "@/data/site";

export const iconMap = {
  Brain,
  Building2,
  Database,
  Layers,
  Map,
  Radar,
  Route,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} satisfies Record<IconName, typeof Map>;

export function FeatureIcon({ name }: { name: IconName }) {
  const Icon = iconMap[name];
  return <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2} />;
}
