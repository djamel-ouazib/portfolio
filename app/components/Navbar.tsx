'use client'
import { DarkModeContext } from '../context/DarkModeContext'
import { useContext } from 'react'
import {
    GithubDarkSvg,
    GithubSvg,
    LinkedinDarkSvg,
    LinkedinSvg,
    MoonSvg,
    SunSvg,
    SunSvgSolid,
} from '../ui/IconSvg'
import { motion } from 'framer-motion'

function Navbar() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)
    return (
        <div
            className={
                darkMode
                    ? 'fixed left-0 top-0 w-full   flex py-7 px-7 justify-end-safe  text-zinc-50 font-bold bg-[#111]   z-50 '
                    : 'fixed left-0 top-0 w-full   flex py-7 px-7 justify-end-safe  text-zinc-50 font-bold bg-white/60 backdrop-blur-lg  z-50 '
            }
        >
            <div className="flex  gap-5 justify-center items-center">
                <div>
                    <motion.span
                        whileHover={
                            darkMode
                                ? { scale: 1.1, background: '#2F2F2F' }
                                : { scale: 1.1, background: '#FAFAFA' }
                        }
                        className="w-10  flex justify-center items-center h-10  rounded-full p-1   cursor-pointer"
                    >
                        {GithubSvg}
                        <a
                            href="https://github.com/djamel-ouazib"
                            target="blank"
                        >
                            {darkMode ? GithubSvg : GithubDarkSvg}
                        </a>
                    </motion.span>
                </div>
                <div>
                    <motion.span
                        whileHover={
                            darkMode
                                ? { scale: 1.1, background: '#2F2F2F' }
                                : { scale: 1.1, background: '#FAFAFA' }
                        }
                        className="w-10  flex justify-center items-center h-10  rounded-full p-1   cursor-pointer"
                    >
                        <a
                            href="https://www.linkedin.com/in/djamel-ouazib-a59358336/"
                            target="blank"
                        >
                            {darkMode ? LinkedinSvg : LinkedinDarkSvg}
                        </a>
                    </motion.span>
                </div>
                <motion.button
                    onClick={() => {
                        setDarkMode(!darkMode)
                    }}
                    whileHover={
                        darkMode
                            ? { scale: 1.1, background: '#2F2F2F' }
                            : { scale: 1.1, background: '#FAFAFA', border: 1 }
                    }
                    className="w-10  flex justify-center items-center h-10  rounded-full p-1   cursor-pointer"
                >
                    {darkMode ? SunSvgSolid : MoonSvg}
                </motion.button>
            </div>
        </div>
    )
}

export default Navbar
