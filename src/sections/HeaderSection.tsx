import foto from '../assets/foto.jpeg'
import curriculo from '../assets/curriculo.pdf'

import { TagTitle } from '../components/TagTitle'
import { Button } from '../components/Button'

import { FaWhatsapp, FaDownload } from 'react-icons/fa6'
import { useIsMobile } from '../hooks/useIsMobile'
import { MobileHeader } from '../components/MobileHeader'

import { handleOpenWhatsApp } from '../utils/whatsapp'

export function HeaderSection() {
  const isMobile = useIsMobile()

  return (
    <section id="inicio" className="w-full min-h-screen py-24 px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-10">
        <div className="flex flex-col gap-2 md:col-start-1">
          <div>
            <TagTitle>Saudações!</TagTitle>
            <p className="text-white text-3xl font-semibold">Olá, eu nome é</p>
          </div>

          <p className="text-primary text-6xl font-bold">Diohn Pablo</p>
          
          <p className="text-gray-500 font-medium">
            <span className="text-white text-2xl font-semibold">Desenvolvedor Full Stack</span> com prática no desenvolvimento de aplicações web modernas. Atuo
            no desenvolvimento de APIs robustas e interfaces performáticas com domínio em javascript
            e typescript.
          </p>
          {!isMobile && <MobileHeader className="items-start justify-start" />}
        </div>

        <div className="w-full flex justify-center md:col-start-2">
          <img
            src={foto}
            alt="Foto de Diohn Pablo"
            className="rounded-full w-52 h-52 md:w-100 md:h-100"
          />
        </div>

        <div className="flex gap-2 mt-4 md:mt-0 md:col-start-3 md:justify-end">
          <a href={curriculo} download="curriculo.pdf">
            <Button iconLeft={<FaDownload/>}>Baixar CV</Button>
          </a>
          <Button
            iconLeft={<FaWhatsapp />}
            onClick={handleOpenWhatsApp}
          >
            Vamos conversar
          </Button>
        </div>
      </div>
    </section>
  )
}
