import React from 'react';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';
import ProjectLinks from './components/ProjectLinks';
import TweetScroller from './components/TweetScroller';
import Achievements from './components/Achievements';
import TechStack from './components/TechStack';
import YouTubeVideos from './components/YouTubeVideos';
import DigitalBadges from './components/DigitalBadges';
import treeImage from './images/tree.png';

function App() {
  return (
    <div className="min-h-screen bg-soft-black text-soft-gray-300">
      <div className="max-w-[1080px] mx-auto px-4 py-6">
        <div className="flex items-center justify-center mb-6">
          <img src={treeImage} alt="Social Tree Logo" className="w-10 h-10 mr-3" />
          <h1 className="text-3xl font-bold text-center text-soft-gray-300">Social Tree</h1>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <Profile />
            </div>
            <div className="lg:col-span-2">
              <SocialLinks />
            </div>
          </div>
          <ProjectLinks />
          <DigitalBadges />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Achievements />
            <div className="space-y-4">
              <TechStack />
              <YouTubeVideos />
            </div>
          </div>
          <TweetScroller />
        </div>
      </div>
    </div>
  );
}

export default App;