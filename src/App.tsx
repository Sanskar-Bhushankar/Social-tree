import React from 'react';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';
import ProjectLinks from './components/ProjectLinks';
import TweetScroller from './components/TweetScroller';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Social Tree</h1>
      <div className="max-w-6xl mx-auto space-y-12">
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
  );
}

export default App;