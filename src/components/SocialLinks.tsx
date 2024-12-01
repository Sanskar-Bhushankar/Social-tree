import React from 'react';
import { useTweetScroll } from '../hooks/useTweetScroll';
import { SocialLink } from './SocialLink';
import { socialLinks } from '../data/socialLinks';

export default function SocialLinks() {
  const { setScrollSpeed } = useTweetScroll();

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.map((link) => (
          <SocialLink
            key={link.name}
            {...link}
            onMouseEnter={() => setScrollSpeed('slow')}
            onMouseLeave={() => setScrollSpeed('normal')}
          />
        ))}
      </div>
    </div>
  );
}