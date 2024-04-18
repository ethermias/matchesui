
import BasicCard from "../basic/BasicCard";
import { Trophy } from "lucide-react";
import { winner, winnerPoint, matchweek } from "@/constants";
import BasicIcon from "../basic/BasicIcon";
const Title = () => <BasicIcon label={` ${winner} is the week ${matchweek - 1} Winner`}><Trophy/></BasicIcon>

export default function Winner() {
  return (
    <BasicCard title={<Title/>}>
       points {winnerPoint}
    </BasicCard>
  );
}