import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { useState, useEffect, useRef } from "react";

// Learning projects based on your provided links
const learningProjects = [
  {
    id: "megaBlog",
    title: "Full-Stack Blog Platform",
    tech: "React, Appwrite, React Form Hook",
    image: "/assets/projects/p1.png",
    description: "Built a blog platform with user authentication, content management, and dynamic content rendering using Appwrite backend.",
    link: "https://mega-blog-brown-eta.vercel.app/",
    lesson: "Learned how to implement authentication flows and content management systems."
  },
  {
    id: "realEstate",
    title: "Real Estate Listings",
    tech: "MERN Stack, Authentication",
    image: "/assets/projects/p2.png",
    description: "Created a real estate platform with property listings, search functionality, and user accounts.",
    link: "https://project-2-c1ib.onrender.com/listings",
    lesson: "Mastered handling complex data relationships and implementing search filters."
  },
  {
    id: "frontendShowcase",
    title: "Tailwind Showcase",
    tech: "Tailwind CSS, HTML5",
    image: "/assets/projects/p3.png",
    description: "Developed a responsive landing page demonstrating advanced Tailwind CSS techniques.",
    link: "https://danishekhan.github.io/Tailwind-Project/",
    lesson: "Perfected responsive design principles and utility-first CSS workflows."
  },
  {
    id: "contactManager",
    title: "Contact Management App",
    tech: "React, Context API, localStorage",
    image: "/assets/projects/p4.png",
    description: "Built a contact management application with CRUD operations and persistent storage.",
    link: "https://contact-app-deployed.vercel.app/",
    lesson: "Implemented state management patterns and local data persistence strategies."
  },
  {
    id: "currencyConverter",
    title: "Currency Converter",
    tech: "React, API Integration",
    image: "/assets/projects/p5.png",
    description: "Created a currency conversion tool with real-time exchange rates.",
    link: "https://currency-converter-danishkhans-projects.vercel.app/",
    lesson: "Mastered API integration and handling asynchronous data flows."
  },
  {
    id: "passwordGenerator",
    title: "Password Generator",
    tech: "React, JavaScript",
    image: "/assets/projects/p6.png",
    description: "Developed a tool for generating secure passwords with customizable settings.",
    link: "https://password-generator-danishkhans-projects.vercel.app/",
    lesson: "Applied JavaScript algorithms and React state management for interactive tools."
  },
  {
    id: "backgroundChanger",
    title: "Background Changer",
    tech: "React, State Management",
    image: "/assets/projects/p7.png",
    description: "Created a simple color-changing application to practice React fundamentals.",
    link: "https://bg-changer-seven-gamma.vercel.app/",
    lesson: "Learned React component lifecycle and event handling."
  }
];

const ProjectCard = ({ title, tech, image, description, link, lesson, isMobile }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full overflow-hidden rounded-xl border border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation",
        isMobile ? "w-[85vw] max-w-xs flex-shrink-0 snap-center" : "w-72 sm:w-80"
      )}
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex flex-col gap-3 p-4">
        <div className="relative w-full overflow-hidden rounded-lg aspect-video">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-md font-bold text-white line-clamp-1">{title}</h3>
          <p className="text-xs font-medium text-white/60">{tech}</p>
        </div>
        <blockquote className="mt-1 text-sm line-clamp-2 sm:line-clamp-3">{description}</blockquote>
        <div className="mt-auto flex flex-col">
          <span className="text-xs font-semibold text-emerald-400">What I Learned:</span>
          <p className="text-xs italic text-white/70 line-clamp-2">{lesson}</p>
        </div>
      </div>
    </figure>
  );
};

