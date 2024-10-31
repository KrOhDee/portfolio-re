import React from 'react';
import theJournal from '../assets/portfolio/the-journal.png';
import jitsuCavern from '../assets/portfolio/jitsuCavern.png';
import shoppingCart from '../assets/portfolio/shopping-cart.png';
import eventPlanningPage from '../assets/portfolio/event-page.png';
import dash from '../assets/portfolio/img-dash.png';
import fixFleet from '../assets/portfolio/fix-fleet.png';
import map from '../assets/portfolio/img-ang.png';
import fres from '../assets/portfolio/img-fres.png';
import weather from '../assets/portfolio/weather-app.png';
import mobile from '../assets/portfolio/mobile-app.png';
import customer from '../assets/portfolio/customer-schedule.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fixFleet,
      href: 'https://ticket-app-bice-six.vercel.app/',
      href2: 'https://github.com/KrOhDee/ticket-app/',
      tooltip: 'IT Ticketing Web App',
      // desc: 'Full-stack IT ticketing application with custom built endpoints that integrate dynamic API routing, enabling ticket creation, updates, and deletions directly within the application interface.',
      desc2:
        'IT Ticketing Web App - Next.js, React, MongoDB, TailwindCSS, JavaScript',
    },
    {
      id: 2,
      src: shoppingCart,
      href: 'https://planetrandomitems.netlify.app/',
      href2: 'https://github.com/KrOhDee/shopping-cart',
      tooltip: 'E-commerce Web App',
      // desc: "React e-commerce web app with shopping cart. Browse, add to cart, remove from cart, view total. You can also click on an item to get a description, and it's rating. Pulls items from API, styled with CSS.",
      desc2:
        'E-commerce Web App - React, Zustand, FakeStore API, CSS, Bootstrap',
    },
    {
      id: 3,
      src: mobile,
      href: 'none',
      href2: 'https://gitlab.com/KrOhDee/c971',
      tooltip: 'Academic Scheduler',
      desc2: 'Academic Scheduling Mobile App - C#, .NET Maui, SQLite',
    },
    {
      id: 4,
      src: jitsuCavern,
      href: 'https://jiu-jitsu-library-41b02.web.app/',
      href2: 'https://github.com/KrOhDee/jiu-jitsu-video-library/',
      tooltip: 'Jiu-Jitsu Video Streaming Web App',
      // desc: 'Web application that allows users to search for and watch Jiu-Jitsu related videos from YouTube. Users can also sign up or sign in to their account and save videos to their playlist across sessions.',
      desc2:
        'Jiu-Jitsu Video Streaming Web App - React, Firebase, YouTube API, Jest, CSS',
    },
    {
      id: 5,
      src: theJournal,
      href: 'none',
      href2: 'https://github.com/KrOhDee/the-journal',
      tooltip: 'Book List',
      // desc: 'A book list that allows users to add, view, and delete books from a MongoDB database using CRUD operations. Users can also search for books by title.',
      desc2: 'Book List - NodeJS, Express, MongoDB, JavaScript, EJS, Bootstrap',
    },
    {
      id: 6,
      src: fres,
      href: 'https://fresnoscafe.netlify.app/',
      href2: 'https://github.com/KrOhDee/a-landing-page',
      tooltip: 'Landing Page',
      // desc: 'Landing page featuring a minimalistic and responsive design specifically for a cafe. Visually appealing and adapts seamlessly across various screen sizes.',
      desc2: 'Landing Page - HTML, CSS',
    },
    {
      id: 7,
      src: customer,
      href: 'none',
      href2: 'none',
      tooltip: 'Client Appointment Scheduler',
      desc2:
        'Client Appointment Scheduling Desktop App - C#, Windows Forms (WinForms), MySQL',
    },
    {
      id: 8,
      src: weather,
      href: 'https://simpleweatherwatch.netlify.app/',
      href2: 'https://github.com/KrOhDee/weather-app',
      tooltip: 'Weather App',
      // desc: 'Weather application built using CSS and JavaScript. Utilizes the OpenWeatherMap API to provide real-time weather information.',
      desc2: 'Weather App - HTML, CSS, JavaScript, OpenWeatherApp API',
    },
    {
      id: 9,
      src: map,
      href: 'none',
      href2: 'https://github.com/KrOhDee/ctmap',
      tooltip: 'Interactive SVG Map',
      // desc: 'Interactive SVG map built with TypeScript, Angular, and the GeoNames API. When users click on a country, it highlights in red and displays relevant information about the selected country.',
      desc2: 'Interactive SVG Map - TypeScript, Angular, CSS, Geonames API',
    },
    {
      id: 10,
      src: eventPlanningPage,
      href: 'https://swanevents.netlify.app/',
      href2: 'https://github.com/KrOhDee/rainfocus',
      tooltip: 'Event Planning Site',
      // desc: "Event planning page built with React, composed of numerous components. It's designed to be fully responsive.",
      desc2: 'Event Planning Site - React, SCSS, JavaScript',
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen place-content-center'
    >
      <div className='max-w-screen-lg mx-auto h-5/6 flex flex-col px-2'>
        <div className='mb-6'>
          <p className='text-3xl sm:text-5xl font-bold border-b-4 border-orange-500 xs:mt-12 mb-4'>
            Portfolio
          </p>
          <p className='text-sm sm:text-xl md:text-xl'>
            Here are some of my projects. Hover over them for a short
            description!{' '}
          </p>
        </div>

        <div className='overflow-auto grid sm:grid-cols-2 gap-8 xs:gap-3'>
          {portfolios.map(({ id, src, href, href2, desc2 }) => (
            <div
              key={id}
              className='border border-double border-2 border-orange-500 rounded-lg portfolio-item px-2 py-3 text-center'
            >
              {/* <p className='md:text-lg'>{desc2}</p> */}
              <div className='image-wrapper'>
                <a target='_blank' href={href}>
                  <img
                    src={src}
                    alt='Project home page'
                    className='rounded-md duration-200 hover:scale-105 h-[200px] mx-auto'
                  />
                </a>
                <div className='overlay rounded-md absolute top-0 left-0 opacity-0 transition duration-200 ease-in-out flex justify-center items-center text-center'>
                  <p className='desc xs:text-xl text-lg w-4/6'>{desc2}</p>
                </div>
              </div>
              <div className='flex justify-center items-center md:text-xl'>
                {href !== 'none' && (
                  <a target='_blank' href={href}>
                    <button className='px-6 py-3 m-4 duration-200 hover:scale-105'>
                      Site
                    </button>
                  </a>
                )}
                {href2 !== 'none' && (
                  <a target='_blank' href={href}>
                    <button className='px-6 py-3 m-4 duration-200 hover:scale-105'>
                      Code
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
