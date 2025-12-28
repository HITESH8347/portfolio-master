import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, BookOpen } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { mockData, timelineItems } from "../personalData";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto pt-32 px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-10">
        <motion.div
          className="col-span-2 rounded-3xl p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-[26rem] mx-auto rounded-[999px] overflow-hidden">
            <div className="w-full h-full rounded-[999px] overflow-hidden bg-black">
              <img
                src={mockData.personal.profileImage2}
                alt={mockData.personal.name}
                className="w-full h-full object-cover object-top rounded-[999px]"
              />
            </div>

            {/* Floating Icons */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-gray-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Code className="text-purple-400" size={20} />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-gray-700"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Palette className="text-blue-400" size={20} />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content Box */}
        <motion.div
          className="col-span-3 bg-[#161616] rounded-3xl p-6 sm:p-8 text-white w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            I’m {mockData.personal.name}
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {mockData.personal.title} {mockData.personal.description2}
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            {mockData.personal.description3}
          </p>
          <button
            onClick={() => (window.location.href = "#contact")}
            className="border border-gray-600 text-white px-8 py-3 rounded-full bg-transparent transition-all duration-300 flex items-center space-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 hover:text-white hover:shadow-lg"
          >
            <span>Get In touch</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Experience & Education Section */}
      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        {/* EXPERIENCE CARD */}
        <div className="relative bg-[#161616] p-8 sm:p-10 rounded-3xl border border-white/10 min-h-[620px] max-h-[620px]">

          <h3 className="text-white text-3xl font-bold mb-10">
            Experience
          </h3>

          {/* Timeline line */}
          <div className="absolute left-[52px] top-28 bottom-10 w-px bg-white/10" />

          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative flex gap-6 items-start mb-10">

              {/* Icon */}
              <div className="min-w-[56px] min-h-[56px] bg-orange-500/10 rounded-xl flex items-center justify-center z-10">
                <BookOpen className="text-orange-500" size={24} />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-gray-400 mb-1">
                  {item.year}
                </p>

                <h4 className="text-lg font-semibold text-white leading-snug">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-400 mb-3">
                  {item.subtitle}
                </p>

                {/* Achievements (IMPORTANT) */}
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Built scalable Node.js APIs</li>
                  <li>• Integrated payment gateways & Redis</li>
                  <li>• Optimized DB queries for performance</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* TECH SKILLS CARD */}
        <div className="bg-[#161616] p-8 sm:p-10 rounded-3xl border border-white/10 min-h-[620px] max-h-[620px]">

          <h3 className="text-white text-3xl font-bold mb-10">
            Tech Skills
          </h3>

          {/* Scrollable Skills */}
          <div className="space-y-6 overflow-y-auto pr-2 max-h-[480px]
      scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

            {mockData.skills.map((item, idx) => (
              <div key={idx}>

                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300 font-medium">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.level}%
                  </span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                  />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>


    </section>
  );
};
