"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { ContactButton } from "@/components/contact-button"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { useResume } from "@/hooks/use-resume"
import { ResumeModal } from "@/components/resume-modal"
import { CertificatesModal } from "@/components/certificates-modal"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Portfolio() {
  const { isModalOpen, openModal, closeModal, downloadResume } = useResume()
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Software & Cloud Engineer | Scalable Systems & Web Engineering</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                James Lewis
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              AI & Data Science Trailblazer | Innovator Building Scalable Systems & Smart UIs | Engineering the Future with Impact
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
                onClick={() => {
                  const projectsSection = document.getElementById('projects')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <ContactButton 
                className="bg-zinc-800 hover:bg-zinc-700 text-white"
              />
            </div>
            <div className="flex gap-4 pt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://github.com/jameslewis-git" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://www.linkedin.com/in/-jameslewis/" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="mailto:jameslewis.build@gmail.com">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Email</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute inset-x-0 bottom-4 mx-auto flex flex-col items-center justify-center gap-4 w-full cursor-pointer group"
          onClick={() => {
            const aboutSection = document.getElementById('about')
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          {/* Text with gradient and glow */}
          <motion.div
            className="relative"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 tracking-wider relative z-10">
              SCROLL DOWN
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-lg -z-10" />
          </motion.div>

          {/* Animated scroll indicator */}
          <div className="relative">
            {/* Outer glow rings */}
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/30 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main circle container */}
            <div className="relative w-14 h-14 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 flex items-center justify-center overflow-hidden group-hover:border-purple-500/50 transition-all duration-500 shadow-lg shadow-purple-500/20">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated dots */}
              <div className="relative w-1 h-8">
                {[0, 0.15, 0.3].map((delay, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-1 h-1 rounded-full ${index % 2 === 0 ? 'bg-purple-500' : 'bg-pink-500'}`}
                    animate={{
                      y: [0, 24, 0],
                      opacity: [0, 1, 0],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay,
                    }}
                  />
                ))}
              </div>

              {/* Subtle rotating gradient border */}
              <motion.div
                className="absolute inset-0 rounded-full border border-gradient-to-r from-purple-500/20 to-pink-500/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <Image
                  src="/images/profile2.png"
                  alt="James Lewis"
                  width={800}
                  height={800}
                  quality={100}
                  priority
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                I'm James Lewis, a driven B.E. student in AI and Data Science at Vidyavardhini's College of Engineering and Technology, Mumbai. I'm passionate about turning ideas into reality through coding and AI innovation. My focus is on creating smart, impactful solutions that push the boundaries of technology.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                I thrive on solving complex problems, from building machine learning models to crafting intuitive software. With a strong foundation in coding, I'm always exploring new ways to innovate and make a difference through tech.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                Eager to join cutting-edge AI and engineering teams, I'm seeking internships or entry-level roles to contribute my skills and learn from the best. 
                Let's connect to build the future of tech together!
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">James Lewis</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">jameslewis.build@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Mumbai, India</div>
                  </div>
                </div>

                {/* Download Resume Button */}
                <div className="mt-8">
                  <Button 
                    className="w-full relative group overflow-hidden bg-zinc-800/50 hover:bg-zinc-800/70 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300"
                    onClick={openModal}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                    <div className="relative flex items-center justify-between px-4 py-2">
                      <div className="flex items-center gap-2 transform group-hover:translate-x-1 transition-all duration-500 ease-out">
                        <Download className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-500" />
                        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-300 group-hover:to-pink-300">
                          View Resume
                        </span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-pink-400/0 transform translate-x-5 group-hover:translate-x-2 group-hover:text-pink-400 transition-all duration-500 ease-out" />
                    </div>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={70} />
            <SkillBadge name="TypeScript" level={95} />
            <SkillBadge name="React" level={95} />
            <SkillBadge name="Next.js" level={90} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="HTML/CSS" level={95} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="Python" level={85} />
            <SkillBadge name="PostgreSQL" level={70} />
            <SkillBadge name="Github" level={65} />
            <SkillBadge name="MangoDB" level={60} />
            <SkillBadge name="Git" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          <ProjectCard 
          title="SwiftCards – Knowledge on Autopilot"
          description="AI that transforms your notes into smart flashcards instantly. "
          tags={["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini", "Netlify"]}
          image="/images/projects/swiftcards.png"
          demoUrl="https://swiftcardss.netlify.app/"
          repoUrl="https://github.com/jameslewis-git/SWIFTCARDS-Knowledge-on-Autopilot.git"
            /> 

            <ProjectCard
              title="EduInsight - Your Gateway to Free Engineering Courses"
              description="A full-stack course aggregation platform built with Next.js, Supabase, and TypeScript."
              tags={["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Recharts"]}
              image="/images/projects/eduinsight.png"
              demoUrl="https://eduinsight-project.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/EduInsight--Your.Gateway.to.Free.Engineering.Courses.git"
            />
            <ProjectCard
              title="Quantum Habits - Daily habit checklist"
              description="A terminal-themed habit tracking app built with Next.js, TypeScript, and Framer Motion."
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "dnd-kit"]}
              image="/images/projects/checklist.png"
              demoUrl="https://dailyhabitchecklist.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/EduInsight--Your.Gateway.to.Free.Engineering.Courses.git"
            />
            <ProjectCard
              title="Random Activity Generator"
              description="An interactive app with dynamic card animations and a modern UI, built for the Code Circuit Hackathon."
              tags={["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Netlify"]}
              image="/images/projects/randomactivity.png"
              demoUrl="https://activitygeneratorcodecircuit.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/Random-activity-generator.git"
            />
            <ProjectCard
              title="NutriAI - Smart Nutrition and Diet Planning"
              description="A full-stack AI-powered nutrition and diet planning app built with Next.js, MongoDB, and Google Gemini API."
              tags={["React", "TypeScript", "MongoDB", "Google Gemini AI", "Tailwind CSS"]}
              image="/images/projects/nutriai.png"
              demoUrl="https://nutriproject.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/NutriAI.git"
            />
            <ProjectCard
              title="James Lewis - Digital Contact Card 👋"
              description="A personal web hub showcasing my Full Stack Web Development and AI & Data Science expertise."
              tags={["React", "TypeScript", "Tailwind CSS", "Next.js", "UI/UX"]}
              image="/images/projects/contactcard.png"
              demoUrl="https://james-contactcard.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/James-ContactCard.git"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/images/projects/portfolio.png"
              demoUrl="https://jameslewisportfolio.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/portfolio.git"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Education & Experience" subtitle="My academic journey" />

          <div className="mt-16">
            {/* Current Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 transition-all duration-300 hover:border-purple-500/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Currently</h3>
                      <p className="text-zinc-400">Pursuing B.E. in AI and Data Science</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Details */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        Education
                      </h4>
                      <div className="space-y-2">
                        <p className="text-zinc-300">Vidyavardhini's College of Engineering and Technology</p>
                        <p className="text-zinc-400">B.E. in Artificial Intelligence and Data Science</p>
                        <p className="text-zinc-400">2023 - 2027</p>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        Achievements & Activities
                      </h4>
                      <ul className="space-y-2 text-zinc-300">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>Active member of College Tech Club</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                          <span>Participated in Code Circuit Hackathon</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>Built 5+ Full Stack Projects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                          <span>Learning Web Development</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Current Focus */}
                  <div className="mt-8 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <h4 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Current Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-zinc-300">Learning Next.js</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-zinc-300">AI/ML Projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                        <span className="text-zinc-300">Freelance Work</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                        <span className="text-zinc-300">Internship Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Educational Timeline */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Educational Journey
              </h2>
              <Timeline />

              {/* Certificates Button */}
              <div className="mt-40 mb-4 flex justify-center items-center w-full">
                <div className="w-full max-w-[520px] mx-auto">
                  <Button
                    className="group relative w-full rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/70 transition-all duration-500 backdrop-blur-sm border border-zinc-800/50 hover:border-purple-500/50 py-14"
                    onClick={() => setIsCertificatesOpen(true)}
                  >
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    {/* Glowing Border */}
                    <div className="absolute inset-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-20 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                    
                    {/* Content Container */}
                    <div className="relative px-15 py-9">
                      {/* Top Row with Icon and Title */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Animated Certificate Icon */}
                          <div className="relative w-12 h-12">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                            <div className="relative h-full w-full flex items-center justify-center">
                              <svg
                                className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-300 group-hover:to-pink-300">
                            View Certificates
                          </h3>
                        </div>

                        {/* Arrow Icon */}
                        <ArrowRight className="w-6 h-6 text-purple-400 transform translate-x-0 group-hover:translate-x-1 transition-all duration-500" />
                      </div>

                      {/* Bottom Text */}
                      <p className="text-base text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500 mt-3 ml-16">
                        Explore my achievements and certifications
                      </p>

                      {/* Decorative Elements */}
                      <div className="absolute bottom-1 left-2 right-2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      <div className="absolute top-1 left-2 right-2 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">jameslewis.build@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/-jameslewis</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/jameslewis-git</div>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-bold mb-6">Current Status</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-zinc-300">Available for freelance work and full-time opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-zinc-300">Working on personal projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                    <span className="text-zinc-300">Actively seeking internship opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                    <span className="text-zinc-300">Open to collaboration</span>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Certificates Modal */}
      <CertificatesModal 
        isOpen={isCertificatesOpen}
        onClose={() => setIsCertificatesOpen(false)}
      />

      {/* Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">James</span>
              <span className="text-white"> Lewis</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">© {new Date().getFullYear()} James Lewis. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/jameslewis-git" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/-jameslewis/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:jameslewis.build@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
