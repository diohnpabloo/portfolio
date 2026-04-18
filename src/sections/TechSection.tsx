import { motion, type Variants } from "motion/react"
import { TagTitle } from '../components/TagTitle'
import * as Si from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa6'

export function TechSection() {
  function getIcon(iconName: keyof typeof Si) {
    const Icon = Si[iconName]
    return Icon ? <Icon /> : null
  }

  const categories = [
    {
      title: 'Frontend',
      techs: [
        { name: 'HTML5', icon: getIcon('SiHtml5'), color: 'hover:text-[#E34F26]' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'hover:text-[#1572B6]' },
        { name: 'JavaScript', icon: getIcon('SiJavascript'), color: 'hover:text-[#F7DF1E]' },
        { name: 'TypeScript', icon: getIcon('SiTypescript'), color: 'hover:text-[#3178C6]' },
        { name: 'React', icon: getIcon('SiReact'), color: 'hover:text-[#61DAFB]' },
        { name: 'Next.js', icon: getIcon('SiNextdotjs'), color: 'hover:text-white' },
        { name: 'Tailwind', icon: getIcon('SiTailwindcss'), color: 'hover:text-[#06B6D4]' },
        { name: 'Vite', icon: getIcon('SiVite'), color: 'hover:text-[#646cff]' },
      ]
    },
    {
      title: 'Backend',
      techs: [
        { name: 'Node.js', icon: getIcon('SiNodedotjs'), color: 'hover:text-[#339933]' },
        { name: 'PostgreSQL', icon: getIcon('SiPostgresql'), color: 'hover:text-[#4169E1]' },
        { name: 'n8n', icon: getIcon('SiN8N'), color: 'hover:text-[#FF6D5A]' },
      ]
    },
    {
      title: 'Ferramentas e DevOps',
      techs: [
        { name: 'Docker', icon: getIcon('SiDocker'), color: 'hover:text-[#2496ED]' },
        { name: 'Linux', icon: getIcon('SiLinux'), color: 'hover:text-[#FCC624]' },
        { name: 'Figma', icon: getIcon('SiFigma'), color: 'hover:text-[#FFC0CB]' },
        { name: 'Git', icon: getIcon('SiGit'), color: 'hover:text-[#F05032]' },
        { name: 'GitHub', icon: getIcon('SiGithub'), color: 'hover:text-white' },
      ]
    },
  ]

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section id="tecnologias" className="flex flex-col gap-4 md:items-center py-24 px-8">
      <TagTitle>Skills</TagTitle>
      <h2 className="text-2xl text-white-100">Tecnologias e habilidades</h2>
      <motion.div
        className="w-full max-w-7xl space-y-8 py-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((category) => (
          <motion.div key={category.title} variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-300">
                {category.title}
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-zinc-700/90 to-transparent" />
            </div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4"
              variants={sectionVariants}
            >
              {category.techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  className={`group relative flex h-28 w-full flex-col items-center justify-center text-gray-500 grayscale transition-all duration-500 hover:grayscale-0 cursor-pointer ${tech.color}`}
                >
                  <span className="text-5xl transition-transform duration-500 group-hover:scale-110 md:text-6xl">
                    {tech.icon}
                  </span>
                  <span className="pointer-events-none absolute -bottom-4 z-10 whitespace-nowrap rounded bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-300 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
