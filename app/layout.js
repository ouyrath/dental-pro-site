import './globals.css'

export const metadata = {
  title: 'Smile Haven Dental | Modern Family Dentistry',
  description: 'Modern, comfortable dental care for the whole family. Book online, explore services, and learn about flexible payment options.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
