import { NavLink, SocialPlatform, Feature } from './types';

export const NAVIGATION_LINKS: NavLink[] = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { name: 'GitHub', logo: '/github.svg', url: 'https://github.com/melvinchipimo' },
  { name: 'LinkedIn', logo: '/linkedin.svg', url: 'https://linkedin.com/in/melvinchipimo' },
  { name: 'Twitter', logo: '/twitter.svg', url: 'https://twitter.com/melvinchipimo' }
];

export const FEATURES_DATA: Feature[] = [
  {
    icon: '🎯',
    title: 'Modern Tech Stack',
    description: 'Building with the latest technologies including React, Next.js, and TypeScript'
  },
  {
    icon: '⚡',
    title: 'Performance First',
    description: 'Optimized applications with blazing-fast load times and smooth interactions'
  },
  {
    icon: '🔒',
    title: 'Secure Solutions',
    description: 'Implementing best practices for security and data protection'
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Beautiful interfaces that work perfectly across all devices'
  },
  {
    icon: '🔄',
    title: 'Clean Architecture',
    description: 'Well-structured and maintainable code following industry standards'
  },
  {
    icon: '🚀',
    title: 'Scalable Systems',
    description: 'Applications built to grow with your business needs'
  }
];