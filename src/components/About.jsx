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

        <p className="text-xl mt-20">
          I developed my skills through building numerous projects with various
          front-end technologies. I have a HUGE passion for learning and tend to
          spend a lot of my free time learning new skills, or improving the
          skills I already have. Self-improvement has always been very important
          for me.
        </p>

        <br />

        <p className="text-xl">
          I am really confident in my problem solving skills, as they have
          allowed me to work through many challenging projects. A key philosophy
          that I follow is: breaking down complex problems into smaller, more
          manageable ones, is the key to success, both in coding and in life.
        </p>
      </div>
    </div>
  );
};

export default About;
