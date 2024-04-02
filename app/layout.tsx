import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TagBar from "../components/bar/tag";
import NavBar from "../components/bar/nav";
import { Toaster } from "@/components/ui/toaster"
import { CircleUserRound, Info, Settings, SlidersHorizontal } from "lucide-react";


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
        <div className="flex flex-col h-screen">
          <div className="flex fixed left-0 right-0 max-w-lg mx-auto bg-slate-50 py-4 px-6 z-10">
          <div className="flex-2 p-4 ">
          <SlidersHorizontal className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />
          </div>
            <div className="flex-1 p-2"><h1 className="font-bold text-3xl text-center">ችቦ</h1></div>
            <div className="flex-2 p-2">
              <div className="flex justify-between">
                <Settings className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />
                <Info className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />
                
                <CircleUserRound className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />
              </div>
            </div>
          </div>
          <div className="py-10 flex-grow overflow-y-auto">
            <div className="max-w-lg mx-auto bg-slate-10 rounded-md p-100 space-y-6">
              <TagBar />
              {children}
              <Toaster />
            </div>
          </div>
          <div className="fixed left-0 right-0 bottom-0 max-w-lg mx-auto bg-slate-50 py-4 px-6 z-10">
            <NavBar />
          </div>
        </div>
      </body>
    </html>
  );
}
