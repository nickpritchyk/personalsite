import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'


const rob = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'NickPritchyk',
  description: 'Personal Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rob.className}>{children}</body>
    </html>
  )
}
