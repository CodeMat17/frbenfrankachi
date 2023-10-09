'use client'

import { motion } from "framer-motion";
import PageTitle from "./PageTitle";

const animateYear = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const animateText = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  },
};


const eduEpx = [
  {
    id: 1,
    year: 2023,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "Godfrey Okoye University, Enugu.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
  {
    id: 2,
    year: 2022,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "University of Santa Solona",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
  {
    id: 3,
    year: 2021,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "University of Santa Solona",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
  {
    id: 4,
    year: 2020,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "University of Santa Solona",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
  {
    id: 5,
    year: 2019,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "University of Santa Solona",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
];

const Education = () => {
  return (
    <div id='experience' className='px-4 py-12'>
      <PageTitle title='Experience & Education' />

      <motion.div className='pt-8 max-w-lg mx-auto flex flex-col gap-4'>
        {eduEpx.map((epx) => (
          <motion.div
            key={epx.id}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ staggerChildren: 0.5 }}
            className='w-full flex gap-8'>
            <motion.div variants={animateYear} className='w-[10%] font-medium text-xl text-yellow-600'>
              {epx.year}
            </motion.div>
            <motion.div>
              <motion.h2 variants={animateText} className='uppercase font-medium text-xl text-[#521d4d]'>
                {epx.title}{" "}
              </motion.h2>
              <motion.h3 variants={animateText} className='text-lg'>{epx.institution}</motion.h3>
              <motion.p variants={animateText} className='pt-2'>{epx.desc}</motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
