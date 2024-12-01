import React from 'react';
import { Code, Box, Camera, Bus } from 'lucide-react';
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
  image?: ProjectImage;
}

const projects: Project[] = [
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
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-700 border border-gray-700"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-700 rounded-lg text-green-400 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">{project.name}</h3>
                    <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                  </div>
                </div>
                {project.image && (
                  <div className="mt-4">
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      className="w-full h-32 object-contain rounded-lg"
                    />
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