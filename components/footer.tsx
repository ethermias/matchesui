'use client'
import Link from "next/link";
import { Trophy, CalendarCheck2, Scale, LucideHome } from "lucide-react";
import { Label } from "./ui/label";
import { useTheme } from 'next-themes';
import { version } from "@/constants";

const bgColor = (tm: string | undefined) => tm == 'light' ?  'bg-slate-100' : 'bg-gray-900'
export default function Footer() {
  const { theme } = useTheme()

  const tmName = `fixed left-0 right-0 bottom-0 max-w-lg mx-auto py-4 px-6 z-10 ${bgColor(theme)}`
  return ( 
      <div className={tmName}>
        <div className="text-center space-y-2">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <LucideHome className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </Link>

            <Link href="/changelog">
              <Label>{version}</Label>
            </Link>
          </div>
        </div>
      </div>
  );
}
