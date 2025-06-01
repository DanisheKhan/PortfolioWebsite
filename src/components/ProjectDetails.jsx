import { motion } from "framer-motion";
import IconMap from "./IconMap";
import { useEffect } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto px-2 sm:px-4 py-4 sm:py-6 bg-black/60 backdrop-blur-md">
      <motion.div
        className="relative w-full max-w-4xl mx-auto rounded-xl shadow-2xl bg-gradient-to-br from-navy/95 to-midnight/95 border border-white/10 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-full top-2 right-2 sm:top-3 sm:right-3 bg-black/50 hover:bg-white/20 transition-all duration-300"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="Close" />
        </button>

        <div className="flex flex-col">
          <div className="w-full pt-2 sm:pt-3">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain max-h-[200px] md:max-h-64 lg:max-h-72"
            />
          </div>

          <div className="w-full p-4 sm:p-6 flex flex-col">
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h2>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-300 flex-grow mb-4 sm:mb-5">
              <p>{description}</p>
              {subDescription.map((subDesc, index) => (
                <p key={index}>{subDesc}</p>
              ))}
            </div>

            <div className="mt-auto">
              <h3 className="text-xs sm:text-sm font-semibold text-white/70 mb-2">TECHNOLOGIES</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                {tags.map((tag) => {
                  const IconComponent = IconMap[tag.icon];
                  return IconComponent ? (
                    <div
                      key={tag.id}
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full hover:bg-white/10 transition-all"
                      title={tag.name}
                    >
                      <IconComponent className="text-sm sm:text-lg" />
                      <span className="text-[10px] sm:text-xs">{tag.name}</span>
                    </div>
                  ) : null;
                })}
              </div>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300"
              >
                View Project
                <img src="assets/arrow-up.svg" className="size-3 sm:size-4" alt="Arrow" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;