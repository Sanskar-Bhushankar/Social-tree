import React from 'react';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';
import ProjectLinks from './components/ProjectLinks';
import TweetScroller from './components/TweetScroller';
import treeImage from './images/tree.png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-gray-900 to-emerald-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <img src={treeImage} alt="Social Tree Logo" className="w-12 h-12 mr-4" />
          <h1 className="text-4xl font-bold text-center text-gray-100">Social Tree</h1>
        
        </div>
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Profile />
            </div>
            <div className="lg:col-span-2">
              <SocialLinks />
            </div>
          </div>
          <ProjectLinks />
          <TweetScroller />
        </div>
      </div>
    </div>
  );
}

export default App;