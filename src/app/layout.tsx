import { Lato } from 'next/font/google'

import { Providers } from './providers'
import './globals.css'

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Just Run',
  description: 'Running Pace Calculator',
  icons: {
    icon: 'https://evant.me/favicon.svg', // 全局图标
  },
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
