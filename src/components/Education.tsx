import React from 'react'
import itbaCertificado from '../assets/itbaCerificado.jpg'
import nextjsCurso from '../assets/nextJsCurso.png'
import reactHooksCertificado from '../assets/reactHooksCertificado.png'
import reactProCertificado from '../assets/reactPro.png'
import socketioCertificado from '../assets/socketioCertificado.png'
import nodeCertificado from '../assets/node.png'




const Education = () => {


    const educationInfo = [
        { title: "Certificación Avanzada en Full Stack Developer", desc: "Cursada intensiva enfocada en desarrollo full stack, realizada con beca, donde adquirí y practiqué habilidades en tecnologías tanto de front-end como de back-end.", date: "2023", img: itbaCertificado, href: 'https://certtun.vottun.com/api/certificates/share/c7c3555a-4012-4148-afb1-6f1353d32714/' },
        { title: "Next.js: El framework de React para producción", desc: "Cursada enfocada en Next.js (v13+), profundizando en renderizado híbrido, APIs, autenticación, bases de datos y despliegues en producción. Desarrollé múltiples proyectos prácticos, incluyendo una tienda e-commerce completa con pagos, dashboard y optimizaciones de rendimiento. Trabajé principalmente con TypeScript, integrando herramientas modernas del ecosistema React.", date: "2024", img: nextjsCurso, href: 'http://ude.my/UC-75da0a98-e9e7-42ba-a150-7b947c149174' },
        { title: "React - Guía definitiva: hooks router redux next +Proyectos", desc: "Cursada enfocada en React moderno y su ecosistema, profundizando en hooks, componentes funcionales, contexto, routing y manejo de estado con Redux. Desarrollé múltiples proyectos prácticos aplicando buenas prácticas, optimización de rendimiento y testing. También adquirí experiencia en despliegue de aplicaciones y mantenimiento de proyectos a gran escala.", date: "2022", img: reactHooksCertificado, href: 'https://www.udemy.com/certificate/UC-6e7720e3-6499-416a-85e9-a288700be132/' },
        { title: "React PRO: Lleva tus bases al siguiente nivel", desc: "Cursada avanzada de React enfocada en TypeScript, patrones de diseño de componentes y creación de librerías reutilizables. Trabajé con herramientas como Storybook, Formik y despliegues a NPM, automatizando procesos con GitHub Actions. También desarrollé PWAs con soporte offline, optimizando arquitectura y escalabilidad de aplicaciones.", date: "2022", img: reactProCertificado, href: 'https://www.udemy.com/certificate/UC-14ae723e-b16b-4349-b7d3-a53b32c64e5a/' },
        { title: "React: Aplicaciones en tiempo real con Socket-io", desc: "Cursada enfocada en aplicaciones en tiempo real con React y Socket.io, implementando comunicación instantánea entre clientes y servidor. Desarrollé proyectos como chats, sistemas de tickets y visualizaciones en tiempo real, utilizando WebSockets, JWT y MongoDB. Profundicé en hooks, eventos, autenticación y sincronización de datos en aplicaciones interactivas.", date: "2022", img: socketioCertificado, href: 'https://www.udemy.com/certificate/UC-cc5633cc-b31d-4c51-b24a-ee4900d97e6b/' },
        { title: "Node: De cero a experto", desc: "Cursada enfocada en Node.js, desarrollando backends con APIs REST, manejo de bases de datos y autenticación con JWT. Implementé aplicaciones prácticas utilizando Express, MongoDB y sockets, integrando servicios y despliegues. Adquirí experiencia en construcción de aplicaciones escalables y orientadas a producción.", date: "2022", img: nodeCertificado, href: 'https://www.udemy.com/certificate/UC-d43fea52-3c26-4f6b-8f36-717d43a3d17c/' },

    ]


    return (
        <section id="educacion" className="py-24 max-w-7xl mx-auto px-8 overflow-hidden">
            <div className="mb-16">
                <h3 className="font-headline text-4xl font-bold">Educación</h3>
            </div>

            {/* Contenedor del Carrusel */}
            <div className="flex overflow-hidden">
                <div className="flex flex-row gap-8 animate-infinite-scroll hover:[animation-play-state:paused] w-max">
                    {[...educationInfo, ...educationInfo].map((edu, i) => (
                        <a key={i} target='_blank' href={edu.href} className="min-w-[300px] md:min-w-[384px] min-h-[675px] cursor-pointer flex flex-col group bg-surface-container-high rounded-xxl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-2">
                            <div className="min-h-64 overflow-hidden relative">
                                <img alt={edu.title} className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700 opacity-40" src={edu.img} />
                            </div>
                            <div className="p-8 h-full flex flex-col justify-between">
                                <div>
                                    <h4 className="font-bold text-xl mb-2 text-on-surface">{edu.title}</h4>
                                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{edu.desc}</p>
                                </div>
                                <span className="font-label text-xs text-secondary font-bold tracking-widest uppercase border-t border-white/5 pt-4 block ">{edu.date}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education