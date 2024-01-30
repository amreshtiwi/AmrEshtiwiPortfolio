import './education.scss'
import { Institute } from './institute/Institute'

export const Education = () => {
    return (
        <div className='education'>
            <Institute
                instituteName={'An-Najah National University'}
                major={'Computer Engineering'}
                duration={'2018 - 2023'}
                address={'Nablus, Palestine'}
                imguri='annajahlogo.webp' />

            <div className='rectangle'>
                <h1>My Education</h1>
            </div>

            <Institute
                instituteName={'TAP'}
                major={'Software development - Frontend'}
                duration={'09/2023 - 11/2023'}
                address={'Nablus, Palestine'}
                imguri='taplogo.png' />
        </div>
    )
}
