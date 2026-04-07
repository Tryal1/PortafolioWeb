import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contacto = () => {
    return (
        <section id="contacto" className="py-24 mx-auto px-8 relative overflow-hidden max-w-7xl">
            {/* Gradiente de fondo decorativo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10"></div>

            <div className="md:text-center mb-16">
                <h2 className="font-headline text-5xl font-black mb-4 text-on-surface">Podes contactarme por.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        label: "Perfil",
                        name: "LinkedIn",
                        icon: faLinkedin,
                        href: "https://www.linkedin.com/in/thomas-carre%C3%B1o/", 
                    },
                    {
                        label: "Mensaje",
                        name: "WhatsApp",
                        icon: faWhatsapp,
                        href: "https://wa.me/1159111677", 
                    },
                    {
                        label: "Correo",
                        name: "Email",
                        icon: faEnvelope,
                        href: "mailto:thomascarreno02@gmail.com",
                    },
                    {
                        label: "Trabajos",
                        name: "GitHub",
                        icon: faGithub,
                        href: "https://github.com/Tryal1", 
                    }
                ].map((platform) => (
                    <a
                        key={platform.name}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-6 rounded-xxl border border-outline-variant/10 flex flex-col items-center gap-4 transition-all duration-300 hover:border-primary/50 group"
                    >
                        <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20 group-hover:bg-primary/10 transition-colors duration-300">
                            <FontAwesomeIcon className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110" icon={platform.icon}/>
                        </div>
                        <div className="text-center">
                            <span className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                                {platform.label}
                            </span>
                            <span className="font-bold text-lg text-on-surface">
                                {platform.name}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Contacto