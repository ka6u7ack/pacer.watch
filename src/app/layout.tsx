import { Lato } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Just Run',
  description: 'Running Pace Calculator',
  icons: {
    icon: [
      {
        url: "/icon.ico",
        href: "/icon.ico",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <Head>
        <link rel='icon' href='/icon.ico' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#ff7652' />
      </Head>
      <body className={lato.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
