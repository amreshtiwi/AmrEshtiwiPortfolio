import './home.scss'
import { Variants, motion } from 'framer-motion'

const textVariants = {
    inital:{
        x: -500,
        opacity: 0,
    }, 

    animate:{
        x: 0, 
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        }
    },

    scrollButton:{
        opacity: 0, 
        y: 10, 
        transition:{
            duration:2,
            repeat: Infinity,
        }
    }
}

const SliderVariants:Variants  = {
    inital:{
        x: 0,
    }, 

    animate:{
        x: "-220%", 
        transition:{
            repeat: Infinity,
            duration:20,
            repeatType:"mirror",
            
            
        }
    },
}

export const Home = () => {
    return (
        <div className='home'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="inital" animate="animate">
                    <motion.h2 variants={textVariants}>AMR ESHTIWI</motion.h2>
                    <motion.h1 variants={textVariants}>Frontend Developer and Designer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.a className='button' href='#Projects'  variants={textVariants}>See Latest Projects</motion.a>
                        <motion.a className='button' href='#Contact' variants={textVariants}>Contact Me</motion.a>
                    </motion.div>
                    <motion.img src="arrow.png" alt="arrow" variants={textVariants} animate="scrollButton"/>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={SliderVariants} initial="inital" animate="animate">
                Web Developing 
            </motion.div>
            <div className="imageContainer">
                <img src="amr.png" alt="amr" />
            </div>
        </div>
    )
}
