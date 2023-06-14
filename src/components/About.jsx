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
          Hi there! I'm Luis, a software engineer with a huge passion for tech.
          In my free time, you can usually find me working out, playing video
          games, bothering my cats, or language learning. I spend a lot of time
          learning new things, as I feel it not only helps me grow as a person,
          but also fuels my creativity and problem-solving skills as a
          developer. I am currently enrolled in a Bachelor of Science in
          Software Engineering program, and I am expected to graduate in early
          2024.
        </p>
      </div>
    </div>
  );
};

export default About;
