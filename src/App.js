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
  return (
    <div>
      <NavBar setActiveComponent={setActiveComponent} />
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
