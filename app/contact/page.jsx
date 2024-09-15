"use client";
import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "+91-7974322081",
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "hemantgupta277@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description: "Jabalpur, Madhya Pradesh, India (482002)",
  }
]

const Contact = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"}}} className="py-6 px-2 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat velit vero deserunt voluptatem sunt et nobis quasi, repellat ut eveniet in quidem vitae illo cupiditate, sit id molestiae culpa porro? Maxime repudiandae aliquid inventore nemo maiores aperiam, deleniti laboriosam eveniet. Ipsam ullam dolorum, mollitia quasi amet laboriosam dignissimos placeat.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder="First Name" className="rounded" style={{borderRadius:"7px"}}/>
                <Input type="lastname" placeholder="Last Name" style={{borderRadius:"7px"}}/>
                <Input type="email" placeholder="Email Address" style={{borderRadius:"7px"}}/>
                <Input type="phone" placeholder="Contact Number" style={{borderRadius:"7px"}}/>
              </div>
              <Select>
                <SelectTrigger className="w-full"  style={{borderRadius:"7px"}}>
                  <SelectValue placeholder="Select a Service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="app">App Development</SelectItem>
                    <SelectItem value="server">Server Management</SelectItem>
                    <SelectItem value="network">Network Architecture</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message here" style={{borderRadius:"7px"}}></Textarea>
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className='flex flex-col gap-10'>
              {info.map((item, index)=>{
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded flex items-center justify-center" style={{borderRadius: "7px"}}>
                      <div className='text-[24px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact