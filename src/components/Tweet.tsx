import React, { useEffect, useState } from 'react';
import { TweetProps } from '../types/tweet';

// Load Twitter widgets script once at the component level
let twitterScriptLoaded = false;
const loadTwitterScript = () => {
  if (twitterScriptLoaded) return Promise.resolve();
  
  return new Promise<void>((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.onload = () => {
      twitterScriptLoaded = true;
      resolve();
    };
    document.body.appendChild(script);
  });
};

export function Tweet({ embedCode }: TweetProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTweet = async () => {
      await loadTwitterScript();
      if (window.twttr) {
        await window.twttr.widgets.load();
      }
      setIsLoading(false);
    };
    loadTweet();
  }, []);

  return (
    <div className="min-w-[400px] max-w-[400px] bg-white rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg">
      {isLoading && (
        <div className="h-[300px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
      <div className={isLoading ? 'invisible h-0' : ''} dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  );
}