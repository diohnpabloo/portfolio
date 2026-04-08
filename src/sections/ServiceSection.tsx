import { FaRocket } from 'react-icons/fa6'
import { Card } from '../components/Card'
import { FiCode, FiUser, FiServer, FiSettings, FiCheckCircle, FiTrendingUp } from 'react-icons/fi'
import { TagTitle } from '../components/TagTitle'

const experiences = [
  {
    title: 'Desenvolvimento web',
    description:
      'Crio aplicações modernas, performáticas e escaláveis, focadas em entregar valor real ao usuário e ao negócio',
    icon: <FiCode className="text-primary" />,
    items: ['React', 'Typescript', 'Arquitetura escalável'],
  },
  {
    title: 'Experiência do usuário',
    description:
      'Interfaces intuitivas, rápidas e responsivas, pensadas para engajar e converter em qualquer dispositivo.',
    icon: <FiUser className="text-primary" />,
    items: ['UI/UX', 'Mobile first', 'Design responsivo'],
  },
  {
    title: 'Backend & APIs',
    description:
      'Construção de APIs seguras e eficientes, com integração a bancos de dados e serviços externos.',
    icon: <FiServer className="text-primary" />,
    items: ['Node.js', 'Fastify | Express', 'Postgres | Sqlite'],
  },
  {
    title: 'Automação de Processos',
    description:
      'Código limpo, organizado e fácil de manter, seguindo boas práticas e padrões de projeto.',
    icon: <FiSettings className="text-primary" />,
    items: ['n8n', 'Integração de serviços', 'Workflows personalizados'],
  },
  {
    title: 'Qualidade de Código',
    description:
      'Código limpo, organizado e fácil de manter, seguindo boas práticas e padrões de projeto.',
    icon: <FiCheckCircle className="text-primary" />,
    items: ['Clean code', 'Refatoração', 'Design patterns'],
  },
  {
    title: 'Performance & SEO',
    description:
      'Otimização de aplicações para carregamento rápido e melhor posicionamento em buscadores.',
    icon: <FiTrendingUp className="text-primary" />,
    items: ['SEO técnico', 'Core Web Vitals', 'Performance web'],
  },
]

export function ServiceSection() {
  return (
    <section id='servicos'>
      <div className="grid grid-cols-1 gap-8 py-24 px-8 max-w-7xl mx-auto w-full">
        <TagTitle>Meus serviços</TagTitle>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {experiences.map((experience, index) => (
            <Card
              key={index}
              title={experience.title}
              description={experience.description}
              icon={experience.icon}
              items={experience.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
