import Image from 'next/image'
import { motion } from 'framer-motion'
import { GithubSvg } from '../ui/IconSvg'
import { ArrowUpRight } from '../ui/IconSvg'
import { useContext, useEffect, useState } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

function ProjetSection() {
    const { darkMode } = useContext(DarkModeContext)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])
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
                    src="/images/typerush.png"
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
                    <a rel="noopener noreferrer">
                        <button className="bg-white/30 backdrop-blur-lg flex gap-2 justify-center items-center text-[17px] font-light  rounded-2xl text-center w-[200px] h-15 cursor-pointer  text-black border border-zinc-400">
                            {ArrowUpRight} Voir Le Projet
                        </button>
                    </a>
                    <a
                        href="https://github.com/djamel-ouazib/TypeRushClean"
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
                    TypeRush
                </h3>
                <p
                    className={
                        darkMode
                            ? '  text-sm sm:text-base md:text-[17px] lg:text-[17px]  leading-relaxed text-gray-200 font-light tracking-wide text-justify md:text-left px-4'
                            : '  text-sm sm:text-base md:text-[17px] lg:text-[17px]  leading-relaxed text-gray-800 font-light tracking-wide  text-justify md:text-left px-4'
                    }
                >
                    J’ai réalisé le projet{' '}
                    <span className="font-medium text-blue-400"> Typerush</span>
                    une application web de test de rapidité de frappe développée
                    avec{' '}
                    <span className="font-medium text-blue-400">
                        React TypeScript .
                    </span>{' '}
                    et stylisé avec{' '}
                    <span className="font-medium text-blue-400">
                        Tailwind CSS.
                    </span>{' '}
                    Elle génère automatiquement du texte à taper grâce à
                    <span className="font-medium text-blue-400">
                        GPT-2 via Hugging Face
                    </span>{' '}
                    <span className="font-medium text-blue-400">
                        Express, Prisma
                    </span>{' '}
                    et
                    <span className="font-medium text-blue-400">
                        PostgreSQL.
                    </span>{' '}
                </p>

                <div>
                    <div className="space-x-3 space-y-1">
                        <span className="text-sm sm:text-base md:text-[17px] font-light inline-flex justify-center text-blue-500  bg-blue-500/10 px-3 py-1 rounded-2xl backdrop-blur-sm">
                            React
                        </span>
                        <span className="text-sm sm:text-base md:text-[17px] inline-flex justify-center text-blue-700 font-light bg-blue-700/10 px-3 py-1 rounded-2xl backdrop-blur-sm">
                            TypeScript
                        </span>
                        <span className="text-sm sm:text-base md:text-[17px] inline-flex justify-center text-green-600 font-light bg-green-600/10 px-3 py-1 rounded-2xl backdrop-blur-sm">
                            Express
                        </span>
                        <span className="text-sm sm:text-base md:text-[17px] inline-flex justify-center text-cyan-700 font-light bg-cyan-300/10 px-3 py-1 rounded-2xl backdrop-blur-sm">
                            Prisma
                        </span>
                        <span className="text-sm sm:text-base md:text-[17px] inline-flex justify-center text-indigo-500 font-light bg-indigo-300/10 px-3 py-1 rounded-2xl backdrop-blur-sm">
                            Postgresql
                        </span>

                        <span className="text-sm sm:text-base md:text-[17px] inline-flex justify-center text-orange-500 font-light bg-orange-300/10 px-3 py-1 rounded-2xl backdrop-blur-sm">
                            Projet En cours développement ...
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default ProjetSection
