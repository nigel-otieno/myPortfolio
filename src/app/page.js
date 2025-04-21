'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiPrisma, SiTypescript, SiJavascript, SiCss3, SiHtml5, SiVite, SiSass, SiGithub } from "react-icons/si";

const skills = [
  { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "SASS", icon: <SiSass /> },
  { name: "GitHub", icon: <SiGithub /> },
];

const projects = [
  {
    title: '4k Upscaler',
    description: 'A fast-paced quiz game powered by the Open Trivia API. Users can select category and difficulty, then test their knowledge with instant feedback and score tracking.',
    demo: 'https://4k-video-upscaler-production.up.railway.app/',
    repo: 'https://github.com/nigel-otieno/4kVideoUpscaler',
    stack: ['Next.js', 'Tailwind CSS'],
    image: '/projects/4k.png', // ✅ Make sure this image exists
  },
  {
    title: 'Trivia',
    description: 'A fast-paced quiz game powered by the Open Trivia API. Users can select category and difficulty, then test their knowledge with instant feedback and score tracking.',
    demo: 'https://trivia-omega-mocha.vercel.app',
    repo: 'https://github.com/nigel-otieno/4kVideoFPS',
    stack: ['Next.js', 'Tailwind CSS'],
    image: '/projects/trivia.png', // ✅ Make sure this image exists
  },
  {
    title: 'StarWars Puzzle',
    description: 'A crossword-style puzzle game featuring characters and lore from the Star Wars universe. Built for fans to challenge their memory in a fun, interactive UI.',
    demo: 'https://starwarscrossword.vercel.app',
    repo: 'https://github.com/nigel-otieno/starwarscrossword',
    stack: ['Next.js', 'Tailwind CSS'],
    image: '/projects/starwars.png', // ✅ Make sure this image exists
  },
  {
    title: 'Hangman Vice',
    description: 'Retro-style hangman game with vaporwave aesthetics. Guess the correct word before the vice-themed countdown gets you. Smooth animations and clean UX.',
    demo: 'https://hangman-vice.vercel.app',
    repo: 'https://github.com/nigel-otieno/HangmanVice',
    stack: ['Next.js', 'Tailwind CSS'],
    image: '/projects/hangman.png', // ✅ Make sure this image exists
  },
];

const sections = ["about", "education", "skills", "projects", "hobbies"];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      <nav className="fixed top-0 w-full backdrop-blur bg-black/40 z-50 px-6 py-4 flex justify-between items-center border-b border-white/10">
        <h1 className="text-lg font-bold tracking-wide">John Doe</h1>
        <ul className="flex gap-6 text-sm">
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
        <section id="about" className="text-center mb-20">
          <div className="mb-4">
            <Image src="/avatar.png" width={96} height={96} alt="Avatar" className="mx-auto rounded-full" />
          </div>
          <h2 className="text-3xl font-semibold">Amir Akbulut,</h2>
          <p className="text-teal-400">full-stack developer</p>
          <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
        </section>

        <section id="education" className="mb-20">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <div className="bg-gray-800 p-4 rounded shadow-md text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </section>

        <section id="skills" className="mt-20">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 bg-gray-900 rounded-lg px-4 py-3 shadow hover:shadow-md transition"
                >
                  <div className="text-2xl text-teal-400">{skill.icon}</div>
                  <span className="text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

              <br></br>
              <br></br>

        <section id="projects" className="mb-20">
          <h3 className="text-xl font-bold mb-6">Projects</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="mb-4 w-full aspect-video relative rounded overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <h4 className="text-lg font-bold mb-1">{project.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{project.description}</p>
                <p className="text-xs text-gray-500 mb-3">Stack: {project.stack.join(', ')}</p>
                <div className="flex space-x-4 text-sm">
                  <Link href={project.demo} target="_blank" className="text-teal-400 hover:underline">Demo</Link>
                  <Link href={project.repo} target="_blank" className="text-teal-400 hover:underline">Code</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="hobbies" className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">🎧 Hobbies & Passions</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Music Production",
                  image: "/projects/logic.png",
                  description: "I compose beats, mix tracks, and produce music using FL Studio and Ableton. Music is my creative outlet.",
                },
                {
                  title: "Digital Art",
                  image: "/projects/cad.png",
                  description: "I occasionally create pixel art, retro visuals, and graphics for my projects and side experiments.",
                },
                {
                  title: "Gaming & Retro Consoles",
                  image: "/hobbies/gaming.png",
                  description: "Big fan of retro gaming and emulator setups — especially the SNES and Game Boy era.",
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
                  <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-gray-300 text-sm">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="text-xs text-center text-gray-500 mt-20 border-t border-white/10 pt-6">
          &copy; 2025 John Doe. Built with Next.js & Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}
