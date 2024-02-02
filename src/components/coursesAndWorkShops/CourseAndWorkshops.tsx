import { Course } from './course/Course'
import './courseAndWorkshops.scss'

export const CourseAndWorkshops = () => {
    return (
        <div className='courses-container'>

            <div className='rectangle'>
                <h1>Courses and Workshops</h1>
            </div>

            <div className='courses-and-workshops'>
                <Course
                    title={'Django workshop'}
                    info={'4 days of intensive practical training that gives the fundamentals of the Django framework, by building a project to learn about Django and the folder structure and implement the first project, in addition to create a database and learn how to store an image.'}
                    imgUri='wherein.png'
                />

                <Course
                    title={'UI/UX'}
                    info={'6 hours of training in the UX field by making a practical task and learn how to go through multiple steps to build own project.'}
                    imgUri='wherein.png'
                />

                <Course
                    title={'Freelancing training'}
                    info={'3 months of training at a rate of 6 hours per week on the most important steps of freelancing and how to start working remotely with the most important freelancing platforms such as Upwork.'}
                    imgUri='wherein.png'
                />

            </div>
        </div>
    )
}
