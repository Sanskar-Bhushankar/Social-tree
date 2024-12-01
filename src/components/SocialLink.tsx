import React from 'react';
import { SocialLinkProps } from '../types/social';

export function SocialLink({ name, url, icon: Icon, description, onMouseEnter, onMouseLeave }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon size={32} className="mb-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-sm text-center text-gray-600">{description}</p>
    </a>
  );
}