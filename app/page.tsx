"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  FileText,
  Cpu,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
  Code,
  Mail,
  ShoppingBag,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hey! I'm Atinderpal Singh
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              🚀 Computer Science Student | Full-Stack Developer | Tech Enthusiast | Event Management
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Technical Skills
              </span>
              <span className="ml-2 text-white">💻</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCategory
                  title="Languages"
                  skills={["Python", "C/C++", "SQL", "HTML", "Java", "JavaScript", "Kotlin"]}
                />
                <SkillCategory
                  title="Developer Tools"
                  skills={["Google Cloud Platform", "VS Code", "Google CoLab", "Arduino IDE"]}
                />
                <SkillCategory title="Hardware & Embedded Systems" skills={["Arduino", "ESP32", "Raspberry Pi"]} />
                <SkillCategory title="Networking" skills={["TCP/IP", "WebSockets", "HTTP", "MQTT"]} />
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-white text-center">Areas of Interest</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Embedded Systems & IoT",
                    "Robotics & Automation",
                    "Cybersecurity",
                    "Machine Learning",
                    "Web Development",
                    "Data Structures and Algorithms",
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Code className="w-10 h-10 text-pink-500" />}
                title="Web Development"
                description="Responsive and dynamic web applications using modern frameworks and technologies."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" />}
                title="Full Stack Development"
                description="End-to-end web application development with modern frameworks and best practices."
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-pink-500" />}
                title="Embedded Systems"
                description="Development of hardware and software solutions for IoT and robotics applications."
              />
              <ServiceCard
                icon={<Github className="w-10 h-10 text-purple-500" />}
                title="Project Management"
                description="Efficient planning, execution, and delivery of technical projects with focus on quality and timeliness."
              />
              <ServiceCard
                icon={<Code className="w-10 h-10 text-blue-500" />}
                title="Web Development"
                description="Modern, responsive web applications built with Next.js, React, and TypeScript optimized for performance and user experience."
              />
              <ServiceCard
                icon={<ShoppingBag className="w-10 h-10 text-green-500" />}
                title="E-commerce Solutions"
                description="Custom e-commerce platforms with Shopify integration, AI-powered recommendations, and seamless payment processing."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Life Lane"
                description="A Smart Traffic Light Management System that prioritizes emergency vehicles using AI-powered traffic signal management and optimized routing with Google Maps APIs."
                tags={["React", "Google Maps API", "TypeScript", "Next.js", "Vercel"]}
                date="April 2025"
              />
              <ProjectCard
                title="Secure Credential Manager"
                description="Android App and Chrome extension to automate WiFi network login by securely storing and autofilling credentials into college WiFi Authorization System."
                tags={["JavaScript", "Chrome Extensions API", "Android Studio", "chrome.storage.sync"]}
                date="February 2025"
              />
              <ProjectCard
                title="Laser-Lymbal"
                description="Laser-based security system that detects and tracks intruders using Arduino, ESP32-CAM with CVZone for facial recognition and hand tracking."
                tags={["Python", "C/C++", "Arduino", "ESP32", "CVZone"]}
                date="January 2025"
              />
              <ProjectCard
                title="Akaal Thrifts"
                description="E-commerce website with dynamic UI and integrated backend for online shopping experience."
                tags={["JavaScript", "E-commerce", "Backend Integration", "Dynamic UI"]}
                date="2024"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section id="extracurricular" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Extracurricular Activities
              </span>
              <span className="ml-2 text-white">🎭</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Event Management - City Lead, NewBi Entertainment</h3>
                  <span className="text-gray-400">June 2024 - February 2025</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Managed and handled backstage at Dil-luminati Chandigarh Concert</li>
                  <li>Worked with Crowd Management crew at the Bangr Carnival Bengaluru</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Ping Me
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">Or contact me directly:</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="mailto:atinderpaul16@gmail.com?subject=Let's%20Connect&body=Hi%20Atinderpal,"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1CLpKfAC-WQwLShyD9mOf8GfrNVuPT0t7/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/frostic-burn" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/atinderpal-sing" label="LinkedIn" />
            <SocialIcon icon={<Twitter />} href="#" label="Twitter" />
            <SocialIcon icon={<MessageSquare />} href="#" label="Discord" />
            <SocialIcon icon={<PenTool />} href="#" label="Medium" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Atinderpal Singh. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags, date }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-gray-400 text-sm mt-1 md:mt-0">{date}</span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function SkillCategory({ title, skills }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:sukhisthebest3@gmail.com" className="text-purple-400 hover:text-purple-300">
        sukhisthebest3@gmail.com
      </a>
    </div>
  )
}
