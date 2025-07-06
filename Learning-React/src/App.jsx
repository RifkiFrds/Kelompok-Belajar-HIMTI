import React from 'react';
import Profile from './components/Profile/Profile'; 
import Header from './components/Header/Header';

import './App.css'; 
import { faGithub, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import fotoKu from './assets/rifki-formal.png'; 


function App() {
  const socials = [
    { icon: faInstagram, link: 'https://instagram.com/frdski_' },
    { icon: faGithub, link: 'https://github.com/RifkiFrds' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/muhamad-rifkifrds/' },
    { icon: faFacebook, link: 'https://facebook.com/rifkibkbf420'}
  ];

  return (
    <div className="app-container">
      <Header title={"The Interface is Me"} />
    
      <Profile
        name="Muhamad Rifki Firdaus"
        title="Tech Enthusiast"
        description="I'm a Front-End Developer and Student at Universitas Muhammadiyah Tangerang."
        image={fotoKu}
        socials={socials}
        unduh="Let’s Collaborate – View My CV"
      />
    </div>
  );
}

export default App;
