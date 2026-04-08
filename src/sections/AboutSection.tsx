import { TagTitle } from '../components/TagTitle'
import foto2 from '../assets/foto2.jpg'
export function AboutSection() {
  return (
    <section className="w-full py-16 px-8" id="sobre">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={foto2}
              alt="Foto de perfil"
              className="relative rounded-lg w-104 h-104 object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6 text-zinc-300">
          <div className="space-y-2">
            <TagTitle>Trajetória e visão</TagTitle>
            <h2 className="text-3xl font-bold text-white tracking-tight italic">Sobre mim</h2>
          </div>

          <p className="text-lg leading-relaxed">
            Com mais de <span className="text-white font-medium">três anos de experiência</span> no
            desenvolvimento de ecossistemas digitais, minha missão é traduzir requisitos complexos
            em soluções de software escaláveis e de alto impacto. Acredito que o código é uma
            ferramenta para viabilizar modelos de negócio e potencializar a experiência do usuário.
          </p>

          <p className="text-lg leading-relaxed">
            Como desenvolvedor <span className="font-bold">Full Stack</span>, domino o ecossistema{' '}
            <span className="text-blue-400">React</span>,{' '}
            <span className="text-blue-400">TypeScript</span> e{' '}
            <span className="text-blue-400">Tailwind CSS</span> para interfaces performáticas, além
            de arquitetar back-ends robustos com <span className="text-green-400">Node.js</span> e
            bancos de dados relacionais como <span className="text-green-400">PostgreSQL</span>.
          </p>

          <p className="text-lg leading-relaxed">
            Mantenho-me em constante evolução técnica, acompanhando as mudanças aceleradas do
            mercado para garantir que as tecnologias aplicadas sejam sempre as mais eficientes para
            cada desafio. Meu foco está em entregar código limpo, testável e orientado a resultados.
          </p>

          <div className="pt-6">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors border-b-2 border-primary pb-1"
            >
              Vamos construir algo relevante juntos?
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
