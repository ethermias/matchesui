import Link from "next/link";
import { Trophy, CalendarCheck2, Scale, LucideHome } from "lucide-react";
import { Label } from "../ui/label";

function DashboardItems({ className }: React.ComponentProps<"form">) {
    return (
        <div>
            <div>
                <Link href="/">
                    Home
                </Link>
            </div>
            <div>
                <Link href="/leader">
                    Leader
                </Link>
            </div>
            <div>
                <Link href="/rules">
                    Rules
                </Link>
            </div>
            <div>
                <Link href="/schedule">
                    Schedule
                </Link>
            </div>
        </div>

    )
}

export default DashboardItems