"use client";

import { Calendar, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution:
      'Eulogio "Amang" Rodriguez Institute of Science and Technology',
    location: "Manila, Philippines",
    period: "2020-2024",
  },
  {
    degree: "Science, Technology, Engineering and Mathematics (STEM)",
    institution: "Arellano University",
    location: "Manila, Philippines",
    period: "2018-2020",
  },
];

export default function EducationTimeline() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="space-y-12">
      {education.map((edu, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-primary">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
          <div
            className={`${
              isDark ? "bg-gray-800" : "bg-white shadow-md"
            } rounded-lg p-6 mb-2`}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold">
              {edu.degree}
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-medium">
              {edu.institution}
            </p>
            <div className="flex items-center gap-2 mt-3 text-muted-foreground">
              <MapPin size={16} />
              <span className="text-sm sm:text-base">{edu.location}</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-muted-foreground">
              <Calendar size={16} />
              <span className="text-sm sm:text-base">{edu.period}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
