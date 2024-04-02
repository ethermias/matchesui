'use client'
import { useToast } from "@/components/ui/use-toast"
import { CircleUserRound, Info, Settings, SlidersHorizontal } from "lucide-react";
import User from "./User";

export default function Home() {
    const { toast } = useToast()
    const handleClick = () => {
        toast({
            title: "Coming soon after login",
            description: "This feature will be implemented"
        })
    }

    return (
        <div className="flex fixed left-0 right-0 max-w-lg mx-auto bg-slate-50 py-4 px-6 z-10">
            <div onClick={handleClick} className="flex-2 p-4 style={{ cursor: 'pointer' }}">
                <SlidersHorizontal
                    className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2"
                />
            </div>
            <div className="flex-1 p-2"><h1 className="font-bold text-3xl text-center">ችቦ</h1></div>
            <div className="flex-2 p-2">
                <div className="flex justify-between">
                    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                        <Settings className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />
                    </div>
                    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                        <Info className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />
                    </div>
                    <User/>

                </div>
            </div>
        </div>
    )
}
