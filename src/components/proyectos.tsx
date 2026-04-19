import ProyectosCard from './proyectosCard'
import newcosImage from '../assets/newcos.png'
import beCommImage from '../assets/beComm.png'
import personalFinderImage from '../assets/ternium.png'
import opttyImage from '../assets/oppty.png'
import itbaImage from '../assets/itba.png'
import { useTranslation } from 'react-i18next'


const Proyectos = () => {

    const { t } = useTranslation();

    return (
        <section id="projectos" className="py-24 max-w-7xl mx-auto px-8">
            <div className="mb-20">
                {/* <h2 className="font-label text-sm uppercase tracking-[0.4em] text-primary mb-4">Portfolio</h2> */}
                <h3 className="font-headline text-5xl md:text-6xl font-black mb-8 italic">{t('projects.section_title')}</h3>
            </div>
            <div className="space-y-32">
                {/* Project 1 */}
                <ProyectosCard
                    image={newcosImage}
                    leftImage={true}
                    goTo={t('projects.go_to_store')}
                    subTitle={t('projects.roles.fe')}
                    title={'Newcos'}
                    techUse={['REACT.JS', 'TYPESCRIPT', 'TAILWIND', 'TEAMS SDK', 'GIT HUB', 'GIT']}
                    text={t('projects.items.newcos')}
                    url={'https://marketplace.microsoft.com/es-es/product/web-apps/newtech.1001-0001?tab=Overview'}
                />


                {/*  Project 2*/}
                <ProyectosCard
                    image={beCommImage}
                    leftImage={false}
                    goTo={t('projects.go_to_store')}
                    subTitle={t('projects.roles.fe')}
                    title={'BeComm'}
                    techUse={['REACT.JS', 'TYPESCRIPT', 'TAILWIND', 'STRAPI', 'TEAMS SDK', 'GIT HUB', 'GIT']}
                    text={t('projects.items.becomm')}
                    url={'https://marketplace.microsoft.com/es-es/product/office/WA200006299?tab=Overview'}
                />

                {/* Project 3 */}
                <ProyectosCard
                    image={personalFinderImage}
                    leftImage={true}
                    goTo={''}
                    subTitle={t('projects.roles.fs')}
                    title={'Buscador Personal'}
                    techUse={['NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'NODE.JS', 'EXPRESS.JS', 'TEAMS SDK', 'GIT HUB', 'GIT',]}
                    text={t('projects.items.finder')}
                    url={''}
                />


                {/*  Project 4*/}
                <ProyectosCard
                    image={opttyImage}
                    leftImage={false}
                    goTo={''}
                    subTitle={t('projects.roles.fe')}
                    title={'Oppty'}
                    techUse={['NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'TEAMS SDK', 'GIT HUB', 'GIT']}
                    text={t('projects.items.optty')}
                    url={''}
                />

                {/* Project 5 */}
                <ProyectosCard
                    image={itbaImage}
                    leftImage={true}
                    goTo={t('projects.go_to_code')}
                    subTitle={t('projects.roles.fs')}
                    title={'ITBA Proyecto Final'}
                    techUse={['HTML', 'CSS', 'PYTHON', 'DJANGO', 'GIT HUB', 'GIT']}
                    text={t('projects.items.itba')}
                    url={'https://github.com/Tryal1/Itbank-fullStack'}
                />
            </div>
        </section>
    )
}

export default Proyectos