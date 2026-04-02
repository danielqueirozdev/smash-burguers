import './globals.css'

export const metadata = {
  title: 'Smash Burgers — O Mais Insano da Sua Cidade',
  description: 'Carne prensada na chapa, pão brioche macio e queijo derretido que explode em sabor.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
