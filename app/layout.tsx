import { cn } from '@/lib/ultis'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buildbox Challenge',
  description: 'Desafio para desenvolvedor Web Buildbox',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={cn(inter.className, 'font-sans antialiased')}>
        <main className="relative flex flex-col min-h-dvh overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
