'use client'
import { useToast } from "@/components/ui/use-toast"
import { CircleUserRound, Info, Settings, SlidersHorizontal } from "lucide-react";

export default function Home() {
    const { toast } = useToast()
    const handleClick = () => {
        toast({
            title: "Coming soon after login",
            description: "This feature will be implemented"
          })
    };

    return (
        <div className="flex fixed left-0 right-0 max-w-lg mx-auto bg-slate-50 py-4 px-6 z-10">
            <div onClick={handleClick} className="flex-2 p-4 style={{ cursor: 'pointer' }}">
                <SlidersHorizontal
                    className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2"
                />
            </div>
            <div className="flex-1 p-2"><h1 className="font-bold text-3xl text-center">ችቦ</h1></div>
            <div className="flex-2 p-2">
                <div onClick={handleClick} className="flex justify-between style={{ cursor: 'pointer' }}">
                    <Settings
                        className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2"
                       // onClick={clickHandler}
                    />
                    <Info
                        className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2"
                       // onClick={clickHandler}
                    />

                    <CircleUserRound
                        className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2"
                       // onClick={clickHandler}
                    />
                </div>
            </div>
        </div>
    )
}
