// import './App.css'
import './app.scss'
import { Experince } from './components/experince/Experince'
import { Home } from './components/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { Parallax } from './components/parallax/Parallax'
import { Summary } from './components/summary/Summary'
import { Education } from './components/education/Education'

function App() {

  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Home />
      </section>
      <section id='Experince'><Parallax /></section>
      <section id='Education'><Summary /></section>
      <section id='Projects'><Experince/></section>
      <section id='Skills'><Education/></section>
      <section id='Hobbie'>hobies</section>
      <section id='Contact'>contact me</section>
    </div>
  )
}

export default App
