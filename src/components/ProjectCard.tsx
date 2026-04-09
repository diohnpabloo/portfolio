import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { FiCode, FiExternalLink } from 'react-icons/fi'
import * as Si from 'react-icons/si'
import { ImageModal } from './ImageModal'

type ProjectProps = {
  title: string
  description: string
  stack: string[]
  image: string
  githubUrl?: string
  deployUrl?: string
}

type ActionLinkProps = {
  href?: string
  icon: IconType
  label: string
  variant: 'github' | 'deploy'
}

const CARD_WRAPPER =
  'relative h-full rounded-3xl border border-white/10 bg-gray-900/40 p-6 backdrop-blur-sm transition-all duration-500'

const HOVER_GLOW =
  'absolute -inset-1 rounded-md bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-35'

const CARD_INTERACTION =
  'group hover:-translate-y-1.5 hover:border-white/50 hover:shadow-[0_12px_36px_-16px_rgba(59,130,246,0.65)]'

const ACTION_STYLES: Record<ActionLinkProps['variant'], string> = {
  github:
    'border-zinc-700/80 bg-zinc-900/70 text-zinc-200 hover:border-zinc-300 hover:bg-zinc-800 hover:text-white',
  deploy:
    'border-cyan-500/30 bg-cyan-500/10 text-cyan-200 hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-50',
}

const TECHNOLOGY_ICON_NAME_MAP: Record<string, keyof typeof Si> = {
  react: 'SiReact',
  typescript: 'SiTypescript',
  javascript: 'SiJavascript',
  tailwindcss: 'SiTailwindcss',
  tailwind: 'SiTailwindcss',
  nodejs: 'SiNodedotjs',
  postgresql: 'SiPostgresql',
  nextjs: 'SiNextdotjs',
  vite: 'SiVite',
  docker: 'SiDocker',
  html5: 'SiHtml5',
  css3: 'SiCss3',
  github: 'SiGithub',
  sqlite: 'SiSqlite',
}

function normalizeTechName(tech: string) {
  return tech.toLowerCase().replace(/\s|\.|-/g, '')
}

function getTechnologyIcon(tech: string) {
  const iconName = TECHNOLOGY_ICON_NAME_MAP[normalizeTechName(tech)]

  if (iconName) {
    const Icon = Si[iconName]

    if (Icon) {
      return <Icon className="text-3xl" aria-hidden="true" />
    }
  }

  return <FiCode className="text-3xl" aria-hidden="true" />
}

function ActionLink({ href, icon: Icon, label, variant }: ActionLinkProps) {
  const baseClassName = `inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-300 ${ACTION_STYLES[variant]}`

  if (!href) {
    return (
      <span className={`${baseClassName} cursor-not-allowed opacity-50`} aria-disabled="true">
        <Icon className="text-base" aria-hidden="true" />
        {label}
      </span>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={baseClassName}>
      <Icon className="text-base" aria-hidden="true" />
      {label}
    </a>
  )
}

export function ProjectCard({
  title,
  description,
  image,
  stack,
  githubUrl,
  deployUrl,
}: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <article className={`${CARD_WRAPPER} ${CARD_INTERACTION} flex flex-col gap-5 overflow-hidden`}>
        <div className={HOVER_GLOW} aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col gap-5">
          <header className="space-y-2 min-h-[132px]">
            <h2 className="text-xl font-semibold tracking-tight text-gray-100 break-words line-clamp-2 min-h-[56px]">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 line-clamp-3 min-h-[66px] font-system">{description}</p>
          </header>

          <ul className="flex flex-wrap content-start gap-5 overflow-hidden h-[98px] max-h-[98px]">
            {stack.map((tech) => {
              return (
                <li
                  key={`${title}-${tech}`}
                  className="inline-flex items-center text-primary"
                >
                  {getTechnologyIcon(tech)}
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group/image relative mt-1 h-44 w-full shrink-0 overflow-hidden rounded-2xl border border-zinc-800"
            aria-label={`Expandir imagem do projeto ${title}`}
          >
            <img
              src={image}
              alt={`Pre-visualizacao do projeto ${title}`}
              className="h-full w-full object-cover transition-all duration-500 group-hover/image:scale-105 group-hover/image:brightness-110 cursor-pointer"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-80 transition-opacity duration-500 group-hover/image:opacity-50" />
          </button>

          <div className="mt-auto grid min-h-10 grid-cols-1 gap-2 sm:grid-cols-2">
            <ActionLink href={githubUrl} icon={FaGithub} label="GitHub" variant="github" />
            <ActionLink href={deployUrl} icon={FiExternalLink} label="Deploy" variant="deploy" />
          </div>
        </div>
      </article>

      {isOpen && (
        <ImageModal
          imageUrl={image}
          onClose={() => setIsOpen(false)}
          title={title}
          description={description}
        />
      )}
    </>
  )
}
