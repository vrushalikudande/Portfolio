import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vrushali Kudande - DevOps Engineer',
  description: 'DevOps Engineer specializing in infrastructure automation, containerization, and cloud-native technologies. Portfolio showcasing enterprise projects and technical expertise.',
  generator: 'Next.js',
  icons: {
    icon: '/me.png',
    shortcut: '/me.png',
    apple: '/me.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
