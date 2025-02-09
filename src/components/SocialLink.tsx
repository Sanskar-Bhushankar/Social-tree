import React from 'react';
import { SocialLinkProps } from '../types/social';

export function SocialLink({ name, url, icon: Icon, description, onMouseEnter, onMouseLeave }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-soft-darker rounded-xl shadow-lg hover:shadow-xl 
        transition-all duration-300 transform hover:-translate-y-1 
        hover:bg-soft-dark border border-soft-gray-700"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-soft-dark rounded-lg text-green-400">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-soft-gray-300">{name}</h3>
          <p className="text-sm text-soft-gray-400 mt-1">{description}</p>
        </div>
      </div>
    </a>
  );
}