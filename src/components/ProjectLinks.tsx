import React from 'react';
import { Code, Box, Camera, Bus, ExternalLink } from 'lucide-react';
import treeImage from '../images/tree.png';

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  name: string;
  description: string;
  url: string;
  icon: React.ElementType;
  tags?: string[];  // Add tags for technologies used
  image?: ProjectImage;
}

const projects: Project[] = [
  {
    name: 'Screenshot-vault-chrome-extension',
    description: 'A Chrome extension for capturing, organizing, and managing screenshots with drag-and-drop functionality and instant actions.',
    url: 'https://github.com/Sanskar-Bhushankar/Screenshot-Vault-Extension',
    icon: Camera,
    tags: ['Chrome API', 'JavaScript', 'HTML5 Drag & Drop']
  },
  {
    name: 'Train Seat Booking React-DSA',
    description: 'Custom Seat booking for elderly passengers',
    url: 'https://github.com/johndeveloper/react-components',
    icon: Bus,
    tags: ['React', 'TypeScript', 'Data Structures']
  },
  {
    name: 'Social-Tree',
    description: 'Personal linktree with tech-finish',
    url: 'https://social-tree-sanskar.netlify.app/',
    icon: Box,
    tags: ['React', 'TailwindCSS', 'Vite']
  }
];

export default function ProjectLinks() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-soft-gray-300">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-6 bg-soft-darker rounded-xl 
                transition-all duration-300 transform hover:-translate-y-1 
                border border-soft-gray-700 hover:border-green-400/50
                hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-soft-dark rounded-lg text-green-400 
                    group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-soft-gray-400 
                    opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-soft-gray-300 mb-2 
                    group-hover:text-green-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-soft-gray-400 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                {project.tags && (
                  <div className="mt-auto pt-4 border-t border-soft-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-soft-dark 
                            text-soft-gray-400 border border-soft-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}