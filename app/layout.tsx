'use client'

import { DarkModeProvider } from './context/DarkModeContext'
import './globals.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <DarkModeProvider>
                <body className="bg-transparent">{children}</body>
            </DarkModeProvider>
        </html>
    )
}
