'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiPrisma, SiTypescript, SiJavascript,
  SiCss3, SiHtml5, SiVite, SiSass, SiGithub, SiWordpress, SiDjango,
  SiMysql, SiPostgresql, SiPostman, SiLinux
} from "react-icons/si";

import { FaPython, FaJava } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Wordpress", icon: <SiWordpress /> },
  { name: "ClickFunnels 2.0", icon: "📈" },
  { name: "React", icon: <SiReact /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Github", icon: <SiGithub /> },
  { name: "Jira Work Management", icon: "📋" },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Raspberry Pi", icon: "🍓" },
  { name: "Selenium", icon: "🧪" },
  { name: "Postgres", icon: <SiPostgresql /> },
  { name: "Adafruit", icon: "🔌" },
  { name: "CRM", icon: "📇" },
  { name: "CMS", icon: "📰" },
];

const projects = [
  {
    title: '4k Upscaler',
    description: 'A fast-paced quiz game powered by the Open Trivia API...',
    demo: 'https://4k-video-upscaler-production.up.railway.app/',
    repo: 'https://github.com/nigel-otieno/4kVideoUpscaler',
    stack: ['Next.js', 'Tailwind CSS'],
    image: '/projects/4k.png',
  },
  {
    title: 'Trivia',
    description: 'A fast-paced quiz game powered by the Open Trivia API...',
    demo: 'https://trivia-omega-mocha.vercel.app',
    repo: 'https://github.com/nigel-otieno/4kVideoFPS',
    stack: ['Next.js', 'Tailwind CSS'],
    image: '/projects/trivia.png',
  },
  {
    title: 'StarWars Puzzle',
    description: 'A crossword-style puzzle game...',
    demo: 'https://starwarscrossword.vercel.app',
    repo: 'https://github.com/nigel-otieno/starwarscrossword',
    stack: ['Next.js', 'Tailwind CSS'],
    image: '/projects/starwars.png',
  },
  {
    title: 'Hangman Vice',
    description: 'Retro-style hangman game with vaporwave aesthetics...',
    demo: 'https://hangman-vice.vercel.app',
    repo: 'https://github.com/nigel-otieno/HangmanVice',
    stack: ['Next.js', 'Tailwind CSS'],
    image: '/projects/hangman.png',
  },
];

