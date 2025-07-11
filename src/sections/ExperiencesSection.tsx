import { FaCode } from "react-icons/fa6"
import { Card } from "../components/Card"
import { GoStack } from "react-icons/go"
import { SiFreelancer } from "react-icons/si"


export function ExperiencesSection() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 px-10 md:flex-row md:border-y-2 md:border-purply-100/10 md:py-20 -mx-10">
            <Card className="md:order-1" icon={<FaCode />} title="Programador" description="3 anos como" />
            <Card className="md:order-3" icon={<GoStack />} title="Full-Stack" description="2 anos como" />
            <Card className="md:order-2 bg-gray-900/40 border-0" icon={<SiFreelancer />} title="Freelancer" description="2 anos como" />
        </section>
    )
}