import avatar from "../assets/avatar.png"

import { CardTitle } from "../components/CardTitle"
import { Button } from "../components/Button"

import { FaWhatsapp, FaDownload } from "react-icons/fa6"
import { useIsMobile } from "../hooks/useIsMobile"
import { MobileHeader } from "../components/MobileHeader"

import { handleOpenWhatsApp } from "../utils/whatsapp"

export function HeaderSection() {
    const isMobile = useIsMobile()

    return (
        <section className="flex flex-col gap-8 w-full md:min-h-[50vh] md:grid md:grid-cols-3 md:items-center md:place-items-center">
            <div className={`${isMobile ? "order-1" : "order-2"} w-full flex justify-center`}>
                <img src={avatar} alt="Foto de Diohn Pablo" className="rounded-full w-52 h-52 md:w-100 md:h-100" />
            </div>

            <div className={`${isMobile ? "order-2" : "order-1"} flex flex-col gap-2`}>
                <CardTitle>👋Saudações!</CardTitle>
                <p className="text-white-100 text-6xl">Diohn</p>
                <p className="text-white-100 text-6xl">Pablo</p>
                <p className="text-gray-500">Full-stack developer</p>
                {!isMobile && <MobileHeader className="items-start justify-start" />}
            </div>

            <div className="flex gap-2 mt-4 order-3">
                <Button iconLeft={<FaDownload className="text-purply-100/50" />}>Baixar CV</Button>
                <Button iconLeft={<FaWhatsapp className="text-purply-100/50" />} onClick={handleOpenWhatsApp}>Vamos conversar</Button>

            </div>
        </section>
    )
}