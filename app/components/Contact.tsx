import { ArobazDarkSvg, ArobazSvg, ArrowUpRight } from '../ui/IconSvg'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
function Contact() {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div
            className={
                darkMode
                    ? 'py-8 px-3 flex flex-col gap-4 shadow-xl rounded-2xl bg-white/10 backdrop-blur-sm   p-6 '
                    : 'py-8 px-3 flex flex-col gap-4 shadow-xl rounded-2xl bg-zinc-300/10 backdrop-blur-sm     p-6 '
            }
        >
            <div className="flex items-center gap-4">
                <h2
                    className={
                        darkMode
                            ? 'text-zinc-50  text-4xl font-medium space-y-2  border-b'
                            : 'text-zinc-600  text-4xl font-medium space-y-2 border-b'
                    }
                >
                    Entrons en contact !
                </h2>
                <div>{darkMode ? ArobazDarkSvg : ArobazSvg}</div>
            </div>
            <p
                className={
                    darkMode
                        ? 'text-black leading-relaxed  font-light tracking-wide  text-justify md:text-left dark:text-gray-200 text-[17px]'
                        : 'text-black leading-relaxed tracking-wide text-justify font-light  md:text-left dark:text-gray-800 text-[17px]'
                }
            >
                {' '}
                Je suis étudiant en informatique à la recherche d’un{' '}
                <span className="font-medium text-blue-400">stage</span> ou
                d’une{' '}
                <span className="font-medium text-blue-400">alternance</span>{' '}
                pour mettre mes compétences en pratique et apprendre sur le
                terrain.
            </p>

            <span className="text-[17px] font-mono inline-flex sm:justify-center text-blue-500  bg-blue-500/10 px-4 py-1 rounded-2xl backdrop-blur-sm">
                <a
                    href="mailto:djamel.ouazibb@gmail.com"
                    className="border-0 hover:border-b border-blue-600 p-0.5"
                >
                    djamel.ouazibb@gmail.com
                </a>
                {ArrowUpRight}
            </span>
        </div>
    )
}
export default Contact
