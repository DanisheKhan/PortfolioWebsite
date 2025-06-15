import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { OrbitingCircles } from "../components/OrbitingCircles";
import Marquee from "../components/Marquee";
import { Particles } from "../components/Particles";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiBootstrap, SiTypescript, SiExpress, SiMysql,
  SiMongodb, SiNextdotjs, SiVercel, SiAppwrite, SiPostman,
  SiAxios, SiJsonwebtokens, SiCloudinary
} from "react-icons/si";

// Memoized skill card component to optimize rendering
const SkillCard = memo(({ skill, index, hoverSkill, setHoverSkill }) => {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(90, 50, 205, 0.2)",
        backgroundColor: "rgba(33, 39, 80, 0.8)"
      }}
      onHoverStart={() => setHoverSkill(skill.name)}
      onHoverEnd={() => setHoverSkill(null)}
      className="bg-navy/60 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col items-center cursor-pointer"
    >
      <motion.div
        className="text-3xl mb-2"
        animate={{
          scale: hoverSkill === skill.name ? 1.2 : 1,
          rotate: hoverSkill === skill.name ? [0, -5, 5, -3, 3, 0] : 0
        }}
        transition={{ duration: 0.5 }}
      >
        {typeof skill.icon === 'string' ? (
          <span className="text-lg">{skill.icon}</span>
        ) : skill.icon}
      </motion.div>
      <h3 className="font-medium text-sm md:text-base text-center">{skill.name}</h3>
    </motion.div>
  );
});

function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoverSkill, setHoverSkill] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  // Initialize animation state and set up optional category rotation
  useEffect(() => {
    // Trigger entrance animations
    setAnimateIn(true);

    // Optional: Auto-rotate categories
    /* Uncomment to enable auto-rotation
    const interval = setInterval(() => {
      setActiveCategory(prev => {
        const categoryIds = categories.map(c => c.id);
        const currentIndex = categoryIds.indexOf(prev);
        const nextIndex = (currentIndex + 1) % categoryIds.length;
        return categoryIds[nextIndex];
      });
    }, 8000);
    
    return () => clearInterval(interval);
    */
  }, []);

  const categories = [
    { id: "frontend", title: "Frontend Development", icon: "🎨" },
    { id: "backend", title: "Backend Development", icon: "⚙️" },
    { id: "deployment", title: "Deployment & DevOps", icon: "🚀" },
    { id: "tools", title: "Tools & Utilities", icon: "🔧" },
    { id: "soft", title: "Soft Skills", icon: "🤝" },
  ];

  const skills = {
    frontend: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
      { name: "React Router DOM", icon: <FaReact className="text-red-400" /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "Context API", icon: <FaReact className="text-purple-400" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Mongoose", icon: <SiMongodb className="text-green-600" /> },
      { name: "Appwrite", icon: <SiAppwrite className="text-pink-500" /> },
      { name: "RESTful APIs", icon: <FaNodeJs className="text-gray-400" /> },
      { name: "JWT Authentication", icon: <SiJsonwebtokens className="text-gray-300" /> },
    ],
    deployment: [
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Onrender", icon: <FaNodeJs className="text-purple-400" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
      { name: "Docker (basic)", icon: <FaDocker className="text-blue-500" /> },
      { name: "GitHub Pages", icon: <FaGithub /> },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Thunder Client", icon: <SiPostman className="text-blue-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Chrome DevTools", icon: <FaReact className="text-blue-600" /> },
    ],
    soft: [
      { name: "Communication", icon: "💬" },
      { name: "Team Collaboration", icon: "🤝" },
      { name: "Problem-Solving", icon: "🧩" },
      { name: "Adaptability", icon: "🔄" },
      { name: "Time Management", icon: "⏱️" },
      { name: "Attention to Detail", icon: "🔍" },
    ],
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };
  return (
    <section
      id="tech-stack"
      className="min-h-screen relative c-space section-spacing overflow-hidden"
      ref={sectionRef}
    >
      {/* Background particles */}
      {/* <Particles
        className="absolute inset-0 -z-10"
        quantity={80}
        color="#ffffff"
        staticity={15}
        size={0.6}
      /> */}

      <div className="relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            className="text-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            className="subtext mt-4 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            These are the technologies I've worked with and feel comfortable using in my projects.
            I'm constantly learning and expanding my technical toolkit.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 border flex items-center gap-2 ${activeCategory === category.id
                ? "bg-gradient-to-r from-royal to-lavender text-white border-transparent shadow-lg shadow-lavender/20"
                : "border-white/20 hover:border-white/40 hover:bg-navy/50"
                }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 * categories.findIndex(c => c.id === category.id)
              }}
              aria-pressed={activeCategory === category.id}
              aria-label={`Show ${category.title} skills`}
              role="tab"
            >
              <span className="text-lg" aria-hidden="true">{category.icon}</span>
              <span>{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-8 px-4 md:px-6"
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
          >
            <div
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              {skills[activeCategory]?.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  hoverSkill={hoverSkill}
                  setHoverSkill={setHoverSkill}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>


        {/* Marquee of tech logos */}
        <motion.div
          className="mt-16 flex flex-col gap-6 sm:gap-12 px-4 md:px-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Marquee
              className="py-4 grayscale hover:grayscale-0 transition-all duration-500"
              pauseOnHover
              speed={1.5}
              aria-label="Scrolling frontend and backend technologies"
            >              {[...skills.frontend, ...skills.backend].map((skill, index) => (
              <motion.div
                key={`marquee-top-${skill.name}-${index}`}
                className="mx-8"
                whileHover={{ scale: 1.3, y: -5 }}
              >
                <div
                  className="flex items-center justify-center h-6 w-6 text-4xl"
                  title={skill.name}
                >
                  {skill.icon}
                </div>
              </motion.div>
            ))}
            </Marquee>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Marquee
              className="py-4 grayscale hover:grayscale-0 transition-all duration-500"
              reverse
              pauseOnHover
              speed={1.5}
              aria-label="Scrolling deployment and tool technologies"
            >              {[...skills.deployment, ...skills.tools].map((skill, index) => (
              <motion.div
                key={`marquee-bottom-${skill.name}-${index}`}
                className="mx-8"
                whileHover={{ scale: 1.3, y: -5 }}
              >
                <div
                  className="flex items-center justify-center h-6 w-6 text-4xl"
                  title={skill.name}
                >
                  {skill.icon}
                </div>
              </motion.div>
            ))}
            </Marquee>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
