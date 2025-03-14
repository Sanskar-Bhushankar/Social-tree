import React from 'react';
import { Award } from 'lucide-react';

interface Badge {
  imageUrl: string;
  title: string;
  date: string;
  link: string;
}

// Featured badges at the top
const featuredBadges: Badge[] = [
  {
    imageUrl: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    title: "AWS Certified Cloud Practitioner",
    date: "February 27, 2025",
    link: "https://www.credly.com/badges/3053c78e-1c1b-45e4-ba51-c642e479f498/public_url"
  },
  {
    imageUrl: "https://images.credly.com/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png",
    title: "AWS re/Start Graduate",
    date: "January 20, 2025",
    link: "https://www.credly.com/badges/c2406767-51a6-44f5-a381-a46199d64b03/public_url"
  },
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/microsoft-learn-ai-skills-challenge-november-2024-badge.png",
    title: "AI Skills Challenge | November 2024",
    date: "12/3/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=HG7V34BITK",
    title: "Genie - 100 Quizzes Completed Infosys Springboard",
    date: "Aug 23, 2024",
    link: "#"
  }
];

// Rest of the badges
const badges: Badge[] = [
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/generic-trophy.svg",
    title: "Govern and protect sensitive information in the age of AI",
    date: "10/9/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/extract-data-from-forms-use-form-recognizer.svg",
    title: "Develop solutions with Azure AI Document Intelligence",
    date: "9/30/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/get-started-ai-fundamentals.svg",
    title: "Fundamental AI Concepts | Microsoft Azure",
    date: "9/28/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/generic-badge.svg",
    title: "Fundamentals of Azure AI services",
    date: "9/28/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/analyze-receipts-form-recognizer.svg",
    title: "Fundamentals of Azure AI Document Intelligence",
    date: "9/29/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/plan-form-recognizer-solution.svg",
    title: "Plan an Azure AI Document Intelligence solution",
    date: "9/29/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/create-composed-form-recognizer-model.svg",
    title: "Create a composed Document intelligence model",
    date: "9/30/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/generic-badge.svg",
    title: "Manage compliance with Microsoft Purview for Copilot for Microsoft 365",
    date: "10/9/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://learn.microsoft.com/en-us/training/achievements/generic-badge.svg",
    title: "Manage AI data security challenges with Microsoft Purview",
    date: "10/7/2024",
    link: "https://learn.microsoft.com/en-us/users/sanskarbhushankar-9470/"
  },
  {
    imageUrl: "https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=5W5G76DYM6",
    title: "ACE-Badge For completing 25 quiz resources",
    date: "Aug 10, 2024",
    link: "#"
  }
];

export default function DigitalBadges() {
  return (
    <div className="w-full">
      <div className="mt-8">
        <div className="flex items-center justify-center space-x-3 mb-12">
          <Award className="w-8 h-8 text-green-400" />
          <h2 className="text-4xl font-bold text-center text-soft-gray-300">Digital Badges</h2>
        </div>

        {/* Featured Badges */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 max-w-3xl mx-auto">
          {featuredBadges.map((badge, index) => (
            <a
              key={index}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 bg-soft-darker rounded-xl
                transition-all duration-300 hover:-translate-y-1
                border border-soft-gray-700 hover:border-green-400/50
                hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="w-24 h-24 mb-3 transition-transform group-hover:scale-110">
                <img
                  src={badge.imageUrl}
                  alt={badge.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium text-soft-gray-300 group-hover:text-green-400 
                  transition-colors line-clamp-2 mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-soft-gray-400">{badge.date}</p>
              </div>
            </a>
          ))}
        </div>
        
        {/* Divider before regular badges */}
        {/* <div className="w-full max-w-5xl mx-auto border-t border-soft-gray-700 mb-10"></div> */}
        
        {/* Other Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {badges.map((badge, index) => (
            <a
              key={index}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-3 bg-soft-darker rounded-xl
                transition-all duration-300 hover:-translate-y-1
                border border-soft-gray-700 hover:border-green-400/50
                hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="w-16 h-16 mb-3 transition-transform group-hover:scale-110">
                <img
                  src={badge.imageUrl}
                  alt={badge.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium text-soft-gray-300 group-hover:text-green-400 
                  transition-colors line-clamp-2 mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-soft-gray-400">{badge.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 