import leaders from './tags_result_short.json'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"


interface TLeader  {
    tag: string,
    score: number,
    submited: string
}

export default async function LeaderServers() {
const title = "Top leader for Matchday 31 📺"

const sortedLeaders = leaders && leaders.length !==0 ?  leaders.sort((a, b) => b.score - a.score) : []
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableCaption>📍 Score breaking will be available on version v0.1.3 </TableCaption>  
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Tags</TableHead>
          <TableHead className="w-[200px]">Submitted</TableHead>
          <TableHead className="text-right">score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedLeaders.map((leader: TLeader ) => (
          <TableRow key={leader.tag}>
            <TableCell className="font-small">{leader.tag}</TableCell>
            <TableCell className="font-small">{leader.submited}</TableCell>
            <TableCell className="text-right">{leader.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
