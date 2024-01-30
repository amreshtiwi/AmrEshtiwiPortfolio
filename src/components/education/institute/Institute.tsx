import './institute.scss'

interface InstituteProps {
    instituteName: String,
    major: String,
    duration:String,
    address:String,
    imguri:string
}

export const Institute = ({ instituteName, major ,duration, address,imguri}: InstituteProps) => {
    return (
        <div className='institute'>
            <h1>{instituteName}</h1>
            <h2>{major}</h2>
            <span>
                <p>{duration}</p>
                <p>{address}</p>
            </span>
            <img src={imguri} alt="logo" />
            <a href="#">Visit Website</a>
        </div>
    )
}
