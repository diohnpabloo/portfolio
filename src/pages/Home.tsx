import { Footer } from "../components/Footer"
import { MobileHeader } from "../components/MobileHeader"
import { AbountSection } from "../sections/AboutSection"
import { ContactSection } from "../sections/ContactSection"
import { ExperiencesSection } from "../sections/ExperiencesSection"
import { HeaderSection } from "../sections/HeaderSection"
import { TechSection } from "../sections/TechSection"
import { WorkSection } from "../sections/WorkSection"
import { Header } from "../components/Header"

import { useIsMobile } from "../hooks/useIsMobile"

export function Home() {

    const insMobile = useIsMobile()
    return (
        <>
            <main className="bg-gray-background flex flex-col p-10 pb-24 gap-15">
                {insMobile ? <MobileHeader /> : <Header />}

                <HeaderSection />
                <ExperiencesSection />
                <AbountSection />
                <WorkSection />
                <TechSection />
                <ContactSection />
            </main>
            <Footer />
        </>

    )
}