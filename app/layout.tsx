import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TagBar from "../components/bar/tag";
import NavBar from "../components/bar/nav";
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ችቦ",
  description: "Chibo(ችቦ) Multimedia Platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="py-10 h-screen space-y-5 overflow-y-auto">
        <h1 className="font-bold text-3xl text-center">ችቦ</h1> 
          <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
            <TagBar />
            {children}
            <Toaster />
            <NavBar />
          </div>
      </div>  
        
     </body>
    </html>
  );
}
