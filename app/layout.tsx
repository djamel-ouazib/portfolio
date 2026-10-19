'use client'
import { Analytics } from '@vercel/analytics/next'
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
                <Analytics />
                <body className="bg-transparent">{children}</body>
            </DarkModeProvider>
        </html>
    )
}
