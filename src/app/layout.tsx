'use client'
import { CartProvider } from '@/contexts/CartContext'
import { DropdownProvider } from '@/contexts/DropDownContext';

import { Header } from '@/components/header/index'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carrinho de compras',
  description: 'Carrinho de compras',
}

type RootLayoutType = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutType) {
  const [open, setOpen] = useState(false);
  const { push } = useRouter();

  return (
    < html lang="pt-BR" >
      <body className={inter.className}>
        <CartProvider>
          <DropdownProvider>
            <Header.Root>
              <Header.Links isOpen={open} />
              <Header.Cart openCart={() => { push('/carrinho') }} />
              <Header.MobileBtn setIsOpen={() => setOpen(!open)} isOpen={open} /> {/*!!!! SUBSTITUIR POR CONTEXT API, SRP */}
            </Header.Root>
            {children}
          </DropdownProvider>
        </CartProvider>
      </body>
    </html >
  )
}
