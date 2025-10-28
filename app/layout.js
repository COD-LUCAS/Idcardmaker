import './globals.css'

export const metadata = {
  title: 'Student ID Card Generator',
  description: 'Create professional student identification cards',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
