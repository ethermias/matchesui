'use client'
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { Tag } from "@/types/tag";

export default function TagBar() {
   const tags: Tag[] = [
    {
      id: 1,
      title: "Premer Legue 👍🏻",
      completed: false,
    },
    {
      id: 2,
      title: "Matchday 30 📺",
      completed: false,
    }
  ];
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
