// import './course.scss'

// export const Course = () => {
//   return (
//     <div>Course</div>
//   )
// }

import { useState } from 'react';
import './course.scss'

interface CourseProps {
    title: String,
    info: String,
    imgUri: string,
    imgDecoration?: boolean,
}

export const Course = ({ title, info, imgUri, imgDecoration = false}: CourseProps) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='course'>
            <img className={imgDecoration ? 'img-course' : ''} src={imgUri} alt="course" />

            <div className="course-container">

                <div className='course-info'>
                    <h1>{title}</h1>
                    <div className={`expandable-paragraph ${expanded ? 'expanded' : ''}`}>
                        <p>
                            {info}
                        </p>
                    </div>
                    <div className='SeeMore' onClick={toggleExpand}>{expanded ? 'See less' : 'See more'}</div>
                </div>
            </div>
        </div>
    )
}
