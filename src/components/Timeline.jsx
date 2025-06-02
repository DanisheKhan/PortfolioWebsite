import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};


const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-0 max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10"
      id={idName}
    >
      <Component />
    </motion.section>
  );
};


const skillsTimeline = [
  {
    period: "2022-2023",
    title: "Frontend Foundations",
    icon: "🎨",
    iconBg: "#383E56",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Responsive Design", level: 75 },
      { name: "UI/UX Fundamentals", level: 70 },
      { name: "Tailwind CSS", level: 75 }
    ],
    description: "Built foundational web development skills with a focus on creating responsive interfaces and basic interactive elements."
  },
  {
    period: "2023-2024",
    title: "Interactive Frontend Development",
    icon: "⚡",
    iconBg: "#E6DEDD",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "State Management", level: 80 },
      { name: "Component Design", level: 85 },
      { name: "JavaScript ES6+", level: 85 },
      { name: "Frontend Deployment", level: 75 }
    ],
    description: "Advanced to building interactive single-page applications with React, focusing on component-based architecture and modern styling approaches."
  },
  {
    period: "2023-2024",
    title: "Full-Stack Development",
    icon: "🔄",
    iconBg: "#1d1836",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 85 },
      { name: "Authentication", level: 80 },
      { name: "Full-Stack Deployment", level: 75 }
    ],
    description: "Expanded into full-stack development, creating applications with backend functionality, data persistence, and user authentication."
  },
  {
    period: "2025-Present",
    title: "Advanced Web Applications",
    icon: "🚀",
    iconBg: "#0a0a23",
    skills: [
      { name: "MERN Stack", level: 85 },
      { name: "Content Management", level: 80 },
      { name: "App Optimization", level: 75 },
      { name: "Real-time Features", level: 70 },
      { name: "API Integration", level: 85 },
      { name: "Advanced React Patterns", level: 80 }
    ],
    description: "Currently focusing on building complex web applications with advanced features, content management, and optimized user experiences."
  }
];

const SkillBar = ({ name, level }) => (
  <div className="my-2">
    <div className="flex justify-between mb-1">
      <span className="text-white text-[14px]">{name}</span>
      <span className="text-secondary text-[12px]">{level}%</span>
    </div>
    <div className="w-full bg-black bg-opacity-30 rounded-full h-1.5">
      <div
        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillsTimelineElement = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.period}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <h1 className="text-[24px]">{experience.icon}</h1>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold mt-2 mb-4">
          {experience.description}
        </p>
      </div>

      <div className="mt-4">
        {experience.skills.map((skill, index) => (
          <SkillBar
            key={`skill-${index}`}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <>
      <motion.div className="c-space">
        <h2 className={styles.sectionHeadText}>Skills Timeline.</h2>
        <p className={styles.sectionSubText}>MY TECHNICAL JOURNEY</p>

      </motion.div>

      <div className="mt-16 flex flex-col section-spacing c-space">
        <VerticalTimeline>
          {skillsTimeline.map((experience, index) => (
            <SkillsTimelineElement key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export { styles, SectionWrapper, Timeline, SkillBar, SkillsTimelineElement };