import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import profileImage from '../images/image1.jpg';

export default function Profile() {
  return (
    <div className="flex flex-col items-start space-y-4">
      <img
        src={profileImage}
        alt="Developer Profile"
        className="w-32 h-32 rounded-full object-cover shadow-lg ring-2 ring-green-400"
      />
      <h1 className="text-3xl font-bold text-gray-100">Sanskar Bhushankar</h1>
      <p className="text-gray-300 max-w-md">
        I am a MERN developer and data scientist, currently pursuing MSc in Data Science. I am learning AWS and actively working on open source projects, contributing to the community, and sharing knowledge.
      </p>
      <div className="flex flex-col space-y-2">
        <a 
          href="mailto:sanskarbhushankar01@gmail.com"
          className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors group"
        >
          <Mail size={18} className="group-hover:scale-110 transition-transform" />
          <span>sanskarbhushankar01@gmail.com</span>
        </a>
        <div className="flex items-center space-x-2 text-gray-300">
          <MapPin size={18} />
          <span>Mumbai, India</span>
        </div>
      </div>
    </div>
  );
}