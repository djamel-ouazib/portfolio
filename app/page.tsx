'use client'

import Navbar from './components/Navbar'
import StickyCursor from './components/StickyCursor'
import { ReactLenis, useLenis } from 'lenis/react'
import {
    BootstrapeSvg,
    CssSvg,
    DownloadSvg,
    ExpressDarkSvg,
    ExpressSvg,
    HtmlSvg,
    JavaScriptSvg,
    MongodbSvg,
    NextjsSvg,
    NodeSvg,
    PostgressSvg,
    ReactSvg,
    TailwindSvg,
    TypeScriptSvg,
} from './ui/IconSvg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ProjetSection from './components/ProjetSection'
import { useContext, useEffect, useState } from 'react'
import { DarkModeContext } from './context/DarkModeContext'
import ProjetSectionTwo from './components/ProjetSectionTwo'
import ProjetSectionThree from './components/ProjetSectionThree'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import ProjetSectionFour from './components/ProjetSectionFour'
import ProjetSectionFive from './components/ProjectSectionFive'
export default function Home() {
    const lenis = useLenis((instance) => {
        console.log('Scroll position:', instance.scroll)
    })
    const [loading, setLoadiing] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadiing(false)
        }, 3000)

        return () => clearTimeout(timer)
    })
    const { darkMode } = useContext(DarkModeContext)
    const CardCss =
        'text-zinc-50 font-light w-[100%]  md:w-[200px] lg-[200px] flex gap-2 justify-center h-[100px] items-center rounded-2xl cursor-pointer bg-white/5 backdrop-blur-md   rounded-xl p-6 shadow-lg  border-zinc-900    '

    const CardCssDark =
        'text-zinc-800 font-light w-[100%] md:w-[200px] lg-[200px] flex gap-2 justify-center h-[100px] items-center rounded-2xl cursor-pointer bg-white/5 backdrop-blur-md   rounded-xl p-6 shadow-lg  border-zinc-900    '
    return (
        <div className="flex flex-col">
            <AnimatePresence>{loading && <Loader />}</AnimatePresence>
            <Navbar />
            <span className="opacity-0 sm:opacity-0 md:opacity-100 lg:opacity-100">
                <StickyCursor />
            </span>
            <ReactLenis root />
            {!loading && (
                <main className="w-full sm:w-full md:w-full lg:w-[60%] m-auto mt-25  flex flex-col gap-5 p-4  overflow-hidden  ">
                    <div className="flex">
                        <motion.h1
                            className={
                                darkMode
                                    ? 'flex-2 text-4xl font-bold bg-linear-to-r from-white to-transparent bg-clip-text text-transparent'
                                    : 'flex-2 text-4xl font-bold bg-linear-to-r from-black to-transparent bg-clip-text text-transparent'
                            }
                            initial={{ opacity: 0 }} // départ : 50px à gauche, invisible
                            animate={{ opacity: 1 }} // final : position normale, opaque
                            transition={{ duration: 1, ease: 'easeOut' }} // durée 1s, easing
                        >
                            Bienvenue sur mon portfolio
                        </motion.h1>
                        <Image
                            src="/images/profile.JPG"
                            alt="Photo de profil"
                            width={100}
                            height={100}
                            className="rounded-full "
                        />
                    </div>

                    <div className="flex-col justify-center items-center space-y-5">
                        <motion.h2
                            className={
                                darkMode
                                    ? ' text-2xl text-zinc-50 font-bold'
                                    : ' text-2xl text-gray-800 font-bold'
                            }
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        >
                            A Propos De Moi :
                        </motion.h2>
                        <section className="w-full lg:w-3xl   border-l border-white p-4 ">
                            <motion.p
                                className={
                                    darkMode
                                        ? 'text-gray-300 leading-relaxed tracking-wide text-justify text-sm sm:text-base'
                                        : 'text-black leading-relaxed tracking-wide text-justify dark:text-gray-800  text-sm sm:text-base'
                                }
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, ease: 'easeOut' }}
                            >
                                Je m'appelle Djamel Ouazib, développeur web
                                passionné par la création d’applications
                                modernes et intelligentes. Titulaire d’une
                                licence en informatique obtenue en Algérie et
                                d’une année de master validée en génie logiciel,
                                j’ai acquis de solides bases en programmation,
                                conception logicielle et architecture des
                                systèmes.
                            </motion.p>
                            <br />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 3, ease: 'easeOut' }}
                                className={
                                    darkMode
                                        ? 'text-gray-300 leading-relaxed tracking-wide text-justify text-sm sm:text-base'
                                        : 'text-gray-800 leading-relaxed tracking-wide text-justify text-sm sm:text-base'
                                }
                            >
                                Curieux et en constante évolution, je me suis
                                spécialisé dans le développement web, en
                                particulier avec les technologies React.js,
                                Next.js et Node.js. J’aime transformer des idées
                                en solutions concrètes, performantes et bien
                                pensées.
                            </motion.p>{' '}
                            <br />
                            <motion.p
                                className={
                                    darkMode
                                        ? 'text-gray-300 leading-relaxed tracking-wide text-justify text-sm sm:text-base'
                                        : 'text-gray-800 leading-relaxed tracking-wide text-justify text-sm sm:text-base'
                                }
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 3, ease: 'easeOut' }}
                            >
                                Mon objectif est de devenir développeur full
                                stack et de contribuer à des projets innovants,
                                notamment dans les domaines du SaaS, de
                                l’intelligence artificielle et du développement
                                de plateformes web modernes.
                            </motion.p>
                        </section>
                        <section className="flex justify-center space-y-4">
                            <a href="/CV.pdf" download>
                                <motion.button
                                    className={
                                        darkMode
                                            ? 'flex gap-1 text-black cursor-pointer z-20 bg-zinc-400 px-4 py-2 rounded-xl hover:bg-white  '
                                            : 'flex gap-1 text-black cursor-pointer z-20 bg-zinc-100 px-4 py-2 rounded-xl hover:bg-zinc-200 '
                                    }
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 2,
                                        ease: 'easeOut',
                                        delay: 1,
                                    }}
                                >
                                    {DownloadSvg} Telecharger mon CV
                                </motion.button>
                            </a>
                        </section>
                    </div>
                    <div className="space-y-5">
                        <h2
                            className={
                                darkMode
                                    ? 'text-zinc-50 text-center text-4xl font-bold space-y-2'
                                    : 'text-zinc-600 text-center text-4xl font-bold space-y-2'
                            }
                        >
                            Stack technique
                        </h2>
                        <motion.section
                            className="flex-col justify-center items-center space-y-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h3
                                className={
                                    darkMode
                                        ? 'text-zinc-50 text-2xl py-3 font-mono '
                                        : 'text-zinc-700 text-2xl py-3 font-mono '
                                }
                            >
                                Frontend
                            </h3>
                            <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2   gap-7">
                                <div
                                    className={`${darkMode ? `${CardCss} ` : `${CardCssDark}`} md:w-[350px] lg:w-[200px]`}
                                >
                                    React{' '}
                                    <span className="size-7">{ReactSvg}</span>
                                </div>
                                <div
                                    className={`${darkMode ? `${CardCss} ` : `${CardCssDark}`}  md:w-[350px] lg:w-[200px]`}
                                >
                                    Tailwind{' '}
                                    <span className="size-7">
                                        {TailwindSvg}
                                    </span>
                                </div>
                                <div
                                    className={`${darkMode ? `${CardCss} ` : `${CardCssDark}`}  md:w-[350px] lg:w-[200px]`}
                                >
                                    Bootstrap
                                    <span className="size-7">
                                        {BootstrapeSvg}
                                    </span>
                                </div>

                                <div
                                    className={`${darkMode ? `${CardCss} ` : `${CardCssDark}`}  md:w-[350px] lg:w-[200px]`}
                                >
                                    Next js{' '}
                                    <span className="size-7">{NextjsSvg}</span>
                                </div>
                            </div>
                        </motion.section>
                        <motion.section
                            className="flex-col justify-center items-center space-y-3"
                            initial={{ opacity: 0 }} // état initial : invisible et déplacé vers le bas
                            whileInView={{ opacity: 1 }} // état final : visible et position normale
                            viewport={{ once: true, amount: 0.9 }} // déclenche l'animation quand 30% de l'élément est visible
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <h3
                                className={
                                    darkMode
                                        ? 'text-zinc-50 text-2xl py-3 font-mono '
                                        : 'text-zinc-700 text-2xl py-3 font-mono '
                                }
                            >
                                Backend
                            </h3>
                            <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-5">
                                <div
                                    className={
                                        darkMode
                                            ? `${CardCss} `
                                            : `${CardCssDark}  md:w-[350px] lg:w-[200px]`
                                    }
                                >
                                    Node js{' '}
                                    <span className="size-7">{NodeSvg}</span>
                                </div>
                                <div
                                    className={
                                        darkMode
                                            ? `${CardCss} `
                                            : `${CardCssDark} md:w-[350px] lg:w-[200px]`
                                    }
                                >
                                    express js{' '}
                                    <span className="size-7">
                                        {darkMode ? ExpressSvg : ExpressDarkSvg}
                                    </span>
                                </div>
                                <div
                                    className={
                                        darkMode
                                            ? `${CardCss} `
                                            : `${CardCssDark} md:w-[350px] lg:w-[200px]`
                                    }
                                >
                                    Postgress{' '}
                                    <span className="size-7">
                                        {PostgressSvg}
                                    </span>
                                </div>

                                <div
                                    className={
                                        darkMode
                                            ? `${CardCss} `
                                            : `${CardCssDark} md:w-[350px] lg:w-[200px]`
                                    }
                                >
                                    MongoDB{' '}
                                    <span className="size-7">{MongodbSvg}</span>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section
                            className="flex-col justify-center items-center space-y-3"
                            initial={{ opacity: 0 }} // état initial : invisible et déplacé vers le bas
                            whileInView={{ opacity: 1 }} // état final : visible et position normale
                            viewport={{ once: true, amount: 1 }} // déclenche l'animation quand 30% de l'élément est visible
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <h3
                                className={
                                    darkMode
                                        ? 'text-zinc-50 text-2xl py-3 font-mono '
                                        : 'text-zinc-700 text-2xl py-3 font-mono '
                                }
                            >
                                Langages de Programmation
                            </h3>
                            <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-5">
                                <div
                                    className={
                                        darkMode
                                            ? `${CardCss} `
                                            : `${CardCssDark} md:w-[350px] lg:w-[200px]`
                                    }
                                >
                                    HTML{' '}
                                    <span className="size-7">{HtmlSvg}</span>
                                </div>
                                <div
                                    className={
                                        darkMode
                                            ? `${CardCss} `
                                            : `${CardCssDark} md:w-[350px] lg:w-[200px]`
                                    }
                                >
                                    CSS <span className="size-7">{CssSvg}</span>
                                </div>
                                <div
                                    className={
                                        darkMode
                                            ? `${CardCss} `
                                            : `${CardCssDark} md:w-[350px] lg:w-[200px]`
                                    }
                                >
                                    JavaScript{' '}
                                    <span className="size-7">
                                        {JavaScriptSvg}
                                    </span>
                                </div>

                                <div
                                    className={
                                        darkMode
                                            ? `${CardCss} `
                                            : `${CardCssDark} md:w-[350px] lg:w-[200px]`
                                    }
                                >
                                    TypeScript{' '}
                                    <span className="size-7">
                                        {TypeScriptSvg}
                                    </span>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                    <div className="space-y-4 mt-10 ">
                        <h2
                            className={
                                darkMode
                                    ? 'text-zinc-50 text-center text-4xl font-medium space-y-2'
                                    : 'text-zinc-600 text-center text-4xl font-medium space-y-2'
                            }
                        >
                            Mes Projets
                        </h2>
                        <div className="flex flex-col gap-7">
                            <ProjetSection />
                            <ProjetSectionTwo />
                            <ProjetSectionThree />
                            <ProjetSectionFour />
                            <ProjetSectionFive />
                        </div>
                    </div>
                    <div className="mt-7">
                        <Contact />
                    </div>
                    <div className="mt-7">
                        <Footer />
                    </div>
                </main>
            )}
        </div>
    )
}
