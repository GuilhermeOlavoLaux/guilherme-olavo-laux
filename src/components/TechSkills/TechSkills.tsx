import React from "react";
import {
  Code2,
  Layers,
  Database,
  Terminal,
  Smartphone,
  Cloud,
} from "lucide-react";

// 1. Definição dos tipos para maior segurança no código
interface Skill {
  id: number;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

// 2. Dados da lista de habilidades
const skillsData: Skill[] = [
  {
    id: 1,
    name: "ReactJS",
    category: "Front-End",
    icon: Code2,
    color: "text-cyan-400 bg-cyan-400/10",
  },
  {
    id: 2,
    name: "Next.js",
    category: "Full-Stack",
    icon: Layers,
    color: "text-zinc-100 bg-zinc-100/10",
  },
  {
    id: 3,
    name: "TypeScript",
    category: "Linguagem",
    icon: Terminal,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 4,
    name: "Node.js",
    category: "Back-End",
    icon: Database,
    color: "text-green-500 bg-green-500/10",
  },
  {
    id: 5,
    name: "React Native",
    category: "Mobile",
    icon: Smartphone,
    color: "text-purple-400 bg-purple-400/10",
  },
  {
    id: 6,
    name: "Cloud/DevOps",
    category: "Infra",
    icon: Cloud,
    color: "text-orange-400 bg-orange-400/10",
  },
];

export function TechSkills() {
  return (
    <div className="w-full max-w-md p-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-zinc-100 mb-4 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-cyan-400" />
        Habilidades Técnicas
      </h3>

      <ul className="space-y-3">
        {skillsData.map((skill) => {
          const Icon = skill.icon;
          return (
            <li
              key={skill.id}
              className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                {/* Container do Ícone com cor dinâmica */}
                <div className={`p-2 rounded-md ${skill.color}`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Nome da Tecnologia */}
                <span className="text-sm font-medium text-zinc-200">
                  {skill.name}
                </span>
              </div>

              {/* Tag da Categoria / Contexto Dev */}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-mono">
                {skill.category}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
