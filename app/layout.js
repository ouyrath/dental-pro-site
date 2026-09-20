import './globals.css'

export const metadata = {
  title: 'Emily | Modern Family Dentistry',
  description: 'Modern, comfortable dental care from Emily Yanna. Explore services, payment options and appointment information.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