const sections = ["about", "education", "skills", "projects", "hobbies"];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      <nav className="fixed top-0 w-full backdrop-blur bg-black/40 z-50 px-6 py-4 flex justify-between items-center border-b border-white/10">
        <h1 className="text-xl font-bold tracking-wide">Nigel Otieno</h1>
        <ul className="flex gap-6 text-base">
          {sections.map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="hover:text-teal-400 transition-all">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-24 max-w-5xl mx-auto px-4">
      <section id="about" className="text-center mb-20 px-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <Image src="/projects/matrix.jpg" width={96} height={96} alt="Avatar" className="mx-auto rounded-full" />
        </div>
        <h2 className="text-4xl font-semibold">Nigel Otieno</h2>
        <p className="text-teal-400 text-xl">Full-Stack Developer</p>
        <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">
          I&apos;m a results-driven software developer with hands-on experience across the full web application lifecycle—from design and development to deployment and integration. I specialize in building user-focused, business-aligned solutions that improve engagement and drive measurable impact. With a background spanning web development, digital marketing, and robotics, I bring a multidisciplinary approach to delivering high-impact projects and boosting profitability.
        </p>
      </section>

      <div className="flex justify-center gap-8 items-center text-xl text-white my-10">
      <a href="https://github.com/nigel-otieno" target="_blank" className="flex items-center gap-2 hover:text-teal-400 transition">
          <span>💻</span> <span>GitHub</span>
        </a>
        <a href="mailto:nigel.otieno00@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition">
          <span>📧</span> <span>nigel.otieno00@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/nigel-otieno-37324a18a/" target="_blank" className="flex items-center gap-2 hover:text-teal-400 transition">
          <span>🔗</span> <span>LinkedIn</span>
        </a>
      </div>


        <section id="education" className="mb-20">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="bg-gray-800 p-6 rounded shadow-md text-lg space-y-6">
            <div>
              <p className="font-semibold">Coding Dojo, Oakland, CA</p>
              <p>Full Stack + Web Development Certificate</p>
              <p className="mt-1 text-gray-300">
              Completed an intensive, hands-on coding bootcamp covering full stack development across multiple programming languages and frameworks. 
              Gained proficiency in building dynamic web applications, working with databases, and following modern development workflows.
              Emphasized problem-solving, agile methodologies, and deploying real-world projects using stacks like MERN, Python/Django, and Java.</p>
            </div>
            <div>
              <p className="font-semibold">Chaffey College, Rancho Cucamonga, CA</p>
              <p>Computer Science</p>
              <p className="mt-1 text-gray-300">
                Acquired foundational knowledge in computer science, including algorithms, data structures, and introductory programming concepts. 
                Gained insights into computer architecture and operating systems fundamentals.
              </p>
            </div>
            <div>
              <p className="font-semibold">Udemy: CompTIA A+ Core 1 (220-1101) Course + Exam</p>
              <p>Comp TI A+</p>
              <p className="mt-1 text-gray-300">
              This course offers a comprehensive foundation in IT support, covering essential hardware, networking, mobile devices, 
              and troubleshooting skills required for the CompTIA A+ Core 1 (220-1101) certification.
              </p>
            </div>
            <div>
              <p className="font-semibold">Selenium Web Automation with Python</p>
              <p>Comp TI A+</p>
              <p className="mt-1 text-gray-300">
              This course provides a beginner-friendly introduction to automating web browsers using Selenium with Python. Learners are guided through real-world scenarios such as form submission, 
              scraping data, and handling dynamic content, all while building a solid understanding of web drivers, locators, and automation frameworks.              
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-20">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 bg-gray-900 rounded-lg px-4 py-4 shadow hover:shadow-md transition"
              >
                <div className="text-3xl text-teal-400">{skill.icon}</div>
                <span className="text-lg text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="mb-4 w-full aspect-video relative rounded overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-base text-gray-400 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500 mb-3">Stack: {project.stack.join(', ')}</p>
                <div className="flex space-x-4 text-base">
                  <Link href={project.demo} target="_blank" className="text-teal-400 hover:underline">Demo</Link>
                  <Link href={project.repo} target="_blank" className="text-teal-400 hover:underline">Code</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="hobbies" className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center">🎧 Hobbies & Passions</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Music Production",
                  image: "/projects/logic.png",
                  description: "I compose beats, mix tracks, and produce music using FL Studio and Ableton. Music is my creative outlet. I also enjoy experimenting with different sounds, layering instruments, and creating original compositions that reflect my mood and style.",
                },
                {
                  title: "CAD Design",
                  image: "/projects/cad.png",
                  description: "I enjoy building mechanical models and electrical diagrams using CAD tools like Shap3d and SolidWorks. I like exploring new design concepts, refining prototypes, and visualizing how each part fits together in real-world applications.",
                },
                {
                  title: "Weightlifting",
                  image: "/projects/weights.png",
                  description: "I enjoy strength training and pushing physical limits through consistent weightlifting routines. It helps me stay disciplined, focused, and energized, while constantly striving to improve my form, endurance, and overall performance.",
                },
                {
                  title: "Basketball",
                  image: "/projects/basketball.png",
                  description: "Playing basketball keeps me active and mentally sharp. I love the energy of the game, the fast pace, and the way it brings people together through friendly competition. Basketball is a great way to clear my head and stay connected with others.",
                },
              ].map((hobby, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-lg p-5 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-full aspect-video relative mb-4 overflow-hidden rounded">
                    <Image
                      src={hobby.image}
                      alt={hobby.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-lg text-gray-300">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="text-sm text-center text-gray-500 mt-20 border-t border-white/10 pt-6">
          &copy; 2025 John Doe. Built with Next.js & Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}
