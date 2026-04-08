import { useState } from 'react'
import { FiCopy, FiCheck, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { TagTitle } from '../components/TagTitle'

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = 'diohn_pablo@hotmail.com'
  const actionButtonClass =
    'group flex w-full items-center gap-4 rounded-xl border border-transparent bg-secondary/50 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/10'
  const iconBaseClass =
    'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300'

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (error) {
      console.error('Erro ao copiar e-mail: ', error)
    }
  }

  function handleOpenWhatsApp() {
    window.open('https://wa.me/5500000000000', '_blank')
  }

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section
      id="contato"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex w-full max-w-xl flex-col items-center gap-8"
      >
        <TagTitle>📇 Contatos</TagTitle>

        <h2 className="text-3xl font-bold text-gray-100 italic">
          Entre em <span className="text-primary">contato</span>
        </h2>

        <div className="w-full rounded-3xl backdrop-blur-sm border border-white/8 bg-gray-900/40 p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4">
            <button onClick={handleOpenWhatsApp} className={actionButtonClass}>
              <div className={`${iconBaseClass} bg-primary/10 group-hover:scale-110`}>
                <FaWhatsapp className="w-6 h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-sm text-gray-400 font-semibold">WhatsApp</p>
                <p className="text-white font-medium">Vamos conversar</p>
              </div>
              <span className="ml-auto text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                →
              </span>
            </button>

            <button onClick={handleCopyEmail} className={actionButtonClass}>
              <div
                className={[
                  iconBaseClass,
                  copied
                    ? 'bg-white/15 text-white'
                    : 'bg-primary/10 text-primary group-hover:scale-110',
                ].join(' ')}
              >
                {copied ? <FiCheck className="h-6 w-6" /> : <FiCopy className="h-6 w-6" />}
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-sm font-semibold text-gray-400">E-mail</p>
                <p className="text-white font-medium">{email}</p>
              </div>
              <span
                className={[
                  'ml-auto hidden rounded-full px-3 py-1 text-xs font-medium md:inline-flex',
                  copied
                    ? 'bg-white/15 text-white '
                    : 'text-muted-foreground group-hover:text-primary',
                ].join(' ')}
              >
                {copied ? 'Copiado!' : 'Copiar'}
              </span>
            </button>
          </div>
        </div>

        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-sm text-white cursor-pointer transition-colors duration-300 hover:text-primary"
        >
          <FiArrowUp className="h-4 w-4" />
          Voltar ao topo
        </motion.button>
      </motion.div>
    </section>
  )
}
