// import './App.css'
import './app.scss'
import { Experince } from './components/experince/Experince'
import { Home } from './components/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { Parallax } from './components/parallax/Parallax'
import { Summary } from './components/summary/Summary'
import { Education } from './components/education/Education'
import { ProjectsAndSkills } from './components/projectsAndSkills/ProjectsAndSkills'
import { Volunteering } from './components/volunteering/Volunteering'
import { CourseAndWorkshops } from './components/coursesAndWorkShops/CourseAndWorkshops'
import { Contact } from './components/contact/Contact'

function App() {

  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Home />
      </section>
      <section id='parallax'><Parallax /></section>
      <section id='Summary'><Summary /></section>
      <section id='Experience'><Experince/></section>
      {/* <section id='Skills'><Education/></section> */}
      <section id='Projects'><ProjectsAndSkills/></section>
      <section id='Volunteering'><Volunteering/></section>
      <section id='Courses'><CourseAndWorkshops/></section>
      <section id='Contact'><Contact/></section>
    </div>
  )
}

export default App
