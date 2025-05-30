"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "The Akaal Thrifts",
    role: "Full Stack Dev",
    period: "2025 - ",
    location: "Remote",
    type: "Self Employed",
    logo: "https://i.ibb.co/6MyjZWn/Screenshot-2025-04-29-212433.png",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    id: 2,
    company: "Chandigarh University",
    role: "Computer Science & Engineering Student",
    period: "2024 - 2028",
    location: " Mohali, Punjab",
    type: "Student",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oi3q561AD8A8y3jfQDHY2NnntDxQhi423g&s",
  },
]

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 90 },
    { name: "TypeScript", proficiency: 80 },
    { name: "Python", proficiency: 70 },
    { name: "HTML+CSS", proficiency: 95 },
    { name: "Kotlin", proficiency: 60 },
  ],
  "Frameworks/Libraries": [
    { name: "React", proficiency: 75 },
    { name: "Next.js", proficiency: 85 },
    { name: "Node.js", proficiency: 75 },
    { name: "Express.js", proficiency: 65 },
  ],
  Tools: [
    { name: "Git", proficiency: 98 },
    { name: "Docker", proficiency: 88 },
    { name: "Kubernetes", proficiency: 78 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Code, Coffee & Me
            </span>
            <span className="ml-2">☕💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="https://i.ibb.co/G49tvXBh/Whats-App-Image-2025-04-29-at-21-01-25-02e33909.jpg"
                  alt="Atinderpal Singh"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Blockchain Sorcerer 🧙‍♂️ and Full Stack Dev 💻. Building secure, scalable solutions in the
                  crypto-verse. From DeFi to Web3, turning complex tech into seamless experiences. ⛓⚡🔥
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>Hey, I'm Atinderpal Singh !</strong>
                  </p>
                  <p className="mb-4">
                    <strong>turnig lines of code</strong> into <strong>intelligent systems</strong>! Whether it's{" "}
                    <strong>fullstack websites</strong>, <strong>Hardware automation</strong>, or Engineering{" "}<strong>secure network solutions</strong>, I love building tech that makes a real-world impact.
                  </p>
                  <p className="mb-4">
                    I spend my days <strong>crafting with JavaScript, Python and TypeScript </strong>—and bridging the gap between<strong>hardware and the internet</strong>.🔥 When I'm not coding, I'm
                    probably experimenting with <strong>IoT gadgets</strong>, contributing to{" "}
                    <strong>hands-on tech projects</strong>, or explaining how <strong>embedded systems</strong> can
                    change the world.
                  </p>
                  <p>
                    Let's <strong>connect, build, and break things</strong>—because the{" "}
                    <strong>future is decentralized, and I refuse to be left behind!</strong> ⛓⚡🔥
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                The Road So Far
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-lg text-purple-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills?.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {(item.skills || []).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}
