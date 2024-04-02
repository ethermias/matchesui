import * as React from "react"
import { Settings } from "lucide-react"
import CustomSheet from "./customSheet"
import SettingItems from "./settingItems"

function Setting() {
    function handleCallback(){}
    return (
        <CustomSheet
            handleCallback={handleCallback}
            side="right"
            header={<Settings className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />}
            content={<SettingItems className="px-4" />}
        />
    )
}

export default Setting