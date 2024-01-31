import { useState } from 'react';
import './project.scss'

interface ProjectProps {
    title: String,
    info: String,
    uri: string,
    imgUri: string,
    imgDecoration?: boolean,
}

export const Project = ({ title, info, uri, imgUri, imgDecoration = false}: ProjectProps) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='project'>
            <img className={imgDecoration ? 'img-project' : ''} src={imgUri} alt="project" />

            <div className="project-container">

                <div className='project-info'>
                    <h1>{title}</h1>
                    <div className={`expandable-paragraph ${expanded ? 'expanded' : ''}`}>
                        <p>
                            {info}
                        </p>
                    </div>
                    <div className='SeeMore' onClick={toggleExpand}>{expanded ? 'See less' : 'See more'}</div>
                </div>
                
                <a href={uri}>Check it</a>
            </div>
        </div>
    )
}
