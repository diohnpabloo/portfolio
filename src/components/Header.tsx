import { FaCode } from "react-icons/fa6"

export function Header() {
    return (
        <header id="inicio" className="bg-gray-900/40 py-4 px-7 rounded-2xl flex items-center justify-between">
            <div>
                <FaCode className="text-2xl text-purply-100"/>
            </div>
            <nav>
                <ul className="flex gap-8">
                    <li><a href="#inicio" className="text-gray-500 hover:text-purply-100 transition ease-linear">Início</a></li>
                    <li><a href="#sobre" className="text-gray-500 hover:text-purply-100 transition ease-linear">Sobre mim</a></li>
                    <li><a href="#projetos" className="text-gray-500 hover:text-purply-100 transition ease-linear">Projetos</a></li>
                    <li><a href="#tecnologias" className="text-gray-500 hover:text-purply-100 transition ease-linear">Tecnologias</a></li>
                    <li><a href="#contato" className="text-gray-500 hover:text-purply-100 transition ease-linear">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}