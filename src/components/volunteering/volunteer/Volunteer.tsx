import { useState } from 'react';
import './volunteer.scss'

interface VolunteerProps {
    title: String,
    info: String,
    imgUri: string,
    imgDecoration?: boolean,
}

export const Volunteer = ({ title, info, imgUri, imgDecoration = false}: VolunteerProps) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='volunteer'>
            <img className={imgDecoration ? 'img-volunteer' : ''} src={imgUri} alt="volunteer" />

            <div className="volunteer-container">

                <div className='volunteer-info'>
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
