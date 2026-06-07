"use client"

import { motion } from "framer-motion"

interface AboutProps {
    animate?: boolean
    delayChildren?: number
    staggerChildren?: number
}

export default function About( { animate = true, delayChildren = 0, staggerChildren = 0 }: AboutProps) {
    const container = {
      hidden: {},
      show: {
          transition: {
              delayChildren: delayChildren,
              staggerChildren: staggerChildren
            }
        }
    }

    const item = {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1,  y: 0, transition: { duration: 0.4 } }
    }

    if (!animate) {
        return (
            <div className="space-y-4">
                <p>I'm a computer science graduate student at <a href="https://www.northwestern.edu/" target="_blank" rel="noopener noreferrer">Northwestern University</a>.</p>

                <p>I was recently highlighted in <a href="https://github.com/openai/parameter-golf" target="_blank" rel="noopener noreferrer">OpenAI's LLM pretraining competition</a>. </p>

                <p>I completed my undergraduate studies in computer science at the <a href="https://www.berkeley.edu" target="_blank" rel="noopener noreferrer">University of California, Berkeley</a>, 
                where I was affiliated with the <a href="https://www.humansleepscience.com/" target="_blank" rel="noopener noreferrer">Center for Human Sleep Science</a> and 
                helped run <a href="https://berkeleyinnovate.com/" target="_blank" rel="noopener noreferrer">Innovate @ Berkeley</a>.</p>
            </div>
        )
    }
    
    return (
        <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
            <motion.p variants={item}>I'm a computer science graduate student at <a href="https://www.northwestern.edu/" target="_blank" rel="noopener noreferrer">Northwestern University</a>.</motion.p>

            <motion.p variants={item}>I was recently highlighted in <a href="https://github.com/openai/parameter-golf" target="_blank" rel="noopener noreferrer">OpenAI's LLM pretraining competition</a>. </motion.p>

            <motion.p variants={item}>I completed my undergraduate studies in computer science at the <a href="https://www.berkeley.edu" target="_blank" rel="noopener noreferrer">University of California, Berkeley</a>, 
            where I was affiliated with the <a href="https://www.humansleepscience.com/" target="_blank" rel="noopener noreferrer">Center for Human Sleep Science</a> and 
            helped run <a href="https://berkeleyinnovate.com/" target="_blank" rel="noopener noreferrer">Innovate @ Berkeley</a>.</motion.p>
        </motion.div>
    )
}