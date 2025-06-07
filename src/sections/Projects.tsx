import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
import { ArrowUpRight, CheckCircle } from "lucide-react"
import Image from "next/image"


const portfolioProjects = [
    {
        company: "my personal project",
        year: "2024",
        title: "case cobra - A phone case customizer",
        results: [
            {title: "Boosted sales by 20%"},
            {title: "Expanded customer reach by 35%"},
            {title: "Increased brand awareness by 15%"}
        ],
        link: "https://casecobra-lovat.vercel.app/",
        image: "/casecobra.PNG"
    },
    {
        company: "Acefood",
        year: "2024",
        title: "Acefood Uk - An e-commerce website for foodstuffs",
        results: [
            {title: "Enhanced user experience by 40%"},
            {title: "Improved site speed by 50%"},
            {title: "Increased mobile traffic by 35%"}
        ],
        link: "https://www.acefoods.co.uk",
        image: "/acefood.PNG"
    },
    {
        company: "my personal project",
        year: "2024",
        title: "CarePulse - A web app for booking doctor's appointment",
        results: [
            {title: "Enhanced user experience by 40%"},
            {title: "Improved site speed by 50%"},
            {title: "Increased mobile traffic by 35%"}
        ],
        link: "https://careplus-blush.vercel.app/",
        image: "/carePulse-reg.PNG"
    },
    {
        company: "MY tech team",
        year: "2024",
        title: "Chalonic - A constrution company website",
        results: [
            {title: "Enhanced user experience by 40%"},
            {title: "Improved site speed by 50%"},
            {title: "Increased mobile traffic by 35%"}
        ],
        link: "https://chalonic.vercel.app/about",
        image: "/chalonics.PNG"
    },
]

export const ProjectsSection = () => {
    return(
        <section className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader eyebrow="Real-world Results" 
                title="Featured Projects" 
                description="See how i transformed concepts into digital experiences" 
                />
                <div className="flex flex-col mt-10 gap-20 md:mt-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                        style={{
                            top: `calc(64px + ${projectIndex * 40}px`
                        }}>
                             
                             <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 
                            inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                <span>{project.company} </span>
                                <span>&bull;</span>
                              <span>{project.year} </span>
                              </div>
                                
                                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                <ul className="flex flex-col gap-4 mt-4 md:mt-5"> {project.results.map(result => (
                                    <li className="flex gap-2 text-sm md:text-base text-white-50">
                                        <CheckCircle className="size-5 md:size-6" />
                                        <span>{result.title}</span>
                                        </li>
                                ))}
                                </ul>
                                <a href={project.link}>
                                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                        <span>Visit Live Site</span>
                                        <ArrowUpRight className="size-4" />
                                        </button>
                                </a>
                                </div>
                                <div className="relative">
                                <Image 
                                src={project.image} 
                                alt={project.title} 
                                width={800} height={800} 
                                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                                </div>
                                </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}