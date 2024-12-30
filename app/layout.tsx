import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_SC } from 'next/font/google';
import Navbar from './components/home/Navbar';

const notoSansSC = Noto_Sans_SC({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'WeChat Markdown Editor',
  description: 'Professional WeChat article editor with Markdown support',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={notoSansSC.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}