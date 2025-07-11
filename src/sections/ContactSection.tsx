import { useState } from "react"

import { FiCopy, FiCheck } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa6"
import { Button } from "../components/Button"
import { CardTitle } from "../components/CardTitle"

import { handleOpenWhatsApp } from "../utils/whatsapp"

export function ContactSection() {
    const [copied, setCopied] = useState(false)
    const email = "diohn_pablo@hotmail.com"

    async function handleCopyEmail() {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error("Erro ao copiar e-mail: ", error)
        }
    }

    function handleScrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <section id="contato" className="flex flex-col gap-8 md:gap-15 md:items-center">
            <CardTitle>📇 Contatos</CardTitle>

            <h2 className="text-2xl text-white-100 md:text-4xl">Entre em contato</h2>
            <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-10 md:items-center">
                <div className="flex">
                    <Button onClick={handleOpenWhatsApp} iconLeft={<FaWhatsapp className="text-purply-100/50" />}>Vamos conversar</Button>
                </div>

                <div>
                    <p className="text-purply-100">E-mail:</p>
                    <div className="flex items-center gap-2">
                        <p className="text-gray-500">{email}</p>
                        <button onClick={handleCopyEmail}>
                            {
                                copied ? (
                                    <FiCheck className="text-green-500" />

                                ) : (
                                    <FiCopy className="text-purply-100" />
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Button onClick={handleScrollToTop} className="mb-14">Voltar ao topo</Button>
            </div>

        </section>
    )
}