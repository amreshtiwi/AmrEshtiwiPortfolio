import { useRef } from 'react'
import './Parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Parallax = () => {
    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    });

    const yText = useTransform(scrollYProgress, [0,1],['0%','300%'])
    const yBg = useTransform(scrollYProgress, [0,1],['0%','250%'])
    const xBg = useTransform(scrollYProgress, [0,1],['0%','10%'])

    

  return (
    <div className='parallax' ref={ref}>
        <motion.h1 style={{y:yText}}>Who is Amr?</motion.h1>
        <motion.div className="mountain"></motion.div>
        <motion.div className="birds" style={{x:xBg}}></motion.div>
        <motion.div className="sun" style={{y:yBg}}></motion.div>
    </div>
  )
}
