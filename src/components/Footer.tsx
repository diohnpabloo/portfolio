import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6"

import { handleOpenWhatsApp } from "../utils/whatsapp";

export function Footer() {
    return (
        <footer className="bg-gray-950/95 text-white p-4 text-center border-none border-t-0">
            <div className="flex items-center justify-center gap-4 mb-2">
                <a href="https://www.linkedin.com/in/diohn-pablo-6541a3275/" target="_blank"><FaLinkedin className="text-gray-500 text-4xl hover:scale-125 hover:text-primary ease-linear animate-bounce" /></a>
                <a href="https://github.com/diohnpabloo" target="_blank"><FaGithub className="text-gray-500 text-4xl hover:scale-125 hover:text-primary ease-linear animate-bounce" /></a>
                <button onClick={handleOpenWhatsApp}><FaWhatsapp className="text-gray-500 text-4xl hover:scale-125 hover:text-primary ease-linear animate-bounce" /></button>
            </div>
            <p className="text-[10px] md:text-sm text-primary uppercase font-semibold">
                &copy; {new Date().getFullYear()} <span >Maranguape - CE. Diohn Pablo</span>
            </p>
        </footer>
    )
}