import ProyectosCard from './proyectosCard'
import newcosImage from '../assets/newcos.png'
import beCommImage from '../assets/beComm.png'
import personalFinderImage from '../assets/ternium.png'
import opttyImage from '../assets/oppty.png'
import itbaImage from '../assets/itba.png'


const Proyectos = () => {
    return (
        <section id="projectos" className="py-24 max-w-7xl mx-auto px-8">
            <div className="mb-20">
                {/* <h2 className="font-label text-sm uppercase tracking-[0.4em] text-primary mb-4">Portfolio</h2> */}
                <h3 className="font-headline text-5xl md:text-6xl font-black mb-8 italic">Proyectos.</h3>
            </div>
            <div className="space-y-32">
                {/* Project 1 */}
                <ProyectosCard
                    image={newcosImage}
                    leftImage={true}
                    goTo={'Ir a la tienda'}
                    subTitle={'Front end'}
                    title={'Newcos'}
                    techUse={['REACT.JS', 'TYPESCRIPT', 'TAILWIND', 'TEAMS SDK', 'GIT HUB', 'GIT']}
                    text={'Trabajé principalmente como desarrollador front-end, creando pantallas dentro de la aplicación. A medida que se incorporaban nuevas funcionalidades o vistas, en la mayoría de los casos me encargaba de desarrollar esas extensiones, participando activamente en su implementación de punta a punta.'}
                    url={'https://marketplace.microsoft.com/es-es/product/web-apps/newtech.1001-0001?tab=Overview'}
                />


                {/*  Project 2*/}
                <ProyectosCard
                    image={beCommImage}
                    leftImage={false}
                    goTo={'Ir a la tienda'}
                    subTitle={'Front end'}
                    title={'BeComm'}
                    techUse={['REACT.JS', 'TYPESCRIPT', 'TAILWIND', 'STRAPI', 'TEAMS SDK', 'GIT HUB', 'GIT']}
                    text={'BeComm es una solución desarrollada dentro de Microsoft Teams que permite administrar y gestionar las comunicaciones internas de una organización de forma sencilla y ágil. Durante varios meses colaboré activamente en el desarrollo, aportando principalmente en el front-end y también participando en algunas tareas de back-end, desarrollando nuevas funcionalidades.'}
                    url={'https://marketplace.microsoft.com/es-es/product/office/WA200006299?tab=Overview'}
                />

                {/* Project 3 */}
                <ProyectosCard
                    image={personalFinderImage}
                    leftImage={true}
                    goTo={''}
                    subTitle={'Front end y backend'}
                    title={'Buscador Personal'}
                    techUse={['NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'NODE.JS', 'EXPRESS.JS', 'TEAMS SDK', 'GIT HUB', 'GIT',]}
                    text={'Desarrollé desde cero el front-end de una aplicación para buscar usuarios dentro de una compañía por tenant, mostrando información completa y la estructura organizacional (jefes, colegas, equipo), con opciones de contacto rápido como chat o llamada. También colaboré en parte del back-end.'}
                    url={''}
                />


                {/*  Project 4*/}
                <ProyectosCard
                    image={opttyImage}
                    leftImage={false}
                    goTo={''}
                    subTitle={'Front end'}
                    title={'Oppty'}
                    techUse={['NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'TEAMS SDK', 'GIT HUB', 'GIT']}
                    text='Desarrollé desde cero el front-end de Opty, una aplicación para gestionar propuestas de negocio, donde se registran oportunidades y los usuarios pueden acceder al detalle y avanzar en su gestión cargando toda la información requerida.'
                    url={''}
                />

                {/* Project 5 */}
                <ProyectosCard
                    image={itbaImage}
                    leftImage={true}
                    goTo={'Ir al codigo'}
                    subTitle={'Front end y Backend'}
                    title={'ITBA Proyecto Final'}
                    techUse={['HTML', 'CSS', 'PYTHON', 'DJANGO', 'GIT HUB', 'GIT']}
                    text='Desarrollé una aplicación full stack que simula un banco, incluyendo gestión de clientes, tarjetas y transacciones con persistencia de datos. Fue el proyecto final en equipo para finalizar la cursada en ITBA.'
                    url={'https://github.com/Tryal1/Itbank-fullStack'}
                />
            </div>
        </section>
    )
}

export default Proyectos