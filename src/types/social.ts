import { LucideIcon } from 'lucide-react';

export interface SocialLinkProps {
  name: string;
  url: string;
  icon: LucideIcon;
  description: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}