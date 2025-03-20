import { Lato } from 'next/font/google'
import Favicon from '/public/favicon.ico';

import { Providers } from './providers'
import './globals.css'

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Just Run',
  description: 'Running Pace Calculator',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={lato.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
