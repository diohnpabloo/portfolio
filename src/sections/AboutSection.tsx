import { CardTitle } from "../components/CardTitle"
import foto from "../assets/foto_redonda.png"

export function AbountSection() {
    return (
        <section id="sobre" className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:justify-center">
            <div className="flex justify-center">
                <img src={foto} alt="Minha imagem" className="md:w-[460px] md:h-[498px]" />
            </div>

            <div className="flex flex-col gap-4">
                <CardTitle>🧐 Sobre mim</CardTitle>
                <p className="text-gray-500 text-left w-full max-w-prose leading-7">👨‍💻 Prazer! Há pouco mais de 3 anos desenvolvendo aplicações e soluções que antes estavam somente no papel, soluções que podem levar o seu negócio para outro nível.</p>
                <p className="text-gray-500 text-left w-full max-w-prose leading-7">🎓 Graduado em Análise e Desenvolvimento de Sistemas, atualmente trabalho com desenvolvimento full stack utilizando React, Typescript e TailwindCSS para aplicações front end e Node, Typescript, Postgres para aplicações back end.</p>
                <p className="text-gray-500 text-left w-full max-w-prose leading-7">🚀 Sempre buscando aprender e me atualizar com as novas tendências do mercado. Acredito que a tecnologia pode transformar vidas e negócios, e estou aqui para ajudar você a alcançar seus objetivos através dela.</p>
                <p className="text-gray-500 text-left w-full max-w-prose leading-7">🤝 Estou sempre aberto a novos desafios e oportunidades, então se você está procurando um desenvolvedor full stack para o seu projeto, não hesite em entrar em contato comigo!</p>
            </div>
        </section>
    )
}