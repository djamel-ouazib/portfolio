'use client'
import { useEffect } from 'react'
import LenisModule from 'lenis/react'

// On récupère le vrai constructeur
const Lenis = (LenisModule as any).default || LenisModule

export default function useLenis(): void {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => t,
            smooth: true,
            direction: 'vertical',
        })

        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
}
