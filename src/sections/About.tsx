"use client"

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    component: Image,
    props: { src: "/Javascript.png", alt: "Javascript Icon", width: 100, height: 100 },
  },
  {
    title: "HTML5",
    component: Image,
    props: { src: "/html.png", alt: "HTML5 Icon", width: 100, height: 100 },
  },
  {
    title: "CSS3",
    component: Image,
    props: { src: "/CSS.png", alt: "CSS Icon", width: 100, height: 100 },
  },
  {
    title: "Chrome",
    component: Image,
    props: { src: "/chrome.png", alt: "Chrome Icon", width: 100, height: 100 },
  },
  {
    title: "Github",
    component: Image,
    props: { src: "/github.png", alt: "Github Icon", width: 100, height: 100 },
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
    const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into my World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* My Reads Card */}
          <div className="md:col-span-4">
            <Card className="h-full">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={"/book-cover.png"} alt="Book Image" width={200} height={200} />
              </div>
            </Card>
          </div>

          {/* My Toolbox Card */}
          <div className="md:col-span-8">
            <Card className="h-full">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences"
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
            </Card>
          </div>

          {/* Beyond the Code Card */}
          <div className="md:col-span-8">
            <Card className="h-full p-0 flex flex-col">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 pt-6 py-8"
              />
              <div className="relative flex-1 flex flex-wrap gap-4 justify-center items-center p-4" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Map Card */}
          <div className="md:col-span-4">
            <Card className="h-full p-0 relative">
              <Image
                src="/map.png"
                alt="Map image"
                className="h-full w-full object-cover"
                width={300}
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full   flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-2  animate-ping [animation-duration:2s]"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400  -z-10"></div>
                  <Image
                    src="/memoji-smile.png"
                    //src="/sam-face.jpg"
                    alt="smile memoji"
                    width={80}
                    height={80}
                    className="w-16 h-16 rounded-full"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};