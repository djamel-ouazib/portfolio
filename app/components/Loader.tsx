import { motion } from 'framer-motion'

export default function Loader() {
    const name = 'Djamel Ouazib — Développeur Fullstack'

    const letters = name.split('')

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-white text-black z-9999"
        >
            {/* 🔥 Texte lettre par lettre */}
            <div className="flex mb-10">
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{
                            duration: 0.05,
                            delay: index * 0.05, // effet typing
                            ease: 'easeOut',
                        }}
                        className="sm:text-base lg:text-2xl font-light tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>

            {/* 🔥 Loader rond lumineux */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: 1,
                    rotate: 360,
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="w-16 h-16 rounded-full border-4 border-zinc-600 border-t-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />
        </motion.div>
    )
}
