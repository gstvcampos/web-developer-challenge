import Header from '@/components/Header'
import { cn } from '@/lib/ultis'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

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
      <body className={cn(roboto.className, 'font-sans antialiased')}>
        <main className="relative flex flex-col min-h-dvh overflow-hidden">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
