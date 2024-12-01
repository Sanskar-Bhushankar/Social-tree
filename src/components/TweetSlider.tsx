import React, { useEffect, useState } from 'react';

const tweets = [
  {
    id: 1,
    content: "Just launched a new React hooks tutorial! Check it out here: https://example.com/tutorial",
    date: "2h ago"
  },
  {
    id: 2,
    content: "🎉 My open source project reached 1000 stars on GitHub! Thanks everyone for the support!",
    date: "1d ago"
  },
  {
    id: 3,
    content: "New blog post: 'Advanced TypeScript Patterns' - sharing my learnings from building large-scale apps",
    date: "2d ago"
  }
];

export default function TweetSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tweets.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl px-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Latest Tweets</h2>
      <div className="relative overflow-hidden bg-white rounded-lg shadow-md p-6 h-32">
        <div
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {tweets.map((tweet) => (
            <div
              key={tweet.id}
              className="min-w-full px-4"
            >
              <p className="text-gray-800">{tweet.content}</p>
              <span className="text-sm text-gray-500">{tweet.date}</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {tweets.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}