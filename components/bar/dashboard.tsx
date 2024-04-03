import * as React from "react"
import { SlidersHorizontal } from "lucide-react"
import CustomSheet from "./customSheet"
import DashboardItems from "./dashboardItems"

function Dashboard() {
    function handleCallback(){}
    return (
        <CustomSheet
            handleCallback={handleCallback}
            side="left"
            header={<SlidersHorizontal className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />}
            content={<DashboardItems className="px-4" />}
            title={'Dashboard'}
            description={'Subscriptions'}
        />
    )
}

export default Dashboard