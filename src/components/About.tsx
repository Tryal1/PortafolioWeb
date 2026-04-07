import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import yoImg from '../assets/yo.jpeg'

const About = () => {
    return (
        <section id="sobre mi" className="min-h-screen pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 z-10">
                <h1 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tight leading-none mb-8 text-glow">
                    Hola soy Thomas
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Fullstack dev.</span>
                </h1>
                <p className="font-body text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                    Soy desarrollador frontend/fullstack con experiencia en aplicaciones dentro de
                    Microsoft Teams y entornos web modernos. He trabajado con React.js, Tailwind
                    CSS, Next.js, Node.js y Strapi, integrando Teams SDK y Socket.IO para
                    desarrollar aplicaciones de mensajería, llamadas, bots y herramientas de
                    gestión interna en tiempo real.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href={`#Projectos`} className="bg-gradient-to-br from-primary to-primary-dim text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 group transition-all hover:shadow-[0_0_30px_rgba(129,236,255,0.3)] cursor-pointer">
                        Projectos
                        <FontAwesomeIcon className="material-symbols-outlined transition-transform group-hover:translate-x-1" icon={faArrowRight} />
                    </a>
                    <a href="/Thomas_Carreno.pdf" download className="bg-surface-container-high/40 backdrop-blur-md text-on-surface font-bold px-8 py-4 rounded-xl border border-outline-variant/30 hover:bg-surface-container-high transition-all cursor-pointer">
                        Descargar CV
                    </a>
                </div>
            </div>
            <div className="md:col-span-5 relative">
                <div className="relative w-full aspect-square rounded-xxl overflow-hidden border border-white/5 shadow-2xl">
                    <img alt="Portrait" className="w-full h-full object-cover" src={yoImg} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-[100px] rounded-full"></div>
            </div>
        </section>
    )
}

export default About