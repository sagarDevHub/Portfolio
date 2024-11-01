import React from "react";
import profile from "../assets/profile.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVarients = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profile}
              alt="Sagar Gulla"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start mt-10"
            initial="hidden"
            animate="visible"
            variants={containerVarients}
          >
            <motion.h2
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              variants={childVarients}
            >
              Sagar Gulla
            </motion.h2>

            <motion.span
              variants={childVarients}
              className="bg-gradient-to-r from-green-300 to-green-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>

            <motion.p
              variants={childVarients}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={childVarients}
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-green-300 rounded-full p-4 text-sm text-black mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
