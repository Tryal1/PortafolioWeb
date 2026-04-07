import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const Experiens = () => {
    return (
        <section id="experiencia" className="py-32 bg-surface-container-low">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h3 className="text-5xl font-black font-headline text-on-surface">Trayectoria profesional</h3>
                    </div>

                    <div className="glass-card rounded-[2.5rem] p-8 md:p-16 border border-white/5 relative overflow-hidden group">

                        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                            {/* Role Details */}
                            <div className="space-y-8">
                                <div>
                                    <span className="font-label text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                                        Junio 2022 — Octubre 2025
                                    </span>
                                    <h4 className="text-4xl font-black mb-2 text-on-surface">Desarrollador full stack</h4>
                                    <p className="text-2xl text-secondary font-headline font-bold">Newtech</p>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-on-surface-variant leading-relaxed text-lg">
                                        Desarrollo de aplicaciones y extensiones para clientes corporativos como
                                        Andreani, YPF, Ternium y Claro, construyendo soluciones dentro de Microsoft Teams
                                        y entornos web modernos.
                                    </p>

                                    <p className="text-on-surface-variant leading-relaxed text-lg">
                                        Trabajé principalmente con React, Tailwind CSS y TypeScript, desarrollando
                                        interfaces dinámicas, componentes reutilizables y experiencias enfocadas en
                                        usabilidad y rendimiento.
                                    </p>

                                    <p className="text-on-surface-variant leading-relaxed text-lg">
                                        Participé en el desarrollo end-to-end de funcionalidades, integrando comunicación
                                        en tiempo real, automatizaciones y lógica de negocio compleja, colaborando
                                        estrechamente con equipos de diseño y backend.
                                    </p>

                                    <div className="flex flex-wrap gap-3 pt-4">
                                        {['REACT.JS', 'TYPESCRIPT', 'NEXT.JS', 'TAILWIND', 'VITE', 'STRAPI', 'NODE.JS', 'GIT HUB', 'GIT'].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-surface-container-highest rounded-lg font-label text-xs text-primary border border-primary/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Achievements Area */}
                            <div className="space-y-8 bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                                <ul className="space-y-6">
                                    {[
                                        { text: "Desarrollo de aplicaciones y extensiones dentro de Microsoft Teams para entornos corporativos." },
                                        { text: "Integración de chats, llamadas y notificaciones en tiempo real utilizando Teams SDK y Socket.IO." },
                                        { text: "Construcción de interfaces y componentes reutilizables con React y Tailwind CSS." },
                                        { text: "Desarrollo de bots y automatizaciones para mejorar la interacción y productividad de usuarios." },
                                        { text: "Manejo de flujos complejos como estados de usuario, control de licencias y tracking de acciones." },
                                        { text: "Colaboración con backend utilizando Node.js, Strapi y Next.js para funcionalidades end-to-end." },
                                        { text: "Trabajo conjunto con diseño UI/UX para implementar experiencias fieles y optimizadas." },
                                        { text: "Enfoque en código limpio, modular y mantenible para escalabilidad del producto." }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 group/item">
                                            <FontAwesomeIcon className="material-symbols-outlined text-primary mt-1 group-hover/item:scale-110 transition-transform" icon={faCircleCheck} />
                                            <p className={`text-on-surface leading-snug`}>
                                                {item.text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiens