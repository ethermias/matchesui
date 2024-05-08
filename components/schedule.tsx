
import BasicCard from "@/components/BasicCard";
import { CalendarCheck2 } from "lucide-react";
import { matchweek } from "@/constants";
import BasicIcon from "./BasicIcon";
const Title = () => <BasicIcon label={` ${matchweek} ሳምንት`}><CalendarCheck2/></BasicIcon>
const week = [
  'Fulham vs Manchester City',
  'AFC Bournemouth vs Brentford',
  'Everton vs Sheffield United',
  'Newcastle United vs Brighton & Hove Albion',
  'Tottenham Hotspur vs Burnley',
  'West Ham United vs Luton Town',
  'Wolverhampton Wanderers vs Crystal Palace',
  'Nottingham Forest vs Chelsea',
  'Manchester United vs Arsenal',
  'Aston Villa vs Liverpool'
]
export default function Schedule() {
  return (
    <BasicCard title={<Title/>}>
      {week.map((p) => <div key={p}>{p}</div>)}
    </BasicCard>
  );
}