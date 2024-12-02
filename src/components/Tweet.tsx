import React from 'react';
import { Tweet as ReactTweet } from 'react-tweet';

interface TweetProps {
  id: string;
}

export function Tweet({ id }: TweetProps) {
  return (
    <div className="w-[320px] transform transition-all duration-300">
      <div className="scale-[0.82] origin-top -mt-8 -mb-10">
        <ReactTweet id={id} />
      </div>
    </div>
  );
}