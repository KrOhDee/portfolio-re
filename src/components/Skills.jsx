import React from 'react';

import nextjs from '../assets/nextjs.svg';
import mongodb from '../assets/mongodb.svg';
import typescript from '../assets/typescript.svg';
import reactImage from '../assets/react.svg';
import bootstrap from '../assets/bootstrap.svg';
import sass from '../assets/sass.svg';
import tailwind from '../assets/tailwind.svg';
import nodejs from '../assets/nodejs.svg';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: nextjs,
      title: 'NextJS',
      style: 'shadow-white',
    },
    {
      id: 2,
      src: mongodb,
      title: 'MongoDB',
      style: 'shadow-green-400',
    },
    {
      id: 3,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-sky-400',
    },
    {
      id: 5,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-700',
    },
    {
      id: 6,
      src: nodejs,
      title: 'NodeJS',
      style: 'shadow-green-900',
    },
    {
      id: 7,
      src: sass,
      title: 'Sass',
      style: 'shadow-pink-400',
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-blue-400',
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-white">
        <p className="text-4xl font-bold border-b-4 border-orange-500 p-3 inline">
          Skills/Technologies
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
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
