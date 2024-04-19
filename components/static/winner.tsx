
import BasicCard from "../basic/basicCard";
import { Trophy } from "lucide-react";
import { winner, winnerPoint, matchweek } from "@/constants";
import BasicIcon from "../basic/basicIcon";
const Title = () => <BasicIcon label={` ${winner} is the week ${matchweek - 1} Winner`}><Trophy/></BasicIcon>

export default function Winner() {
  return (
    <BasicCard title={<Title/>}>
       points {winnerPoint}
    </BasicCard>
  );
}