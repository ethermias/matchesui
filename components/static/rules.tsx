import BasicCard from "../basic/basicCard";
import { Scale } from "lucide-react";
import BasicIcon from "../basic/basicIcon";
const Title = () => <BasicIcon label={` Rules to determine the Winner`}><Scale /></BasicIcon>
export default function Rules() {
    return (
        <BasicCard title={<Title />}>
            <div className="space-y-2">
                <div className="grid grid-cols-2 gap-0">
                    <div>
                        <h1 className="text-sm font-bold mb-1">The Player</h1>
                        <div className="p-0">+7 score a goal</div>
                        <div className="p-0">+3 assist a goal</div>
                        <div className="p-0">+7 saved a penalty</div>
                        <div className="p-0">-3 missed a penalty</div>
                        <div className="p-0">-1 GK conceded a goal</div>
                        <div className="p-0">-2 red card</div>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold mb-1">Player Team</h1>
                        <div className="p-0">+2 win the game</div>
                        <div className="p-0">-1 lost the game</div>
                        <div className="p-0">+1 score a goal</div>
                        <div className="p-0">-1 conceded a goal</div>
                        <div className="p-0">-1 red card</div>
                    </div>
                </div>
                <h3 className="text-xs mb-0">*Formation 4-4-2 (The rule will be different for formation)</h3>
            </div>
        </BasicCard>
    );
}
