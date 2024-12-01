import React from 'react';
import { Mail } from 'lucide-react';

export default function Profile() {
  return (
    <div className="flex flex-col items-start space-y-4">
      <img
        src="/src/images/image1.jpeg"
        alt="Developer Profile"
        className="w-32 h-32 rounded-full object-cover shadow-lg"
      />
      <h1 className="text-3xl font-bold text-gray-800">Sanskar Bhushankar</h1>
      <p className="text-gray-600 max-w-md">
I am a MERN developer and data scientist, currently pursuing an MSc in Data Science. I am learning AWS and actively working on open source projects, contributing to the community, and sharing knowledge.
      </p>
      <a 
        href="mailto:sanskarbhushankar01@gmail.com"
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Mail size={18} />
        <span>sanskarbhushankar01@gmail.com</span>
      </a>
    </div>
  );
}