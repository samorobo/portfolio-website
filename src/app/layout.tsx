import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Calistoga} from "next/font/google"
import "./globals.css";
import { twMerge } from 'tailwind-merge'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ['latin'], variable: '--font-sans'})
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ["400"]})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Sammy's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       {/* <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white antialiased font-sans`}
      >  */}
       <body
        className={twMerge(inter.variable, calistoga.variable, 'bg-gray-900 text-white antialiased font-sans')}> 
        {children}
      </body>
    </html>
  );
}
