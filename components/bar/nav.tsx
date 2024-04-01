import Link from "next/link";
import { Trophy,CalendarCheck2, Scale, LucideHome } from "lucide-react";
import { Label } from "../ui/label";
import { Toaster } from "@/components/ui/toaster"

export default function NavBar() {
  return (
    <>
    <Toaster />
    <div className="text-center space-y-2">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <LucideHome className="text-gray-600 hover:text-gray-800 cursor-pointer" />
        </Link>
        <Link href="/leader">
          <Trophy className="text-gray-600 hover:text-gray-800 cursor-pointer" />
        </Link>
        <Link href="/rules">
          <Scale className="text-gray-600 hover:text-gray-800 cursor-pointer" />
        </Link>
        <Link href="/schedule">
          <CalendarCheck2
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
        </Link>
        <Link href="/changelog">
          <Label>v0.1.2</Label>
        </Link>
      </div>
    </div>
    </>
  );
}
