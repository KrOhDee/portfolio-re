import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-orange-500">
            About Me
          </p>
        </div>

        <p className="about-me mt-15">
          Some of my hobbies include: going to the gym, training martial arts,
          language learning, gaming, and coding of course! I have solidified my
          coding skills through building numerous projects. I am highly
          proficient with{' '}
          <span className="font-bold text-orange-500">React</span> and{' '}
          <span className="font-bold text-orange-500">TypeScript</span>. I have
          experience with{' '}
          <span className="font-bold text-orange-500">React hooks</span>,{' '}
          <span className="font-bold text-orange-500">Redux</span>, and{' '}
          <span className="font-bold text-orange-500">React Router</span>. I can
          create well-structured semantic{' '}
          <span className="font-bold text-orange-500">HTML</span> documents. I
          have strong <span className="font-bold text-orange-500">CSS</span>{' '}
          skills and am proficient with Grid, Flexbox,{' '}
          <span className="font-bold text-orange-500">responsive design</span>,{' '}
          <span className="font-bold text-orange-500">SCSS</span>,{' '}
          <span className="font-bold text-orange-500">Bootstrap</span>, and{' '}
          <span className="font-bold text-orange-500">Tailwind</span>. I have
          also used <span className="font-bold text-orange-500">Jest</span> for
          testing in some of my projects. I began my learning on the front-end,
          and that is where I have spent the most time. However, I have also
          learned <span className="font-bold text-orange-500">NodeJS</span>,{' '}
          <span className="font-bold text-orange-500">MongoDB</span>, and{' '}
          <span className="font-bold text-orange-500">Express</span>. Overall, I
          have a solid understanding of web development, and I am improving
          every day.
          <br />
        </p>

        <br />

        <p className="about-me">
          As for my non-technical skills/traits, I would like to start with my{' '}
          <span className="font-bold text-orange-500">
            problem solving skills
          </span>
          , which have allowed me to work through challenging projects. My go-to
          strategy is to always break down big problems into smaller ones, and
          go from there. I also have{' '}
          <span className="font-bold text-orange-500">
            strong communication
          </span>{' '}
          skills, a keen{' '}
          <span className="font-bold text-orange-500">eye for detail</span>, and
          great
          <span className="font-bold text-orange-500"> time management </span>
          and{' '}
          <span className="font-bold text-orange-500">
            organizational skills
          </span>
          . However, the most important trait I posses is an{' '}
          <span className="font-bold text-orange-500">
            eagerness to learn and grow
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