// Pagination indicators for mobile carousel
const PaginationDot = ({ active, onClick }) => (
  <button
    className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${active ? "bg-white scale-125" : "bg-white/30"
      }`}
    onClick={onClick}
    aria-label={active ? "Current slide" : "Go to slide"}
  />
);

export default function LearningLab() {
  const [isMobile, setIsMobile] = useState(false);
  const [firstRowProjects, setFirstRowProjects] = useState([]);
  const [secondRowProjects, setSecondRowProjects] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const autoplayRef = useRef(null);

  // Effect for responsive layout
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Adjust project distribution based on screen size
    if (isMobile) {
      setFirstRowProjects(learningProjects);
      setSecondRowProjects([]);
    } else {
      const splitIndex = Math.ceil(learningProjects.length / 2);
      setFirstRowProjects(learningProjects.slice(0, splitIndex));
      setSecondRowProjects(learningProjects.slice(splitIndex));
    }

    return () => window.removeEventListener('resize', checkIfMobile);
  }, [isMobile]);

  // Observer to check if section is visible in viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // At least 10% of the element must be visible
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Mobile auto-slide functionality - only when visible
  useEffect(() => {
    if (isMobile && carouselRef.current && isVisible) {
      // Clear existing interval if any
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }

      // Start autoplay
      autoplayRef.current = setInterval(() => {
        const nextSlide = (activeSlide + 1) % learningProjects.length;
        setActiveSlide(nextSlide);

        // Scroll to the next slide
        const slideWidth = carouselRef.current.scrollWidth / learningProjects.length;
        carouselRef.current.scrollTo({
          left: nextSlide * slideWidth,
          behavior: 'smooth'
        });
      }, 3000); // Change slide every 3 seconds

      return () => {
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current);
        }
      };
    } else if (!isVisible && autoplayRef.current) {
      // Stop autoplay when not visible
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, [isMobile, activeSlide, learningProjects.length, isVisible]);

  // Handle scroll events to update active slide
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const slideWidth = carouselRef.current.scrollWidth / learningProjects.length;
        const newActiveSlide = Math.round(scrollPosition / slideWidth);

        if (newActiveSlide !== activeSlide) {
          setActiveSlide(newActiveSlide);
        }
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSlide, learningProjects.length]);

  // Function to handle dot navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.scrollWidth / learningProjects.length;
      carouselRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }

    // Reset autoplay timer when manually navigating
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);

      if (isVisible) {
        autoplayRef.current = setInterval(() => {
          const nextSlide = (activeSlide + 1) % learningProjects.length;
          setActiveSlide(nextSlide);

          const slideWidth = carouselRef.current.scrollWidth / learningProjects.length;
          carouselRef.current.scrollTo({
            left: nextSlide * slideWidth,
            behavior: 'smooth'
          });
        }, 3000);
      }
    }
  };

  return (
    <div className="items-start mt-16 md:mt-24 py-8 md:py-16 c-space" ref={sectionRef}>
      <h2 className="text-heading text-center md:text-left">Learning Lab</h2>
      <p className="max-w-2xl mt-3 text-base md:text-lg text-white/70 text-center md:text-left mx-auto md:mx-0">
        Explore my journey of continuous learning through these projects, each representing key skills and techniques I've mastered along the way.
      </p>

      {/* Mobile Display: Auto Sliding Carousel (only slides when visible) */}
      <div className="md:hidden w-full mt-8">
        <div
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          ref={carouselRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {learningProjects.map((project) => (
            <div key={project.id} className="px-2 first:pl-4 last:pr-4">
              <ProjectCard {...project} isMobile={true} />
            </div>
          ))}
        </div>

        {/* Pagination dots with visibility indicator */}
        <div className="flex justify-center mt-6">
          {learningProjects.map((_, index) => (
            <PaginationDot
              key={index}
              active={activeSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Desktop Display: Marquee */}
      <div className="hidden md:block relative w-full mt-12 overflow-hidden">
        {secondRowProjects.length > 0 && (
          <>
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRowProjects.map((project) => (
                <div key={project.id} className="mx-3">
                  <ProjectCard {...project} isMobile={false} />
                </div>
              ))}
            </Marquee>
            <div className="my-6"></div>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {secondRowProjects.map((project) => (
                <div key={project.id} className="mx-3">
                  <ProjectCard {...project} isMobile={false} />
                </div>
              ))}
            </Marquee>
          </>
        )}

        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}