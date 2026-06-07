"use client"

import { motion } from "framer-motion"

interface HeaderProps {
    animate?: boolean
    delay?: number
}

export default function Header({ animate = true, delay = 0 }: HeaderProps) {
    if (!animate) {
        return (
            <div>
                <h1 className="text-2xl">Pranav Iyer</h1>
            </div>
        )
    }
    
    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay,  duration: 1.0 }}
                className="text-2xl"
            >
                Pranav Iyer
            </motion.h1>
        </div>
    )
}