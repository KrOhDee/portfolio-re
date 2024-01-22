import React from 'react';

import nextjs from '../assets/nextjs.svg';
import mongodb from '../assets/mongodb.svg';
import typescript from '../assets/typescript.svg';
import reactImage from '../assets/react.svg';
import bootstrap from '../assets/bootstrap.svg';
import sass from '../assets/sass.svg';
import python from '../assets/python.svg';
import nodejs from '../assets/nodejs.svg';
import mysql from '../assets/mysql.svg';
import js from '../assets/js.svg';
import tailwind from '../assets/tailwind.svg';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: nextjs,
      title: 'NextJS',
      style: 'bg-gradient-to-r from-amber-600 to-rose-500',
    },
    {
      id: 2,
      src: mongodb,
      title: 'MongoDB',
      style: 'bg-gradient-to-r from-green-800 to-lime-600',
    },
    {
      id: 3,
      src: typescript,
      title: 'TypeScript',
      style: 'bg-gradient-to-r from-indigo-900 to-blue-800',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'bg-gradient-to-r from-sky-400 to-sky-900',
    },
    {
      id: 5,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'bg-gradient-to-r from-purple-300 to-purple-900',
    },
    {
      id: 6,
      src: nodejs,
      title: 'NodeJS',
      style: 'bg-gradient-to-r from-green-700 to-green-900',
    },
    {
      id: 7,
      src: sass,
      title: 'Sass',
      style: 'bg-gradient-to-r from-blue-800 to-pink-800',
    },
    {
      id: 8,
      src: python,
      title: 'Python',
      style: 'bg-gradient-to-r from-blue-800 to-yellow-400',
    },
    {
      id: 9,
      src: mysql,
      title: 'MySQL',
      style: 'bg-gradient-to-r from-black to-blue-700',
    },
    {
      id: 10,
      src: js,
      title: 'JavaScript',
      style: 'bg-gradient-to-r from-yellow-300 to-yellow-900',
    },
    {
      id: 11,
      src: tailwind,
      title: 'TailwindCSS',
      style: 'bg-gradient-to-r from-teal-600 to-teal-900',
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-[1500px] lg:pt-14 xs:pt-12 sm:pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-white">
        <p className="text-4xl font-bold border-b-4 border-orange-500 p-3 inline">
          Skills/Technologies
        </p>

        <div className="w-full overflow-auto max-h-[500px] grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
