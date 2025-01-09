import { Github, Twitter, Linkedin, BookOpen, Instagram, Code2, FileCheck, FileIcon } from 'lucide-react';
import type { SocialLinkProps } from '../types/social';

export const socialLinks: Omit<SocialLinkProps, 'onMouseEnter' | 'onMouseLeave'>[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sanskar-bhushankar-6b1a49244/',
    icon: Linkedin,
    description: 'Connect with me'
  },
  {
    name: 'DigitalGarden',
    url: 'https://digital-garden-tdes.vercel.app/',
    icon: BookOpen,
    description: 'My learning notes-blogs'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/sanskar2804',
    icon: Twitter,
    description: 'My LearnInPublic Social'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sanskar_rr/',
    icon: Instagram,
    description: 'Not so usefull filling spaces'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/sanskarbhushankar01/',
    icon: Code2,
    description: 'Check out my coding solutions'
  },
  {
    name: 'Certifications',
    url: 'https://drive.google.com/drive/folders/1kjpPX8B4NERtbLFairEnmxWpCfwNoR7S?usp=sharing',
    icon: FileCheck,
    description: 'Technical certifications'
  },
  {
    name: 'Github',
    url: 'https://github.com/Sanskar-Bhushankar',
    icon: Github,
    description: 'checkout my repositories'
  },
  {
    name: 'Resume-DataAnalysis',
    url: 'https://drive.google.com/file/d/1-8gmL9_eREhyjWSlmc2sfYckj38xPPD2/view?usp=sharing',
    icon: FileIcon,
    description: 'checkout my CV'
  },
  {
    name: 'Resume WebDev/Cloud',
    url: 'https://drive.google.com/file/d/1JibnOF-5y2qaeOEfEu6YQ11jcFuUfpMM/view?usp=sharing',
    icon: FileIcon,
    description: 'checkout my CV'
  },

];
