import React from 'react';
import theJournal from '../assets/portfolio/the-journal.png';
import jitsuCavern from '../assets/portfolio/jitsuCavern.png';
import shoppingCart from '../assets/portfolio/shopping-cart.png';
import eventPlanningPage from '../assets/portfolio/event-page.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: shoppingCart,
      href: 'https://planetrandomitems.netlify.app/',
      href2: 'https://github.com/KrOhDee/shopping-cart',
      tooltip: 'E-commerce Site',
      desc: "React e-commerce site with shopping cart. Browse, add to cart, remove from cart, view total. You can also click on an item to get a description, and it's rating. From there you can add it to the cart or close the page, and keep browsing.  Pulls items from API, styled with CSS.",
      desc2: 'React, Redux, CSS, Bootstrap',
    },
    {
      id: 2,
      src: jitsuCavern,
      href: 'https://jiu-jitsu-library-41b02.web.app/',
      href2: 'https://github.com/KrOhDee/jiu-jitsu-video-library/',
      tooltip: 'Jiu-Jitsu Video Site',
      desc: 'Web application that allows users to search for and watch Jiu-Jitsu related videos from YouTube. Users can also sign up or sign in to their account and save videos to their playlist across sessions.',
      desc2: 'React, Firebase, Jest, CSS',
    },
    {
      id: 3,
      src: theJournal,
      href: 'https://the-journal.herokuapp.com/',
      href2: 'https://github.com/KrOhDee/the-journal',
      tooltip: 'Book List',
      desc: 'A book list that allows users to add, view, and delete books from a MongoDB database using CRUD operations. Users can also search for books by title. (Took the site down temporarily.)',
      desc2: 'NodeJS, Express, MongoDB, JavaScript, EJS, Bootstrap',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-orange-500">
            Portfolio
          </p>
          <p className="py-6">
            Here are some of my projects. Hover over them for a short
            description!{' '}
            <a
              className="text-xs text-orange-500"
              target="_blank"
              href="https://onedisplayplace.netlify.app/"
            >
              (More projects)
            </a>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href2, desc, desc2 }) => (
            <div
              key={id}
              className="border border-double border-2 border-orange-500 rounded-lg portfolio-item p-3"
            >
              <p>{desc2}</p>
              <div className="image-wrapper">
                <a target="_blank" href={href}>
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                </a>
                <div className="overlay absolute top-0 left-0 w-full h-full opacity-0 transition duration-200 ease-in-out flex justify-center items-center">
                  <p className="desc">{desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a target="_blank" href={href}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Site
                  </button>
                </a>
                <a target="_blank" href={href2}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
