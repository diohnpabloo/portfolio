import { Footer } from "../components/Footer"
import { MobileHeader } from "../components/MobileHeader"
import { AboutSection } from "../sections/AboutSection"
import { ContactSection } from "../sections/ContactSection"
import { ServiceSection } from "../sections/ServiceSection"
import { HeaderSection } from "../sections/HeaderSection"
import { TechSection } from "../sections/TechSection"
import { WorkSection } from "../sections/WorkSection"
import { Header } from "../components/Header"

import { useIsMobile } from "../hooks/useIsMobile"

export function Home() {

    const insMobile = useIsMobile()
    return (
        <>
            <main className="bg-gray-background flex flex-col pb-24 gap-15">
                {/* {insMobile ? <MobileHeader /> : <Header />} */}
                <Header />

                <HeaderSection />
                <AboutSection />
                <ServiceSection />
                <WorkSection />
                <TechSection />
                <ContactSection />
            </main>
            <Footer />
        </>

    )
}