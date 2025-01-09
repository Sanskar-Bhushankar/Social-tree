import React from 'react';
import { Trophy, Briefcase, Code, Cloud, Brain, GraduationCap } from 'lucide-react';

interface AchievementSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const AchievementSection: React.FC<AchievementSectionProps> = ({ icon, title, children }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      {icon}
      <h4 className="text-base font-semibold text-[#4ade80]">{title}</h4>
    </div>
    {children}
  </div>
);

export default function Achievements() {
  return (
    <div className="w-full bg-[#111111] rounded-lg p-4 border border-[#222222]">
      <div className="flex items-center space-x-2 mb-4">
        <Trophy className="w-5 h-5 text-[#4ade80]" />
        <h2 className="text-lg font-bold text-gray-100">Growth of 2024</h2>
      </div>
      
      <div className="space-y-4 text-sm text-gray-300">
        <div className="bg-[#181818] p-3 rounded-lg border border-[#333333]">
          <h3 className="text-base font-semibold text-[#4ade80] mb-2">
            My #100DaysOfCode journey on Twitter(X)
          </h3>

          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-[#4ade80]" />
                <h4 className="font-semibold text-[#4ade80]">Internships & Certifications:</h4>
              </div>
              <ul className="list-disc pl-4 space-y-1">
                <li className="text-gray-300">Data Analysis Internship at Infosys Springboard</li>
                <li className="text-gray-300">Machine Learning Internship at Atice Microsoft and SAP</li>
                <li className="text-gray-300">Virtual Job Simulation Internship Certificate - Data Analysis at Accenture</li>
              </ul>
            </div>
          </div>
        </div>

        <AchievementSection icon={<Code className="w-4 h-4 text-[#4ade80]" />} title="Small Projects Developed During Learning">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
            <ol className="list-decimal space-y-1">
              <li>Instagram-inspired double-click heart pop feature</li>
              <li>React shoe store frontend (Asics clone)</li>
              <li>Chrome extension for screenshot management</li>
              <li>Face recognition-based attendance system</li>
              <li>Digital garden using React and Vite</li>
              <li>Train seat booking system</li>
              <li>Personalized Linktree using React</li>
            </ol>
            <ol className="list-decimal space-y-1" start={8}>
              <li>News app using the News API in JavaScript</li>
              <li>Password generator in React</li>
              <li>GitHub contribution graph</li>
              <li>Routing page with GitHub API integration</li>
              <li className="bg-[#181818] px-2 py-0.5 rounded-sm border border-[#333333]">Dynamic Pricing Prediction (Infosys)</li>
              <li className="bg-[#181818] px-2 py-0.5 rounded-sm border border-[#333333]">Share of Market Forecasting (Infosys)</li>
              <li className="bg-[#181818] px-2 py-0.5 rounded-sm border border-[#333333]">Face recognition attendance system (Internship)</li>
            </ol>
          </div>
        </AchievementSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AchievementSection icon={<GraduationCap className="w-4 h-4 text-[#4ade80]" />} title="Other Milestones">
            <ul className="list-disc space-y-1 pl-4">
              <li>
                <span className="bg-[#181818] px-2 py-0.5 rounded-sm border border-[#333333]">LeetCode Badge:</span>
                <span className="ml-2">SQL50</span>
              </li>
              <li>Tackled 50 days of LeetCode challenges</li>
              <li>Finished 100 days of LeetCode challenges</li>
              <li>Started AWS Cloud Practitioner Essentials journey</li>
            </ul>
          </AchievementSection>

          <AchievementSection icon={<Cloud className="w-4 h-4 text-[#4ade80]" />} title="AWS Knowledge">
            <ul className="list-disc space-y-1 pl-4">
              <li>EC2 & S3</li>
              <li>VPC & Subnetting</li>
              <li>CloudTrail & CloudWatch</li>
              <li>Lambda & API Gateway</li>
              <li>IAM & Identity Management</li>
            </ul>
          </AchievementSection>
        </div>

        <AchievementSection icon={<Brain className="w-4 h-4 text-[#4ade80]" />} title="ML Concepts Explored">
          <ul className="list-disc space-y-1 pl-4">
            <li>Strategies behind dynamic pricing</li>
            <li>Calculating the share of market</li>
            <li>Understanding prediction vs. forecasting</li>
            <li>Face recognition algorithms</li>
          </ul>
        </AchievementSection>

        <p className="text-sm text-[#4ade80] font-medium italic text-center bg-[#181818] py-2 rounded-lg border border-[#333333]">
          This journey has been transformative, showcasing my growth, dedication, and passion for technology.
        </p>
      </div>
    </div>
  );
}
