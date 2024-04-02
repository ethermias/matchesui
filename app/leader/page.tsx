'use client'
import { Trophy } from "lucide-react"
import Leaders from "../../components/leader/leaders"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="space-y-2">
    <div className="grid grid-cols-2 gap-0">
    <Label> Match30 Winner was the office and koyen kayen with 25 point</Label>
    <Trophy className="text-gray-600 hover:text-gray-800 cursor-pointer" /> 
    </div>
    </div>
  )
}
