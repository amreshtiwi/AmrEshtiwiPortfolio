import { Volunteer } from './volunteer/Volunteer'
import './volunteering.scss'

export const Volunteering = () => {
    return (
        <div className='volunteering-container'>

            <div className='rectangle'>
                <h1>Volunteering and participation</h1>
            </div>

            <div className='Volunteering'>
                <Volunteer
                    title={'Al-Hussein Bouziane Festival'}
                    info={'Participating in the Al-Hussein Bouziane Festival in Tunisia to perform a role in the play The Deal as part of the An-Najah National University theater team'}
                    imgUri='wherein.png'
                />

                <Volunteer
                    title={'Tangier International Festival'}
                    info={'Participation in the Tangier International Festival in Morocco to perform a role in the play The Deal as part of the An-Najah National University theater team'}
                    imgUri='wherein.png'
                />

                <Volunteer
                    title={'IEEE Designer'}
                    info={'Volunteered at the IEEE branch at An-Najah National University as a designer of announcements that are published on social media, in addition to designing posters needed for events and workshops.'}
                    imgUri='wherein.png'
                />

                <Volunteer
                    title={'IEEE Day Ambassador'}
                    info={'In 2019, I was chosen to be an IEEE Day Ambassador at An-Najah National University, and it was my responsibility to arrange and organize an event to celebrate that day.'}
                    imgUri='wherein.png'
                />
            </div>
        </div>
    )
}
