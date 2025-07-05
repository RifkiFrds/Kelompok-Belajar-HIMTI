import React from 'react';
import Profile from './components/Profile'; 
import './App.css'; 
import fotoKu from './assets/rifki-formal.png'; 

function App() {
  const socials = [
    { icon: 'fab fa-instagram', link: 'https://instagram.com/frdski_' },
    { icon: 'fab fa-github', link: 'https://github.com/RifkiFrds' },
    { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/muhamad-rifkifrds/' }
  ];

  return (
    <div>
      <Profile
        name="Muhamad Rifki Firdaus"
        title="Tech Entusiats"
        description="A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma."
        image={fotoKu}
        socials={socials}
        unduh="Dwonload CV"
      />
    </div>
  );
}

export default App;
