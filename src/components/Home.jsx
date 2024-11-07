import React from 'react';
import HeroImage from '../assets/icon.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  function add(a, b) {
    return a + b;
  }
  console.log(add(3, 5), 'jel');

  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='xl:max-w-[1140px] mx-auto flex flex-col items-center justify-center h-full md:flex-row px-8'>
        <div className='flex flex-col justify-center h-full mr-8 sm:gap-0 xs:gap-4'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            Software Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have experience with technologies like{' '}
            <span className='font-bold text-orange-500'>C# (.NET)</span>,{' '}
            <span className='font-bold text-orange-500'>JavaScript</span>,{' '}
            <span className='font-bold text-orange-500'>React</span>,{' '}
            <span className='font-bold text-orange-500'>MySQL</span>, and more!
          </p>

          <div>
            <a
              href='/Aleman_Luis_Dev_Resume.pdf'
              download
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-300 to-orange-400 cursor-pointer'
            >
              Download Resume
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </a>
          </div>
        </div>

        <div className='hidden lg:block'>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
