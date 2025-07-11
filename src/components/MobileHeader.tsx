import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"

import { handleOpenWhatsApp } from "../utils/whatsapp"

type MobileHeaderProps = {
    className?: string
}

export function MobileHeader({ className }: MobileHeaderProps) {
    return (
        <header className={`${className} flex items-center justify-center gap-4 p-4`}>
            <a href="https://www.linkedin.com/in/diohn-pablo-6541a3275/" target="_blank"><FaLinkedin className="text-gray-500 text-4xl hover:scale-125 hover:text-purply-100 ease-linear animate-bounce" /></a>
            <a href="https://github.com/diohnpabloo" target="_blank"><FaGithub className="text-gray-500 text-4xl hover:scale-125 hover:text-purply-100 ease-linear animate-bounce" /></a>
            <button onClick={handleOpenWhatsApp}><FaWhatsapp className="text-gray-500 text-4xl hover:scale-125 hover:text-purply-100 ease-linear animate-bounce" /></button>
        </header>
    )
}