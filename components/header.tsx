'use client'
import Setting from "./bar/setting";
import Dashboard from "./bar/dashboard";
import UserProfile from "./bar/userProfile";
import { useTheme } from 'next-themes';

//const bgColor = (tm: string | undefined) => tm == 'light' ?  'bg-slate-100' : 'bg-gray-900'
const bgColor = (tm: string | undefined) => tm == 'light' ?  'bg-slate-100' : 'bg-gray-900'

export default function Home() {
    const { theme } = useTheme()
    const tmName = `flex fixed left-0 right-0 max-w-lg mx-auto py-4 px-6 z-10 ${bgColor(theme)}`
    console.log(tmName)
    return (
        <div className={tmName}>
            <Dashboard />
            <div className="flex-1 p-2">
                <h1 className="font-bold text-3xl text-center">ችቦ</h1>
            </div>
            <div className="flex-2 p-2">
                <div className="flex justify-between">
                    <Setting />
                    <UserProfile />
                </div>
            </div>
        </div>
    )
}
