import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Honest IT. Simplified. | ANDREWB.IT',
  description: 'Managed IT Services',
  icons:{
    icon: '/ab.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
          <link rel="shortcut icon" href="/app/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/ab.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/ab.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/ab.png"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
