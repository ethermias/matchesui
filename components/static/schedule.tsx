
import BasicCard from "../basic/BasicCard";
import { CalendarCheck2 } from "lucide-react";
import { matchweek } from "@/constants";
import BasicIcon from "../basic/BasicIcon";
const Title = () => <BasicIcon label={` ${matchweek} ሳምንት`}><CalendarCheck2/></BasicIcon>
const week = [
  "Luton Town vs Brentford",
  "Sheffield United vs Burnley",
  "Wolverhampton Wanderers vs Arsenal",
  "Everton vs Nottingham Forest",
  "Aston Villa vs AFC Bournemouth",
  "Crystal Palace vs West Ham United",
  "Fulham vs Liverpool",
]
export default function Schedule() {
  return (
    <BasicCard title={<Title/>}>
      {week.map((p) => <div key={p}>{p}</div>)}
    </BasicCard>
  );
}