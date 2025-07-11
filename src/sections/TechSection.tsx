import { CardTitle } from "../components/CardTitle"

import { FaReact, FaHtml5, FaCss3Alt, FaNode, FaDocker } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import { SiTypescript, SiSqlite, SiPostgresql } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { FaGitAlt, FaGithub } from "react-icons/fa"

export function TechSection() {
    return (
        <section id="tecnologias" className="flex flex-col gap-4 md:items-center">
            <CardTitle>👨‍💻 Skills</CardTitle>
            <h2 className="text-2xl text-white-100">Tecnologias e habilidades</h2>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-6 md:gap-6" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {[
                    {icon: FaReact, name: "React"},
                    {icon: IoLogoJavascript, name: "Javascript"},
                    {icon: SiTypescript, name: "Typescript"},
                    {icon: TbBrandReactNative, name: "React Native"},
                    {icon: FaHtml5, name: "HTML"},
                    {icon: FaCss3Alt, name: "CSS"},
                    {icon: FaNode, name: "Node.js"},
                    {icon: SiSqlite, name: "SQLite"},
                    {icon: SiPostgresql, name: "PostgreSQL"},
                    {icon: FaDocker, name: "Docker"},
                    {icon: FaGitAlt, name: "Git"},
                    {icon: FaGithub, name: "GitHub"},
                ].map((Icon, index) => (
                    <div key={index} className="snap-center shrink-0 flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-900/40">
                        <Icon.icon className="text-6xl text-purply-100" />
                        <p className={`text-gray-500 text-center`}>{Icon.name}</p>
                    </div>
                ))
                }

            </div>
        </section>
    )
}