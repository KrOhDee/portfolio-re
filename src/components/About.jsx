import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='xs:text-3xl md:text-5xl font-bold border-b-4 border-orange-500'>
            About Me
          </p>
        </div>

        <p className='about-me mt-15 lg:text-xl md:text-2xl'>
          Hi there! My name is Luis and I have a huge passion for tech,
          particularly the web development and data side of things. In my free
          time you can usually find me playing video games, bothering my cats,
          playing guitar, or language learning. I spend a lot of time learning
          new things, as I feel it not only helps me grow as a person, but also
          fuels my creativity and problem-solving skills.
        </p>

        <div className='pb-8 mt-9'>
          <p className='xs:text-3xl md:text-5xl font-bold border-b-4 border-orange-500'>
            Education
          </p>
        </div>
        <p className='about-me mt-15 lg:text-xl md:text-2xl'>
          Jan 2024 ~ B.S. Software Engineering, Western Governors University
          <br />
          Certifications: AWS Certified Cloud Practitioner, ITIL v4 Foundation,
          CompTIA Project+
        </p>
      </div>
    </div>
  );
};

export default About;
