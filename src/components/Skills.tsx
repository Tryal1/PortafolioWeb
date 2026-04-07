import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faGithub, faHtml5, faJs, faNode, faReact, faTailwindCss, faTypescript } from '@fortawesome/free-brands-svg-icons';
import { faCube, faN } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <section id="habilidades" className="py-24 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-8">
                <div className="mb-16 text-right">
                    <h3 className="font-headline text-4xl font-bold">habilidades</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: faJs, title: 'JavaScript' },
                        { icon: faTypescript, title: 'TypeScript', color: 'text-secondary' },
                        { icon: faReact, title: 'React', color: 'text-tertiary-dim' },
                        { icon: faN, title: 'Next.js' },
                        { icon: faHtml5, title: 'Html', color: 'text-secondary' },
                        { icon: faTailwindCss, title: 'Tailwind CSS', color: 'text-tertiary-dim' },
                        { icon: faNode, title: 'Node.js' },
                        { icon: faCube, title: 'Strapi', color: 'text-secondary' },
                        { icon: faGithub, title: 'Git hub', color: 'text-tertiary-dim' },
                        { icon: faGit, title: 'Node.js' },

                    ].map((skill, i) => (
                        <div key={i} className="skill-card-glow p-8 bg-surface-container-high rounded-xxl border border-outline-variant/10 transition-all duration-300 group">
                            <FontAwesomeIcon
                                className={`material-symbols-outlined ${skill.color || 'text-primary'} text-5xl mb-6 block group-hover:scale-110 transition-transform`}
                                icon={skill.icon} />
                            <h4 className="font-headline text-xl font-bold text-on-surface mb-2">{skill.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills