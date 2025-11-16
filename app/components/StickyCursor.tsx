'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
function StickyCursor() {
    const cursorSize: number = 15
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }
    const smoothOption = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMousse = {
        x: useSpring(mouse.x, smoothOption),
        y: useSpring(mouse.y, smoothOption),
    }
    const manageMouseMove = (e: any) => {
        const { clientX, clientY } = e
        mouse.x.set(clientX - cursorSize / 2)
        mouse.y.set(clientY - cursorSize / 2)
    }
    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
        }
    })
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div>
            <motion.div
                className={
                    darkMode
                        ? 'fixed  w-[15px] h-[15px] bg-white rounded-full pointer-events-none -z-10'
                        : 'fixed  w-[15px] h-[15px] bg-black rounded-full pointer-events-none -z-10'
                }
                style={{ left: smoothMousse.x, top: smoothMousse.y }}
            ></motion.div>
        </div>
    )
}
export default StickyCursor
