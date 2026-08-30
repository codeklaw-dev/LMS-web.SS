/**
 * Icon registry.
 *
 * Icons are imported by name rather than via `import * as icons from
 * 'lucide-react'`. The barrel import is convenient but pulls the entire icon
 * set into the bundle (~1MB) which blows the performance budget in §7
 * (LCP < 2.5s). Named imports tree-shake down to only what the site draws.
 *
 * To use a new icon: import it here and add it to `registry`.
 */
import {
  Accessibility, Activity, Atom, ArrowRight, ArrowUpRight, Blocks, BookOpen,
  BrainCircuit, Briefcase, Building2, CalendarCheck, Check, ChevronDown,
  ChevronRight, Circle, CircleAlert, CircleCheck, Clock, Compass, Cpu,
  CreditCard, Dna, Download, EyeOff, FileCheck2, FileText, Files, FlaskConical,
  GraduationCap, Handshake, Heart, HeartHandshake, Info, KeyRound, Languages,
  Layers, LifeBuoy, LineChart, Mail, Menu, MessageCircle,
  MessageSquare, Minus, Moon, MousePointerClick, Newspaper, Palette, PenLine,
  Play, Plus, Quote, Rocket, Search, SearchX, Server, ShieldCheck, Sigma,
  Sparkles, Sun, Target, TriangleAlert, UserCheck, UserMinus, Users,
  Video, X,
} from 'lucide-react';

const registry = {
  Accessibility, Activity, Atom, ArrowRight, ArrowUpRight, Blocks, BookOpen,
  BrainCircuit, Briefcase, Building2, CalendarCheck, Check, ChevronDown,
  ChevronRight, Circle, CircleAlert, CircleCheck, Clock, Compass, Cpu,
  CreditCard, Dna, Download, EyeOff, FileCheck2, FileText, Files, FlaskConical,
  GraduationCap, Handshake, Heart, HeartHandshake, Info, KeyRound, Languages,
  Layers, LifeBuoy, LineChart, Mail, Menu, MessageCircle,
  MessageSquare, Minus, Moon, MousePointerClick, Newspaper, Palette, PenLine,
  Play, Plus, Quote, Rocket, Search, SearchX, Server, ShieldCheck, Sigma,
  Sparkles, Sun, Target, TriangleAlert, UserCheck, UserMinus, Users,
  Video, X,
};

/**
 * Named icon with a consistent stroke weight across the site — matching
 * stroke width is what makes an icon set read as one system.
 * Decorative by default; pass a `title` only when the icon carries meaning
 * no adjacent text already conveys.
 */
export default function Icon({ name, size = 20, strokeWidth = 1.75, ...rest }) {
  const Cmp = registry[name] ?? Circle;

  if (import.meta.env.DEV && !registry[name]) {
    console.warn(`[Icon] "${name}" is not in the registry — add it to Icon.jsx.`);
  }

  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
