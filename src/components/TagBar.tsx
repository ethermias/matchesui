'use client'
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import useTags from "../hooks/useTags";

export default function TagBar() {
  const {
    tags
  } = useTags();
  
  return (
    <div className="text-center space-y-2">
      <div className="flex items-center space-x-4">
        <Link href="/tags">
          <CircleUserRound className="text-gray-600 hover:text-gray-800 cursor-pointer" />
        </Link>
        {tags.map((t) => 
          <Link href="/tags">
          {t.title}
          </Link>
       )}
      </div>
    </div>
  );
}
