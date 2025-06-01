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
    period: "2021-2023",
    title: "Security & Defense Skills",
    icon: "🔒", // You can replace with actual icon component
    iconBg: "#383E56",
    skills: [
      { name: "Security Standards", level: 90 },
      { name: "MapsUI", level: 90 },
      { name: "Windows Forms & WPF", level: 85 },
      { name: "C# Development", level: 85 },
      { name: "XML to SVG Conversion", level: 80 },
      { name: "X-DOM", level: 75 }
    ],
    description: "Skills developed while working on security and defense projects, focusing on application security, map interfaces, and industrial automation."
  },
  {
    period: "2023-2024",
    title: "Back-End & Automotive Skills",
    icon: "🚗", // You can replace with actual icon component
    iconBg: "#E6DEDD",
    skills: [
      { name: "Large-Scale Data Systems", level: 90 },
      { name: "Vehicle-to-Cloud Communication", level: 85 },
      { name: "API Development", level: 90 },
      { name: "ISO 26262 Compliance", level: 80 },
      { name: "Data Privacy Protocols", level: 85 },
      { name: "Telemetry Systems", level: 85 }
    ],
    description: "Skills acquired during automotive industry work, specializing in vehicle data systems, telemetry, and secure communication protocols."
  },
  {
    period: "2025-Present",
    title: "Modern Web Development",
    icon: "🌐", // You can replace with actual icon component
    iconBg: "#1d1836",
    skills: [
      { name: "React", level: 80 },
      { name: "Three.js", level: 75 },
      { name: "Vite", level: 75 },
      { name: "WebAPI", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
    description: "Current focus on modern web development technologies, creating interactive and visually appealing web applications."
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

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 h-[1px] w-full" />
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