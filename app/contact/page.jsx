"use client";

import { Button } from "@/components/ui/button";
import { Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7404927198",
  },{
    icon: <FaEnvelope />,
    title: "Email",
    description: "Sahilmk01@gmail.com",
  },{
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "1513/34, Sheetal Nagar, Rohtak, Haryana-124001",
  },
];

import { motion } from "framer-motion";
import { useRef, useState } from "react";



const Contact = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
    ).then(
      () => {
        setSuccess(true);
        setError(false);
      },
      (error) => {
        console.log(error);
        setError(true);
        setSuccess(false);
      }
    );
  };

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1, 
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60">Hire me for your next project.Fill the form below and I will get back to you as soon as possible.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                type="firstName"
                name="user_firstname"
                placeholder="Firstname"
                />
                <Input 
                type="lastname"
                name="user_lastname"
                placeholder="Lastname"
                />
                <Input 
                type="email"
                name="user_email" 
                placeholder="Email address"
                />
                <Input 
                type="phone"
                name="user_phone" 
                placeholder="Phone number"
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="dashboard">Dashboard System</SelectItem>
                    <SelectItem value="ui_dev">UI/UX design</SelectItem>
                    <SelectItem value="full_stack">Full stack development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
              className="h-[200px]"
              name="user_message"
              placeholder="Type your message here."
              />
              {/* button */}
              <Button  size="md" className="max-w-40">Send message</Button>
               {/* Status Messages */}
               {success && (
                <p className="text-green-500 mt-4">Your message has been sent!</p>
              )}
              {error && (
                <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] 
                    text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                </li>
              })}
            </ul>
            </div>
        </div>
      </div>
      </motion.section>
  );
}

export default Contact;