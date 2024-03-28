'use client'
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { tags } from "../data/tags";

export default function TagBar() {

  return (
    <div className="text-center space-y-2">
      <div className="flex items-center space-x-4">
        <Link href="/tags">
          <CircleUserRound className="text-gray-600 hover:text-gray-800 cursor-pointer" />
        </Link>
        {tags.map((t) => 
          <Link href="/tags" key={t.id}>
          {t.title}
          </Link>
       )}
      </div>
    </div>
  );
}
