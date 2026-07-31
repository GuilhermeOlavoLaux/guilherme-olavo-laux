import React from "react";
import { Code2, Layers, Database, Terminal, Smartphone } from "lucide-react";
import "./TechSkills.css";

interface Skill {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const skillsData: Skill[] = [
  {
    id: 1,
    name: "ReactJS",
    icon: Code2,
    color: "text-cyan-400 bg-cyan-400/10",
  },
  {
    id: 2,
    name: "Next.js",
    icon: Layers,
    color: "text-zinc-100 bg-zinc-100/10",
  },
  {
    id: 5,
    name: "React Native",
    icon: Smartphone,
    color: "text-purple-400 bg-purple-400/10",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: Terminal,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 4,
    name: "Node.js",
    icon: Database,
    color: "text-green-500 bg-green-500/10",
  },
];

export function TechSkills() {
  return (
    <div className="tech_skills">
      <h1 className="tech_skills-tittle">
        <Terminal className="tech_skills-tittle2" />
        Habilidades Técnicas
      </h1>

      <div className="tech_skills-box">
        <div className="tech_skills-container">
          <h1 className="tech_skills-container-title"> Front End:</h1>
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div className="tech_skills-container-div">
                <Icon />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
