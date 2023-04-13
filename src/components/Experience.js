import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}
      >
        <h3 className="capitalize font-semibold text-2xl sm:text-xl xs:text-lg">
          {position}
          <p className="capitalize text-primary dark:text-primaryDark">{company}</p>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">{time}</span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-[2.18rem] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light/75 
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            company="Freelance"
            time="August 2022 - Present"
            work="Developed and maintained responsive Web applications for
            multiple clients, ranging from small businesses to large
            enterprises, also collaborated with clients to identify project requirements and
            translate them into technical specifications and design
            documents, I provided ongoing maintenance and updates to ensure websites
            remain current and functional.
            "
          />
          <Details
            position="Frontend Developer"
            company="G-tech"
            time="April 2021 - August 2022"
            work="Developing new features for existing applications, 
            Designing and implementing user interfaces using React.js, 
            Writing clean, maintainable, and efficient code, also troubleshooting and debugging issues in applications and
            collaborating with cross-functional teams, including designers,
            product managers, and QA engineers
            "
          />
          <Details
            position="CS Engineer"
            company="Raya Integration"
            time="March 2020 - January 2022"
            work="Responsible for software and hardware issues with the ATMs
            and handling various banks monitors including solving,
            handling and reporting the problems with the ATMs, also insatlled new ATMs for various banks, and explained diagnostic
            findings to customers and outlined repair or service options, I also generated reports for customer service issues and repair
            records.
            "
          />
          <Details
            position="Android Developer"
            company="BlaBla Connect"
            time="March 2020 - January 2022"
            work="Designed user interfaces that engaged multiple senses and
            produced immersive experiences, Devised documentation for each app, detailing operation
            aspects, functions, capabilities and features, also tested applications prior to final review to verify issue
            resolution, I also managed aspects of Android app lifecycle from research and
            planning through deployment and post-launch support.
            
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
