"use client";

import { motion } from "framer-motion";
import PageTitle from "./PageTitle";

const textAnimation = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.8 },
  },
};

const about = [
  {
    id: 1,
    text: "Hic textus phantasticus est, tamen legebatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias a officiis voluptatem quibusdam magni suscipit numquam vero fuga asperiores?",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit architecto perspiciatis, voluptatum expedita maiores repudiandae doloremque blanditiis! Recusandae id quod, eveniet eum qui nam distinctio error illo mollitia, ipsum suscipit.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit architecto perspiciatis, voluptatum expedita maiores repudiandae doloremque blanditiis! Recusandae id quod, eveniet eum qui nam distinctio error illo mollitia, ipsum suscipit.",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit architecto perspiciatis, voluptatum expedita maiores repudiandae doloremque blanditiis! Recusandae id quod, eveniet eum qui nam distinctio error illo mollitia, ipsum suscipit.",
  },
];

const AboutMe = () => {
  return (
    <div id='about' className='bg-purple-50  text-[#521d4d] px-4 py-12'>
      <PageTitle title=' ABOUT ME' />

      <motion.div className='text-lg pt-8 max-w-lg mx-auto flex flex-col gap-4'>
        {about.map((item) => (
          <motion.div
            key={item.id}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ staggerChildren: 0.8 }}>
            <motion.p variants={textAnimation}>{item.text}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutMe;
