import { useState } from "react"
import { CardTitle } from "../components/CardTitle"
import { ProjectCard } from "../components/ProjectCard"

import portifolio from "../assets/my-portifolio.png"
import trucks from "../assets/trucks-front.png"

export function WorkSection() {
    const [showAll, setShowAll] = useState(false)

    const projects = [
        {
            title: "Controle de frota",
            description: "Projeto para controle de frota de caminhões, é possível cadastrar e listar caminhões, cadastrar e listar viagens específicas para cada caminhão com local de destino e quilometragem final.",
            stack: ["React", "TypeScript", "Tailwind CSS"],
            image: trucks
        },
         {
            title: "Meu portifólio",
            description: "Projeto criado para mostrar meu trabalho ao longo da minha carreira.",
            stack: ["React", "TypeScript", "Tailwind CSS"],
            image: portifolio,
        }
    ]
    const visibleProjects = showAll ? projects : projects.slice(0, 8)

    return (
        <section id="projetos" className="flex flex-col gap-4">
            <CardTitle>🔗 Portifólio</CardTitle>

            <h2 className="text-2xl text-white-100">Trabalhos e projetos</h2>
            <div className="flex md:flex-wrap overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide md:snap-none md:grid md:grid-cols-4 md:overflow-x-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {visibleProjects.map((project, index) => (
                    <div key={index} className="snap-center shrink-0 w-[280px] md:flex-1 md:w-auto">
                        <ProjectCard {...project}/>
                    </div>
                ))}
            </div>

            {projects.length > 8 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-gray-500 self-center px-4 py-2 mt-4 text-sm font-medium bg-purply-100/20 border border-purply-100 rounded-xl hover:bg-purply-100/30 transition">{showAll ? "Ver menos" : "Ver mais"}</button>
            )}

        </section>
    )
}