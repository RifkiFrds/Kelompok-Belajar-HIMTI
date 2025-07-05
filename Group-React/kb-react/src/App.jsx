import Profile from './components/Profile'
import Header from './components/Header'
import fotoKu from './assets/rifki-formal.png'

import './App.css'

function App() {
  return (
    <>
      <Profile judul="Rifki" teks="Hallo ini rifki" />
      <img src={fotoKu} alt="" />

      <Header juduL="Selamat datang Hallo" />
    </>
  )
}

export default App
