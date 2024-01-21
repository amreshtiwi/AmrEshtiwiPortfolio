import './summary.scss'
import { Variants, motion } from 'framer-motion'

const textVariants = {
    inital:{
        y:30,
        opacity: 0,
    }, 

    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren: 0.2,
        }
    },
}

const shape1Variants:Variants = {
    inital:{
        y:0,
        x:0,
    }, 

    animate:{
        y:4,
        x:3,
        transition:{
            repeat: Infinity,
            duration:0.5,
            repeatType:"mirror", 
        }
    },
}

const shape2Variants:Variants = {
    inital:{
        y:0,
        x:0,
    }, 

    animate:{
        y:-3,
        x:-4,
        transition:{
            repeat: Infinity,
            duration:0.5,
            repeatType:"mirror", 
        }
    },
}

export const Summary = () => {



    return (
        <div className='summary' >
            <motion.div className="shape" variants={textVariants} initial="inital" whileInView="animate">
                <motion.div className="shape-1" variants={shape1Variants} initial="inital" animate="animate"></motion.div>
                <motion.div className="shape-2" variants={shape2Variants} initial="inital" animate="animate"></motion.div>
            </motion.div>
            <motion.div className="summaryContainer" variants={textVariants} initial="inital" whileInView="animate">
                <motion.h1 variants={textVariants}>Summary</motion.h1>
                <motion.p variants={textVariants}>A Computer Engineering graduate with the abilities and expertise for front-end development.
                    Have shown my skills and capabilities during an internship in Harri,
                    specializing in React for crafting responsive web applications.
                    Achieved to build a cross-platform mobile app built with React Native for the graduation project where
                    the success rate was more than 85%. Further, honing the Front-end development capabilities through training at TAP.
                    Committed to staying current with the latest trends and technologies.
                    As a team player and a great thinker outside the box.
                    I am seeking a role in web development, where I can effectively deliver impactful and innovative web solutions.
                </motion.p>
            </motion.div>
        </div>
    )
}
