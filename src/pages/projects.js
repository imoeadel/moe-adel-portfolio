import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Courses from '../../public/images/projects/courses.png';
import Food from '../../public/images/projects/food.png';
import Store from '../../public/images/projects/store.png';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid 
    border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale: 1.05}}
        transition={{duration: 0.2}}
        priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-start">
          <Link
            href={link}
            target="_blank"
            className="ml-2 rounded-lg text-light bg-dark p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light
            sm:px-2 sm:text-base md:text-lg md:px-3 xs:text-sm"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid 
    border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4">
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale: 1.05}}
        transition={{duration: 0.2}}
        priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center flex-row justify-center">
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg text-light bg-dark p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light 
            sm:px-2 sm:text-base md:text-lg md:px-3 xs:text-sm"
          >
            Visit Project
          </Link>
          </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>MoeAdel | Projects Page</title>
        <meta name="description" content="any" />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeaturedProject
                title="CoursePlus"
                summary="Introducing CoursePlus, a cutting-edge platform built using React that offers an array of courses 
                for individuals looking to upskill and advance their knowledge. The website is designed with a sleek, modern 
                interface and user-friendly navigation to make it easy for users to find the course they need. I used the Atomic 
                Design Pattern to make it reusable and also to use some components of my previous work. I used redux in the 
                application to manage the states of the project. I also used axios to fetch the data from the API which is 
                created with php."
                link="https://academy.ynphotos.net/"
                img={Courses}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Moe Headphones"
                link="https://ecommerce-moe.vercel.app/"
                img={Store}
                type="E-Commerce"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                title="Food App"
                link="https://foodapp-moe.vercel.app/"
                img={Food}
                type="E-Commerce"
              />
            </div>
            
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
