export function handleOpenWhatsApp() {
    const phoneNumber = "5585981380202"
    const message = "Olá, gostaria de conversar sobre oportunidades de trabalho."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
}