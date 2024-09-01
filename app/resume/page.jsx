"use client";
import {FaHtml5, FaCss, FaJs, FaReact, FaLaravel, FaFigma, FaCpp, FaCss3, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToolTip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: 'About Me',
  description: 'I have been working on multiple web projects and gained the wide knowledge to work on multiple technologies. I am a learner who seeks to learn a new thing from every opportunity and upskill myself',
  info: [
    {
      fieldName: "Name",
      fieldnValue: "Hemant Gupta"
    },
    {
      fieldName: "Phone",
      fieldnValue: "(+91) 9343 550 406"
    },
    {
      fieldName: "Experience",
      fieldnValue: "6+ Months"
    },
    {
      fieldName: "E-mail",
      fieldnValue: "hemantgupta277@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldnValue: "Indian"
    },
    {
      fieldName: "Freelance",
      fieldnValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldnValue: "English, Hindi, Japanese, French"
    },
  ]
};
const experience = {
  icon: "",
  title: "My Experience",
  description: "vkuhbnkm",
  items: [
    {
      company: "Mavask Pvt. Ltd.",
      position: "Junior Software Developer Intern",
      duration: "Jan-2024 - Present"
    }
  ]
};
const education = {
  icon: "",
  title: "My Education",
  description: "vkuhbnkm",
  items: [
    {
      institution: "University Institute of Technology, RGPV",
      degree: "B.Tech in Electronics and Communication Engineering",
      duration: "2020 - 2024"
    },
    {
      institution: "Kendriya Vidyalaya, Jabalpur",
      degree: "Higher Secondary School",
      duration: "2020 - 2024"
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Jabalpur",
      degree: "High School",
      duration: "2017 - 2018"
    },
  ]
};
const skills = {
  icon: "",
  title: "My Skills",
  description: "vkuhbnkm",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3/>,
      name: 'CSS 3',
    },
    {
      icon: <FaJs/>,
      name: 'JavaScript',
    },
    {
      icon: <FaLaravel/>,
      name: 'Laravel',
    },
    {
      icon: <FaReact/>,
      name: 'React.js',
    },
    {
      icon: <FaNodeJs/>,
      name: 'Node.js',
    },
    {
      icon: <SiNextdotjs/>,
      name: 'Next.js',
    },
    {
      icon: <SiTailwindcss/>,
      name: 'Tailwind CSS',
    },
    {
      icon: <FaFigma/>,
      name: 'Figma',
    },
  ]
};

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">Experience</TabsContent>
          </div>
        </Tabs>
      </div>
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:"></Tabs>
      </div>
    </motion.div>
  )
}

export default Resume