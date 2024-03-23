import Link from "next/link";
import { Trophy,CalendarCheck2, Scale } from "lucide-react";

export default function NavBar() {
  return (
    <div className="text-center space-y-2">
      <div className="flex items-center space-x-4">
        <Link href="/">
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
      </div>
    </div>
  );
}
