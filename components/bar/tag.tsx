'use client'
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { Tag } from "@/types/tag";
import Countdown from 'react-countdown';

export default function TagBar() {
   const targetDate = new Date("2024-04-02T11:26:00").getTime();
   const tags: Tag[] = [
    {
      id: 1,
      title: "Premer Legue 👍🏻",
      completed: false,
    },
    {
      id: 2,
      title: "Matchday 31 📺 ",
      completed: false,
    }
  ];
  return (
    <div className="text-center py-10 space-y-10">
      <div className="flex items-center space-x-4">
        <Link href="/tags">
          <CircleUserRound className="text-gray-600 hover:text-gray-800 cursor-pointer" />
        </Link>
        {tags.map((t) => 
          <Link href="/tags" key={t.id}>
          {t.title}
          </Link>
       )}
       <Countdown date={targetDate} />
      </div>
    </div>
  );
}
