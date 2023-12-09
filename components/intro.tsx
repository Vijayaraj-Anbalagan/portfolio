"use client"

import React from 'react'
import Image from 'next/image'
import { motion} from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';



export default function Intro() {
  const {ref} = useSectionInView("Home",0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
 
  return (
    <section
      ref = {ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
         <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
                >
                <Image 
                src="https://i.ibb.co/1QhYHdF/Picsart-23-11-08-21-31-09-856.jpg"
                 alt="vijay-image" width="192" height="192" quality="95" priority={true}
                 className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                 />
                </motion.div>
                 <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}

          >
            👋
          </motion.span>
            </div>
         </div>

         <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Vijayaraj,</span> a{" "}
        <span className="font-bold">Computer Science student</span> who is passionate about{" "}
        <span className="font-bold"> Design.</span> I enjoy 
        <span className="italic"> building</span>.user friendly solutions,{" "}
        <span className="underline">projects, apps and sites</span>.
      </motion.h1>


      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:hover:text-white/100"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition group-dark:hover:opacity-100" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:text-white/100"
          href="https://drive.google.com/file/d/1j9BDjIHGiMJJyiLYLw_o9K-5RYhdyO_e/view?usp=drivesdk"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition group-dark:hover:opacity-100" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/100"
          href="https://www.linkedin.com/in/vijayaraj-anbalagan-6595a3243/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/100"
          href="https://github.com/Vijayaraj-Anbalagan"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>


    </section>
  )
}
