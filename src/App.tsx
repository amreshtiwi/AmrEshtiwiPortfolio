// import './App.css'
import './app.scss'
import { Navbar } from './components/navbar/Navbar'

function App() {

  return (
    <div>
      <section id='Home'><Navbar/></section>
      <section id='Experince'>experince</section>
      <section id='Education'>education</section>
      <section id='Projects'>projects</section>
      <section id='Skills'>skills</section>
      <section id='Hobbie'>hobies</section>
      <section id='Contact'>contact me</section>
    </div>
  )
}

export default App
