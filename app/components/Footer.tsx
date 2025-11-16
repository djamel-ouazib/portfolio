import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

function Footer() {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div
            className={
                darkMode
                    ? 'text-center py-8 px-4 text-zinc-50 border-t border-zinc-300'
                    : ' text-center py-8 px-4  border-t border-zinc-300'
            }
        >
            <p>© 2025 Djamel Ouazib. Tous droits réservés.</p>
        </div>
    )
}

export default Footer
