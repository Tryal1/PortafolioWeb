import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Experiens = () => {
    const { t } = useTranslation();

    // 1. Obtenemos el array de strings del JSON
    const achievementsStrings = t('experience.achievements', { returnObjects: true }) as string[];

    // 2. Lo convertimos al formato de objetos que ya usabas { text: "..." }
    const achievements = achievementsStrings.map(str => ({ text: str }));

    return (
        <section id="experiencia" className="py-32 bg-surface-container-low">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h3 className="text-5xl font-black font-headline text-on-surface"> {t('experience.section_title')}</h3>
                    </div>

                    <div className="glass-card rounded-[2.5rem] p-8 md:p-16 border border-white/5 relative overflow-hidden group">

                        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                            {/* Role Details */}
                            <div className="space-y-8">
                                <div>
                                    <span className="font-label text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                                        {t('experience.date')}
                                    </span>
                                    <h4 className="text-4xl font-black mb-2 text-on-surface">{t('experience.role')}</h4>
                                    <p className="text-2xl text-secondary font-headline font-bold">{t('experience.company')}</p>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-on-surface-variant leading-relaxed text-lg">
                                        {t('experience.desc_1')}
                                    </p>

                                    <p className="text-on-surface-variant leading-relaxed text-lg">
                                        {t('experience.desc_2')}
                                    </p>

                                    <p className="text-on-surface-variant leading-relaxed text-lg">
                                        {t('experience.desc_3')}
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
                                    {achievements.map((item, idx) => (
                                        <li key={idx} className="flex gap-4 group/item">
                                            <FontAwesomeIcon
                                                className="material-symbols-outlined text-primary mt-1 group-hover/item:scale-110 transition-transform"
                                                icon={faCircleCheck}
                                            />
                                            <p className="text-on-surface leading-snug">
                                                {item.text} {/* Aquí sigue funcionando igual */}
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