import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineLaptop } from "react-icons/ai"; // Add an icon for Interain
import { FaRocket } from "react-icons/fa"; // Add an icon for TuTr Hyperloop
import ParkWiseImg from "@/public/ParkWise.png";
import VizhiImg from "@/public/Vizhi.png";
import WaterSenseImg from "@/public/WaterSense.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Primary and Secondary Schooling",
    location: "Smt Malathi Srinivasan Mat. Hr. Sec. School",
    description:
      "My school years were golden. They provided numerous opportunities to explore my skills, including projects with IoT, editing posters and videos, and the chance to create a website for the school.",
    icon: React.createElement(LuGraduationCap),
    date: "2008 - 2022",
  },
  {
    title: "Bachelor's in Computer Science",
    location: "KCG College of Technology, Chennai",
    description:
      "Embarking on my Bachelor's in Computer Science at KCG College of Technology has been a creative and enthusiastic journey. My eagerness towards design and development led me to this course, offering abundant ways to showcase my skills. It provides opportunities to participate in hackathons and events and also allows me to coordinate them.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2026",
  },
  {
    title: "Lead of UI/UX and Web Dev Department",
    location: "Interain, Chennai, TN, India",
    description:
      "At Interain, an AI X Edtech platform, I started as a UI/UX and Web Development Intern in January 2024. I developed the landing page and the UI of the product. In June 2024, I became the Lead of the UI/UX and Web Development Department and a core member of Interain.",
    icon: React.createElement(AiOutlineLaptop),
    date: "Jan 2024 - present",
  },
  {
    title: "Web Development Intern",
    location: "Chennai, TN, India",
    description:
      "As a web development intern, I honed my skills in web development, specializing in technologies like React, Next.js, TypeScript, and Tailwind. Currently open to internship opportunities, I'm a front-end developer with a flair for design, committed to coding solutions for real-world problems.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Intern",
    location: "TuTr Hyperloop, Chennai, TN, India",
    description:
      "At TuTr Hyperloop, an IIT incubated tech startup, I work on establishing communication between the pod and the control station. I provide a graphical user interface to control the pod and manage data transfer between the controller and the pod.",
    icon: React.createElement(FaRocket),
    date: "Date TBD - present",
  },
] as const;

export const projectsData = [
  {
    title: "Vizhi",
    description:
      "Vizhi transforms democracy with verified promises, direct candidate communication, and an informed political forum for accountable governance.",
    tags: ["Next.js", "FireBase", "Tailwind", "Python", "AI"],
    imageUrl: VizhiImg,
  },
  {
    title: "WaterSense",
    description:
      "WaterSense: Sustainable agtech using IoT and cloud. Crafted a user-friendly app, integrating real-time data on soil moisture, weather, and water.",
    tags: ["Next.js", "FireBase", "Tailwind", "Arduino"],
    imageUrl: WaterSenseImg,
  },
  {
    title: "ParkWise",
    description:
      "ParkWise: Innovating parking with smart reservations, AI-driven slot selection, chatbot assistance, blockchain valet services. For a stress-free urban mobility.",
    tags: ["React", "AI", "Firebase", "Bootstrap", "ETH"],
    imageUrl: ParkWiseImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "MySQL",
  "Python",
  "Java",
  "C",
  "FireBase",
  "Framer Motion",
  "Bootstrap",
  "Flask",
  "TCP Protocol",
  "Ethernet Connectivity",
  "CAN Protocols",
  "VCU Integeration",
] as const;
