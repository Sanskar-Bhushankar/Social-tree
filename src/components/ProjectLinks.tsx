import React from 'react';
import { Code, Box, Cpu, RailSymbol, Bus, FolderArchive, CameraIcon, Camera } from 'lucide-react';

const projects = [
  {
    name: 'Screenshot-valut-chrome-extension',
    description: 'A Chrome extension for capturing, organizing, and managing screenshots with drag-and-drop functionality and instant actions.',
    url: 'https://github.com/Sanskar-Bhushankar/Screenshot-Vault-Extension',
    icon: Camera
  },
  {
    name: 'Train Seat Booking React-DSA',
    description: 'Custom Seat booking for eldery passengers',
    url: 'https://github.com/johndeveloper/react-components',
    icon: Bus
  },
  {
    name: 'Social-Tree',
    description: 'Personal linktree with tech-finish',
    url: 'https://social-tree-sanskar.netlify.app/',
    icon: Box
  }
];

export default function ProjectLinks() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px]"
          >
            <div className="flex items-start space-x-4">
              <project.icon className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="font-medium text-gray-800 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}