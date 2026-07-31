import { Terminal, Mail } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiElectron,
  SiTypescript,
  SiJavascript,
  SiCss,
  SiRedux,
  SiNodedotjs,
  SiKotlin,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiDocker,
  SiPython,
  SiServerless,
} from "@icons-pack/react-simple-icons";
import React from "react";

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
    icon: SiReact,
    color: "text-cyan-400 bg-cyan-400/10",
  },
  {
    id: 2,
    name: "NextJs",
    icon: SiNextdotjs,
    color: "text-zinc-100 bg-zinc-100/10",
  },
  {
    id: 8,
    name: "Electron",
    icon: SiElectron,
    color: "text-zinc-100 bg-zinc-100/10",
  },
  {
    id: 5,
    name: "React Native",
    icon: SiReact,
    color: "text-purple-400 bg-purple-400/10",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 6,
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 7,
    name: "CSS",
    icon: SiCss,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 8,
    name: "Redux",
    icon: SiRedux,
    color: "text-blue-500 bg-blue-500/10",
  },
];

const skillsBackData: Skill[] = [
  {
    id: 1,
    name: "NodeJs",
    icon: SiNodedotjs,
    color: "text-cyan-400 bg-cyan-400/10",
  },
  {
    id: 2,
    name: "Java",
    icon: SiServerless,
    color: "text-zinc-100 bg-zinc-100/10",
  },
  {
    id: 8,
    name: "Kotlin",
    icon: SiKotlin,
    color: "text-zinc-100 bg-zinc-100/10",
  },
  {
    id: 5,
    name: "MySql",
    icon: SiMysql,
    color: "text-purple-400 bg-purple-400/10",
  },
  {
    id: 3,
    name: "MongoDb",
    icon: SiMongodb,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 6,
    name: "SpringBoot",
    icon: SiSpringboot,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 7,
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 8,
    name: "Python",
    icon: SiPython,
    color: "text-blue-500 bg-blue-500/10",
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
          <h1 className="tech_skills-container-title">Front End</h1>
          <div className="tech_skills-grid">
            {skillsData.map((skill) => {
              const Icon = skill.icon;
              return (
                <div className="tech_skills-item" key={skill.id}>
                  <Icon className="tech_skills-item-icon" />
                  <span className="tech_skills-item-name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="tech_skills-container">
          <h1 className="tech_skills-container-title">Back End</h1>
          <div className="tech_skills-grid">
            {skillsBackData.map((skill) => {
              const Icon = skill.icon;
              return (
                <div className="tech_skills-item" key={skill.id}>
                  <Icon className="tech_skills-item-icon" />
                  <span className="tech_skills-item-name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="contact">
        <Terminal className="tech_skills-tittle2" />
        <h1 className="tech_skills-title">Entre em contato:</h1>
        <ul className="listlink">
          <li className="link1">
            <Mail />
            <p>lauxguilherme@hotmail.com</p>
          </li>
          <li
            className="link1"
            role="link"
            tabIndex={0}
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/guilherme-laux1999/",
                "_blank",
                "noopener,noreferrer",
              )
            }
            onKeyDown={(e) => {
              if (e.key === "Enter")
                window.open(
                  "https://www.linkedin.com/in/guilherme-laux1999/",
                  "_blank",
                  "noopener,noreferrer",
                );
            }}
          >
            <Mail />
            <p>linkedin.com/guilherme-laux1999</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
