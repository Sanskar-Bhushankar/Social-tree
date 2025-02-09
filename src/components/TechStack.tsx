import React from 'react';
import { Laptop } from 'lucide-react';

interface TechCategory {
  title: string;
  items: { name: string; color: string }[];
}

export default function TechStack() {
  const techCategories: TechCategory[] = [
    {
      title: "Languages",
      items: [
        { name: "PYTHON", color: "bg-blue-500/90" },
        { name: "JAVASCRIPT", color: "bg-amber-500/90" },
        { name: "TYPESCRIPT", color: "bg-blue-600/90" },
        { name: "PHP", color: "bg-indigo-500/90" },
        { name: "C#", color: "bg-violet-500/90" }
      ]
    },
    {
      title: "Frontend",
      items: [
        { name: "REACT", color: "bg-cyan-500/90" },
        { name: "CSS", color: "bg-blue-500/90" },
        { name: "HTML5", color: "bg-orange-500/90" },
        { name: "TAILWINDCSS", color: "bg-cyan-400/90" },
        { name: "BOOTSTRAP", color: "bg-purple-500/90" }
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "NODE.JS", color: "bg-emerald-500/90" },
        { name: "EXPRESS.JS", color: "bg-slate-500/90" },
        { name: "SPRING", color: "bg-teal-500/90" },
        { name: "HADOOP", color: "bg-rose-500/90" }
      ]
    },
    {
      title: "AI/ML",
      items: [
        { name: "TENSORFLOW", color: "bg-orange-500/90" },
        { name: "PANDAS", color: "bg-violet-500/90" },
        { name: "PYTORCH", color: "bg-rose-500/90" },
        { name: "OPENCV", color: "bg-indigo-500/90" },
        { name: "SCIKIT LEARN", color: "bg-blue-500/90" }
      ]
    },
    {
      title: "Databases",
      items: [
        { name: "MONGODB", color: "bg-emerald-500/90" },
        { name: "SQL", color: "bg-blue-500/90" },
        { name: "SQL SERVER", color: "bg-rose-500/90" },
        { name: "REDIS", color: "bg-red-500/90" },
        { name: "SQLITE", color: "bg-sky-500/90" }
      ]
    },
    {
      title: "DevOps",
      items: [
        { name: "AWS", color: "bg-orange-500/90" },
        { name: "DOCKER", color: "bg-sky-500/90" },
        { name: "BASH", color: "bg-slate-500/90" },
        { name: "GIT", color: "bg-rose-500/90" }
      ]
    },
    {
      title: "BaaS",
      items: [
        { name: "APPWRITE", color: "bg-fuchsia-500/90" },
        { name: "FIREBASE", color: "bg-amber-500/90" },
        { name: "SUPABASE", color: "bg-emerald-500/90" }
      ]
    },
    {
      title: "Frameworks/Software",
      items: [
        { name: "DJANGO", color: "bg-teal-500/90" },
        { name: ".NET", color: "bg-violet-500/90" },
        { name: "POSTMAN", color: "bg-orange-500/90" },
        { name: "SELENIUM", color: "bg-blue-500/90" },
        { name: "FIGMA", color: "bg-purple-500/90" },
        { name: "LINUX", color: "bg-slate-500/90" }
      ]
    }
  ];

  return (
    <div className=" mt-8 w-full bg-[#111111] rounded-lg p-4 border border-[#222222]">
      <div className="flex items-center space-x-2 mb-4">
        <Laptop className="w-4 h-4 text-[#4ade80]" />
        <h2 className="text-lg font-bold text-gray-100">Tech Stack</h2>
      </div>

      <div className="space-y-3">
        {techCategories.map((category) => (
          <div key={category.title} className="space-y-1">
            <h3 className="text-xs font-medium text-[#4ade80] uppercase tracking-wider">{category.title}</h3>
            <div className="flex flex-wrap gap-1">
              {category.items.map((tech) => (
                <span
                  key={tech.name}
                  className={`${tech.color} px-2 py-0.5 rounded-sm text-xs font-medium bg-[#181818] text-gray-300 border border-[#333333] hover:border-[#4ade80] transition-colors`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
