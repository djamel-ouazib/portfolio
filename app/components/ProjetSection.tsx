import Image from 'next/image'
import { motion } from 'framer-motion'
import { GithubSvg } from '../ui/IconSvg'
import { ArrowUpRight } from '../ui/IconSvg'
import { useContext, useEffect, useState } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

function ProjetSection() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])
    const { darkMode } = useContext(DarkModeContext)
    return (
        <motion.div
            initial={{ opacity: 0 }} // état initial : invisible et déplacé vers le bas
            whileInView={{ opacity: 1 }} // état final : visible et position normale
            viewport={{ once: true, amount: 0.7 }} // déclenche l'animation quand 30% de l'élément est visible
            transition={{ duration: 1, ease: 'easeOut' }}
            className={
                darkMode
                    ? 'w-full h-[500px] space-y-3  flex flex-col cursor-pointer bg-white/10 backdrop-blur-sm   rounded-xl p-6 shadow-neutral-300'
                    : 'w-full h-[500px] space-y-3  flex flex-col cursor-pointer bg-zinc-300/10 backdrop-blur-sm border border-zinc-200   rounded-xl p-6 shadow-neutral-300'
            }
        >
            <div className="flex-2 relative">
                <Image
                    src="/images/lampshop.png"
                    alt="Photo de la maquette lampshop"
                    fill
                    className="object-cover rounded-xl"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    {...(isMobile
                        ? { whileTap: { opacity: 1 } }
                        : { whileHover: { opacity: 1 } })}
                    className="absolute w-full  h-full flex justify-center items-center flex-col gap-2 rounded-2xl bg-white/10 backdrop-blur-sm"
                >
                    <a
                        href="https://djamel-ouazib.github.io/LampeShope/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-white/30 backdrop-blur-lg flex gap-2 justify-center items-center text-[17px] font-light  rounded-2xl text-center w-[200px] h-15 cursor-pointer  text-black border border-zinc-400">
                            {ArrowUpRight} Voir Le Projet
                        </button>
                    </a>
                    <a
                        href="https://github.com/djamel-ouazib/LampeShope"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-black flex justify-center items-center text-[17px] font-light  rounded-2xl text-center w-[200px] h-15 cursor-pointer  text-zinc-50">
                            {GithubSvg} Code Source
                        </button>
                    </a>
                </motion.div>
            </div>

            <div className=" flex-1 space-y-3 ">
                <h3 className={darkMode ? 'text-zinc-50' : 'text-zinc-800'}>
                    Maquette LampeShop
                </h3>
                <p
                    className={
                        darkMode
                            ? '   text-sm sm:text-base md:text-[17px] lg:text-[17px] leading-relaxed text-gray-200 font-light tracking-wide text-justify md:text-left px-4'
                            : '   text-sm sm:text-base md:text-[17px] lg:text-[17px]   leading-relaxed text-gray-800 font-light tracking-wide  text-justify md:text-left px-4'
                    }
                >
                    J’ai réalisé le projet{' '}
                    <span className="font-medium text-blue-400">LampShop</span>,
                    une maquette Figma que j’ai codée avec{' '}
                    <span className="font-medium text-blue-400">React</span> et{' '}
                    <span className="font-medium text-blue-400">Vite</span> afin
                    de mettre en pratique mes compétences en développement
                    front-end. Ce projet m’a permis d’approfondir l’utilisation
                    des composants, ainsi que des hooks{' '}
                    <span className="font-medium text-blue-400">useState</span>{' '}
                    et{' '}
                    <span className="font-medium text-blue-400">useEffect</span>{' '}
                    pour gérer l’interactivité et le cycle de vie de
                    l’application.
                </p>

                <div>
                    <div className="space-x-3">
                        <span className="text-sm sm:text-base md:text-[17px] font-light inline-flex justify-center text-blue-500  bg-blue-500/10 px-3 py-1 rounded-2xl backdrop-blur-sm">
                            React
                        </span>
                        <span className="text-sm sm:text-base md:text-[17px] inline-flex justify-center text-yellow-500 font-light bg-yellow-500/10 px-3 py-1 rounded-2xl backdrop-blur-sm">
                            JavaScript
                        </span>
                        <span className="text-sm sm:text-base md:text-[17px] inline-flex justify-center text-blue-300 font-light bg-blue-300/10 px-3 py-1 rounded-2xl backdrop-blur-sm">
                            CSS
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default ProjetSection
