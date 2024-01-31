// import React from 'react'
import './projectsAndSkill.scss'
import { Project } from './project/Project'

export const ProjectsAndSkills = () => {
    return (
        <div className='projectsAndSkills'>

            <div className='rectangle'>
                <h1>Projects and Skills</h1>
            </div>

            <div className='projectSkillsContainer'>
                <div className="projects">
                    <Project
                        title={'Where in the world'}
                        info={'A web application that I build in four ways ' +
                            '(pure HTML CSS and JS, Bootstrap, React and Angular) as training material ' +
                            'at Harri.The application lets you discover countries by searching and ' +
                            'filtering depending on the region, and by clicking on the ' +
                            'country it gives you more information about it.'}
                        uri='#'
                        imgUri='wherein.png'
                        imgDecoration={true} />

                    <Project
                        title={'Qadaa, Graduation project'}
                        info={'A mobile and web application developed as my graduation project. I was ' +
                            'responsible for the front-end development using React Native for the mobile app ' +
                            'and ReactJS for the web app. The purpose of this application is to facilitate ' +
                            'judicial transactions through mobile devices, including features such as lawyer ' +
                            'chat, appointment booking, court and lawyer maps, and a forum for legal questions and answers.'}
                        uri='#'
                        imgUri='qadaa.png' />
                </div>

                <div className='skills'>
                    <div className='skill-field'>
                        <h1>Programming Languages</h1>
                        <div>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>TypeScript</p>
                            <p>PHP</p>
                            <p>Python</p>
                            <p>Java</p>
                            <p>C/C++</p>
                            <p>SQL</p>
                        </div>
                    </div>
                    <div className='skill-field'>
                        <h1>Technical</h1>
                        <div>
                            <p>React</p>
                            <p>Angular</p>
                            <p>React Native</p>
                            <p>Bootstrap</p>
                            <p>Git</p>
                            <p>SASS/SCSS</p>
                            <p>OpenCV</p>
                            <p>Django</p>
                            <p>React Query</p>
                            <p>OOP</p>
                            <p>MS Office</p>
                            <p>Adobe Illustrator</p>
                            <p>Adobe Photoshop</p>
                        </div>
                    </div>
                    <div className='skill-field'>
                        <h1>Transferable</h1>
                        <div>
                            <p>Communication Skills</p>
                            <p>Team Player</p>
                            <p>Creativity</p>
                            <p>Attention to details</p>
                            <p>Adaptability</p>
                            <p>Leadership</p>
                            <p>Acting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
