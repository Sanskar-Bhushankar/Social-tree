import React, { useEffect, useRef } from 'react';
import { useTweetScroll } from '../hooks/useTweetScroll';
import { Tweet } from './Tweet';
import { tweets } from '../data/tweets';

export default function TweetScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { speed } = useTweetScroll();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const tweetContainer = containerRef.current;
    if (!scrollContainer || !tweetContainer) return;

    const scrollSpeed = speed === 'normal' ? 20 : 100;
    let animationFrameId: number;
    let lastTimestamp = 0;

    const resetScroll = () => {
      if (scrollContainer.scrollLeft >= tweetContainer.offsetWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const animate = (timestamp: number) => {
      if (timestamp - lastTimestamp >= scrollSpeed) {
        scrollContainer.scrollLeft += 2;
        resetScroll();
        lastTimestamp = timestamp;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  // Create 4 copies of tweets for seamless looping
  const extendedTweets = [...tweets, ...tweets, ...tweets, ...tweets];

  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-semibold mb-6">Latest Updates</h2>
      <div className="relative">
        <div 
          ref={scrollRef}
          className="overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div 
            ref={containerRef}
            className="inline-flex gap-6 py-4"
          >
            {extendedTweets.map((tweet, index) => (
              <Tweet key={`${tweet.id}-${index}`} {...tweet} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}