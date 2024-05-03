
import BasicCard from "@/components/BasicCard";
import { CalendarCheck2 } from "lucide-react";
import { matchweek } from "@/constants";
import BasicIcon from "./BasicIcon";
const Title = () => <BasicIcon label={` ${matchweek} ሳምንት`}><CalendarCheck2/></BasicIcon>
const week = [
  'Arsenal vs AFC Bournemouth',
  'Brentford vs Fulham',
  'Burnley vs Newcastle United',
  'Sheffield United vs Nottingham Forest',
  'Manchester City vs Wolverhampton Wanderers',
  'Brighton & Hove Albion vs Aston Villa',
  'Chelsea vs West Ham United',
  'Liverpool vs Tottenham Hotspur',
  'Crystal Palace vs Manchester United',
]
export default function Schedule() {
  return (
    <BasicCard title={<Title/>}>
      {week.map((p) => <div key={p}>{p}</div>)}
    </BasicCard>
  );
}