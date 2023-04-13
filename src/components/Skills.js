import Image from 'next/image';
import React from 'react';
import HTML from '../../public/images/Skills/html.png';
import CSS from '../../public/images/Skills/css.png';
import Js from '../../public/images/Skills/js.png';
import REACT from '../../public/images/Skills/react.png';
import Redux from '../../public/images/Skills/redux.png';
import Tailwind from '../../public/images/Skills/tailwind.png';
import SASS from '../../public/images/Skills/sass.png';
import Nodejs from '../../public/images/Skills/nodejs.png';
import Github from '../../public/images/Skills/github.png';

const Skill = ({ name, img, className = '' }) => {
  return (
    <div className="shadow-md w-16 h-16 rounded-full bg-white flex items-center 
    justify-center cursor-pointer hover:text 
    md:w-10 md:h-10 lg:w-12 lg:h-12 sm:w-8 sm:h-8 xs:w-4 xs:h-4
    ">
      <Image
        className={`w-10 h-10 md:w-6 md:h-6 lg:w-8 lg:h-8 sm:w-5 sm:h-5 xs:w-[10px] xs:h-[10px] ${className}`}
        src={img}
        alt={name}
        title={name}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center lg:text-7xl sm:text-6xl xs:text-4xl">Skills</h2>
      <div className="w-full h-auto relative flex flex-wrap items-center justify-center mt-10 gap-8 md:gap-2 lg:gap-3 sm:gap-1.5 xs:gap-2">
        <h3 className="text-2xl font-semibold md:text-lg sm:text-base xs:text-sm">Teck Stack |</h3>
        <Skill name="HTML" img={HTML} />
        <Skill name="CSS" img={CSS} />
        <Skill name="Js" img={Js} />
        <Skill name="React" img={REACT} />
        <Skill name="redux" img={Redux} />
        <Skill name="Tailwind" img={Tailwind} className="h-6 md:h-[11px] lg:h-[15px] sm:h-[11px] xs:h-[6px]" />
        <Skill name="Sass" img={SASS} />
        <Skill name="Nodejs" img={Nodejs} />
        <Skill name="git" img={Github} />
      </div>
    </>
  );
};

export default Skills;
