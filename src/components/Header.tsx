import { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa6'
import { FaBars, FaTimes } from 'react-icons/fa'

export function Header() {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')

  const menuItems = [
    {
      id: 'inicio',
      label: 'Início',
      href: '#inicio',
    },
    {
      id: 'sobre',
      label: 'Sobre',
      href: '#sobre',
    },
     {
      id: 'servicos',
      label: 'Serviços',
      href: '#servicos',
    },
    {
      id: 'projetos',
      label: 'Projetos',
      href: '#projetos',
    },
    {
      id: 'tecnologias',
      label: 'Tecnologias',
      href: '#tecnologias',
    },
    {
      id: 'contato',
      label: 'Contato',
      href: '#contato',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section) {
          const offset = section.offsetTop - 100
          if (window.scrollY >= offset && window.scrollY < offset + section.offsetHeight) {
            setActive(item.id)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 bg-gray-900/40 py-4 px-7 rounded-2xl flex items-center ${scrolled ? 'bg-gray-950/90' : 'bg-gray-950/80'}`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex-1 lg:hidden">
          <button className="text-white text-2xl p-2" onClick={() => setMenu(!menu)}>
            {menu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div>
          <FaCode className="text-2xl text-primary" />
        </div>
        <nav className="hidden lg:flex gap-5 flex-1 justify-end">
          {menuItems.map((item) => (
            <a
              href={item.href}
              key={item.id}
              className={`font-bold uppercase text-[10px] relative tracking-widest transition-all duration-300
                        ${active === item.id ? 'text-primary after:scale-x-100' : 'text-gray-400 hover:text-primary after:scale-x-0 hover:after:scale-x-100'}
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary after:origin-left after:transition-transform after:duration-300`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu fora do container principal, logo abaixo do header */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-[72px] z-50 bg-gray-950 transition-all duration-500 overflow-hidden border-b border-white/5 ${menu ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}
      >
        <div className="flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-bold uppercase text-xs tracking-widest ${active === item.id ? 'text-primary' : 'text-gray-400'}`}
              onClick={() => setMenu(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
