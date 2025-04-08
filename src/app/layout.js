import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XMTrading™ – FX・原油・ゴールド・株式取引の業界大手ブローカー',
  description: 'XMTrading™公式サイト。続行する前に接続のセキュリティを確認する必要があります。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
