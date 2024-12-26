import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
import Image from "next/image"
import { Fragment } from "react"

const testimonials = [
    {
        name: "Alex Turner",
        position: "Marketing Manager @ TechStartups",
        text: "Sam was instrumental in Transforming our website into a powerful market tool. His attention to detail and ability to understand our brand is exceptional. we're thrilled with the results!",
        image: "/user-1.png",
    },
    {
        name: "Olivia Green",
        position: "Head of design  @ GreenLeaf",
        text: "Working with Sam was a pleasure, His expertise in frontend development brought our designs to life in way we never expected",
        image: "/user-2.png",
    },
    {
        name: "Daniel White",
        position: "CEO @ InnovateCo",
        text: "Sam ability to create seamless user experiences is umatched",
        image: "/user-4.jpg",
    },
    {
        name: "Emily Carter",
        position: "Product Manager @ GlobalTech",
        text: "Sam is a true frontend wizard. He took our complex product and trabsformed it",
        image: "/user-3.png",
    },
    {
        name: "Micheal Brown",
        position: "Director of IT @ MegaCorp",
        text: "Sam's work on our website has been nothing short of exceptional,",
        image: "/user-5.png",
    },
]


export const TestimonialsSection = () => {
    return (
        <div className="py-16 lg:py-24">
            <div className="container">
            <SectionHeader eyebrow="Happy Clients" 
            title="What Clients Say about Me" 
            description="Dont take my word for it. See what clients have to say about my work. See what my clients has to say about my work" />
            <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent, black_10%,black_90%,transparent)] py-4 -my-4">
                <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
                    {[...new Array(2)].fill(0).map((_, index) => (
                        <Fragment key={index}>
                                        {testimonials.map(testimonial => (
                                            <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300" >
                                                <div className="flex gap-4 items-center">
                                                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <Image className="max-h-full" 
                                                src={testimonial.image} 
                                                alt={testimonial.name} 
                                                width={30}  height={30}
                                                />
                                                </div>
                                                <div className="">
                                                <div className="font-semibold">{testimonial.name}</div>
                                                <div className="text-sm text-white/40">{testimonial.position}</div>
                                                </div>
                                                </div>
                                                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                                                </Card>
                                        ))}
                                        </Fragment>

                    ))}

                </div>
            </div>
            </div>
        </div>
    )
}