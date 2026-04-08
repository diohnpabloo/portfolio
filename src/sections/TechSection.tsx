import { motion } from "motion/react"
import { TagTitle } from '../components/TagTitle'
import * as Si from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa6'
import { useIsMobile } from '../hooks/useIsMobile'

export function TechSection() {
  const isMobile = useIsMobile()

  function getIcon(iconName: keyof typeof Si) {
    const Icon = Si[iconName]
    return Icon ? <Icon /> : null
  }

  const techs = [
   { name: "HTML5", icon: getIcon("SiHtml5"), color: "hover:text-[#E34F26]" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "hover:text-[#1572B6]" },
    { name: "JavaScript", icon: getIcon("SiJavascript"), color: "hover:text-[#F7DF1E]" },
    { name: "TypeScript", icon: getIcon("SiTypescript"), color: "hover:text-[#3178C6]" },
    { name: "React", icon: getIcon("SiReact"), color: "hover:text-[#61DAFB]" },
    { name: "Next.js", icon: getIcon("SiNextdotjs"), color: "hover:text-white" },
    { name: "Node.js", icon: getIcon("SiNodedotjs"), color: "hover:text-[#339933]" },
    { name: "Tailwind", icon: getIcon("SiTailwindcss"), color: "hover:text-[#06B6D4]" },
    { name: "Vite", icon: getIcon("SiVite"), color: "hover:text-[#646cff]" },
    { name: "n8n", icon: getIcon("SiN8N"), color: "hover:text-[#FF6D5A]" },
    { name: "PostgreSQL", icon: getIcon("SiPostgresql"), color: "hover:text-[#4169E1]" },
    { name: "Docker", icon: getIcon("SiDocker"), color: "hover:text-[#2496ED]" },
    { name: "Linux", icon: getIcon("SiLinux"), color: "hover:text-[#FCC624]" },
    { name: "Figma", icon: getIcon("SiFigma"), color: "hover:text-[#FFC0CB]" },
    { name: "Git", icon: getIcon("SiGit"), color: "hover:text-[#F05032]" },
    { name: "GitHub", icon: getIcon("SiGithub"), color: "hover:text-white" },
  ]

  const scrollingTechs = [...techs, ...techs] // Duplicar a lista para criar o efeito de rolagem contínua
  return (
    <section id="tecnologias" className="flex flex-col gap-4 md:items-center py-24 px-8">
      <TagTitle>Skills</TagTitle>
      <h2 className="text-2xl text-white-100">Tecnologias e habilidades</h2>
      <div className="w-full overflow-x-hidden py-6">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: isMobile ? 10 : 40,
            repeat: Infinity
          }}
          style={{ willChange: 'transform' }}
        >
          {scrollingTechs.map((tech, index) => (
            <div
              key={index}
              className={`group relative flex h-28 w-20 md:h-32 md:w-24 flex-col items-center justify-center text-gray-600 grayscale transition-all duration-500 hover:grayscale-0 cursor-pointer ${tech.color}`}
            >
              <span className="text-5xl transition-transform duration-500 group-hover:scale-110 md:text-6xl">
                {tech.icon}
              </span>
              <span className="pointer-events-none absolute -bottom-3 z-10 whitespace-nowrap rounded bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
