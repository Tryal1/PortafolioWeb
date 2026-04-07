
interface IproyectosCard {
    image: string
    goTo: string
    subTitle: string
    title: string
    text: string
    techUse: string[]
    leftImage: boolean
    url: string
}

const proyectosCard = ({ image, goTo, subTitle, title, text, techUse, leftImage, url }: IproyectosCard) => {

    const Wrapper = url ? "a" : "div"


    return (
        <div className={`flex flex-col ${leftImage ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
            <Wrapper
                {...(url && { href: url, target: "_blank" })}
                className={`w-full md:w-3/5 group ${url ? "cursor-pointer" : "cursor-default"} relative rounded-xxl overflow-hidden bg-surface-container-high aspect-video border border-white/5`}
            >
                <img
                    alt="Project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={image}
                />

                {url && (
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <span className="bg-primary text-black font-bold px-6 py-3 rounded-xl shadow-2xl">
                            {goTo}
                        </span>
                    </div>
                )}
            </Wrapper>
            <div className="w-full md:w-2/5">
                <span className="font-label text-primary-dim font-bold tracking-tighter">{subTitle}</span>
                <h4 className="font-headline text-4xl font-bold mt-4 mb-6 text-on-surface">{title}</h4>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">{text}</p>

                <div className="flex flex-wrap gap-4">
                    {techUse.map((tech) => (
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
    )
}

export default proyectosCard