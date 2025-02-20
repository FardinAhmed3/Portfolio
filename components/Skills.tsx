import { FaNodeJs, FaReact, FaVuejs, FaAws, FaDocker, FaGitAlt, FaBootstrap } from "react-icons/fa"
import {
  SiExpress,
  SiFastapi,
  SiDjango,
  SiDotnet,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiPostman,
  SiSpring,
  SiNginx,
  SiNextdotjs,
  SiBootstrap,
} from "react-icons/si"
import { MdDesignServices } from "react-icons/md" // Using this for Material UI

const skillCategories = [
  {
    name: "Backend",
    skills: [
      { name: "Spring", icon: SiSpring },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: ".NET", icon: SiDotnet },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Material UI", icon: MdDesignServices }, // Generic Icon
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Git", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "Nginx", icon: SiNginx },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-700/80 rounded-lg shadow-md p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center">
                    <skill.icon className="text-4xl mb-2 text-blue-500 transition-transform duration-300 transform hover:scale-110" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

