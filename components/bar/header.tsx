'use client'
import Setting from "./setting";
import Dashboard from "./dashboard";
import UserProfile from "./userProfile";

export default function Home() {
    return (
        <div className="flex fixed left-0 right-0 max-w-lg mx-auto bg-slate-100 py-4 px-6 z-10">
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
