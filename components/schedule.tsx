
import BasicCard from "@/components/BasicCard";
import { CalendarCheck2 } from "lucide-react";
import { matchweek } from "@/constants";
import BasicIcon from "./BasicIcon";
const Title = () => <BasicIcon label={` ${matchweek} ሳምንት`}><CalendarCheck2/></BasicIcon>
const week = [
  'West Ham United vs Liverpool',
  'Fulham vs Crystal Palace',
  'Manchester United vs Burnley',
  'Newcastle United vs Sheffield United',
  'Wolverhampton Wanderers vs Luton Town',
  'Everton vs Brentford',
  'Aston Villa vs Chelsea',
  'AFC Bournemouth vs Brighton & Hove Albion',
  'Tottenham Hotspur vs Arsenal',
  'Nottingham Forest vs Manchester City'
]
export default function Schedule() {
  return (
    <BasicCard title={<Title/>}>
      {week.map((p) => <div key={p}>{p}</div>)}
    </BasicCard>
  );
}