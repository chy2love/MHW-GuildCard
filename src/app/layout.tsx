import './globals.css';
import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanumGothic.className} antialiased min-h-screen`}>{children}</body>
    </html>
  );
}
