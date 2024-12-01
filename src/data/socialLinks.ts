import { Github, Twitter, Linkedin, BookOpen, Instagram, Code2, FileCheck } from 'lucide-react';
import type { SocialLinkProps } from '../types/social';

export const socialLinks: Omit<SocialLinkProps, 'onMouseEnter' | 'onMouseLeave'>[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sanskar-bhushankar-6b1a49244/',
    icon: Linkedin,
    description: 'Connect with me professionally'
  },
  {
    name: 'Digital Garden',
    url: 'https://sanskar-bhushankar.github.io/Digital-garden/',
    icon: BookOpen,
    description: 'Explore my learning notes and articles'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/sanskar2804',
    icon: Twitter,
    description: 'Follow me for tech insights and updates'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sanskar_rr/',
    icon: Instagram,
    description: 'Not so usefull but still interesting'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/sanskarbhushankar01/',
    icon: Code2,
    description: 'Check out my coding solutions'
  },
  {
    name: 'Certifications',
    url: 'https://drive.google.com/drive/folders/certifications',
    icon: FileCheck,
    description: 'View my technical certifications'
  }

];