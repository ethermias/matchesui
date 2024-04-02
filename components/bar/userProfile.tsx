import * as React from "react"
import { CircleUserRound } from "lucide-react"
import CustomSheet from "./customSheet"
import UserProfileItems from "./userProfileItems"

function UserProfile() {
    function handleCallback(){}
    return (
        <CustomSheet
            handleCallback={handleCallback}
            side="right"
            header={<CircleUserRound className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />}
            content={<UserProfileItems className="px-4" />}
        />
    )
}

export default UserProfile