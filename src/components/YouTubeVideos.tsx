import React from 'react';
import { Youtube } from 'lucide-react';

export default function YouTubeVideos() {
  return (
    <div className="w-full bg-[#111111] rounded-lg p-4 border border-[#222222]">
      <div className="flex items-center space-x-2 mb-4">
        <Youtube className="w-4 h-4 text-[#4ade80]" />
        <h2 className="text-lg font-bold text-gray-100">Featured Videos</h2>
      </div>
      
      <div className="space-y-2">
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-sm border border-[#333333]"
            src="https://www.youtube.com/embed/pZByAxUM8Sk"
            title="YouTube video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-sm border border-[#333333]"
            src="https://www.youtube.com/embed/Lz9uBGjFaJE"
            title="YouTube video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
