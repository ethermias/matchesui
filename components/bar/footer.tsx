import Link from "next/link";
import { Trophy, CalendarCheck2, Scale, LucideHome } from "lucide-react";
import { Label } from "../ui/label";

export default function NavBar() {
  return ( 
      <div className="fixed left-0 right-0 bottom-0 max-w-lg mx-auto bg-slate-50 py-4 px-6 z-10">
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
      </div>
  );
}
