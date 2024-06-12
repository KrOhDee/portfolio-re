import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import { useState } from 'react';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const componentBgColors = {
    home: 'bg-gradient-to-t from-black via-black to-gray-800',
    about: 'bg-gradient-to-l from-gray-800 to-black',
    portfolio: 'bg-gradient-to-t from-black via-black to-gray-800',
    skills: 'bg-gradient-to-l from-gray-800 to-black',
    contact: 'bg-gradient-to-r from-black via-black to-gray-800',
  };

  return (
    <div>
      <NavBar
        setActiveComponent={setActiveComponent}
        bgColor={componentBgColors[activeComponent]}
      />
      {activeComponent === 'home' && <Home />}
      {activeComponent === 'about' && <About />}
      {activeComponent === 'portfolio' && <Portfolio />}
      {activeComponent === 'skills' && <Skills />}
      {activeComponent === 'contact' && <Contact />}

      <SocialLinks />
    </div>
  );
}

export default App;
