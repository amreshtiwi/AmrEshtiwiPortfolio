import { Sidebar } from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar/>

            <div className="wrapper">
                <motion.span className='logo' 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}>Amr Eshtiwi</motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/amr-eshtiwi/" target='_blank'><img src="/linkedIn.png" alt="linkedIn" /></a>
                </div>
            </div>
        </div>
    )
}
