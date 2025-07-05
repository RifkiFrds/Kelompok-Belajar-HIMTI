import { useState, useRef, useEffect } from 'react'; // Impor hook baru
import '../Profile.css';

const Profile = ({ name, title, description, image, socials, unduh }) => {
  const themes = ['aurora', 'neon', 'frosted'];
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = themes[themeIndex];
  
  // Ref untuk kartu
  const cardRef = useRef(null);

  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  // Logika untuk efek tilt
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25; // Makin kecil pembagi, makin dramatis
      const y = (clientY - top - height / 2) / 25;
      card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    };

    const container = card.parentElement;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    // Tambahkan div wrapper ini
    <div className="card-container"> 
      <div className={`glass-card ${currentTheme}`} ref={cardRef}>
        <button className="mode-toggle" onClick={toggleTheme}>
          {currentTheme === 'aurora' && '🔮'}
          {currentTheme === 'neon' && '💡'}
          {currentTheme === 'frosted' && '🧊'}
        </button>

        <div className="glass-img-wrapper">
          <img src={image} alt={name} className="profile-img" />
        </div>

        <h2>{name}</h2>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        
        <div className="social-icons">
          {socials.map((social, index) => (
            <a href={social.link} key={index} target="_blank" rel="noreferrer">
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        <a href="/CV-Muhamad-Rifki-Firdaus.pdf" download className="btn-download">
          <i className="fas fa-download"></i> {unduh}
        </a>
      </div>
    </div>
  );
};

export default Profile;