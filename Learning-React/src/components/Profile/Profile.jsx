import { useState, useRef, useEffect } from 'react'; 
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faCheck, faDownload } from '@fortawesome/free-solid-svg-icons'

const Profile = ({ name, title, description, image, socials, unduh }) => {
  const themes = ['aurora', 'neon', 'frosted'];
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = themes[themeIndex];
  
  // useRef Untuk kartu
  const cardRef = useRef(null);
  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };
  
  //FontAwesomeIcon
  const [shareIcon, setShareIcon] = useState(faShare);

  // Logika untuk efek tilt
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25; 
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

  // Logika Share
  const handleShare = async (event) => {
    event.preventDefault();
    
    const shareData = {
      title: `Profil ${name}`,
      text: `Lihat profil ${name}, seorang ${title}.`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Konten berhasil dibagikan!');
      } catch (err) {
        console.error('Error saat berbagi: ', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        
        setShareIcon(faCheck);
        setTimeout(() => {
          setShareIcon(faShare);
        }, 2000);
        
      } catch (err) {
        console.error('Gagal menyalin: ', err);
        alert('Gagal menyalin link.');
      }
    }
  };

  return (
    <div className="card-container"> 
      <div className={`glass-card ${currentTheme}`} ref={cardRef}>

        <a href="#" className="share-icon" onClick={handleShare} aria-label="Copy Profile Link">
           <FontAwesomeIcon icon={shareIcon} />
        </a>

        <button className="mode-toggle" onClick={toggleTheme}>
          {currentTheme === 'aurora' && '🔮'}
          {currentTheme === 'neon' && '💡'}
          {currentTheme === 'frosted' && '🧊'}
        </button>

        <div className="glass-img-wrapper">
          <img src={image} alt={name} className="profile-img" />
        </div>

        <div className="card-header">
        <h2>{name}</h2>
        <p className="title">{title}</p>
        </div>

        <p className="description">{description}</p>

        <a href="/CV-Muhamad-Rifki-Firdaus.pdf" download className="btn-download">
          <FontAwesomeIcon icon={faDownload} />  {unduh}
        </a>

         <div className="social-icons">
          {socials.map((social, index) => (
            <a href={social.link} key={index} target="_blank" rel="noreferrer">
              <i><FontAwesomeIcon icon={social.icon} /></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;