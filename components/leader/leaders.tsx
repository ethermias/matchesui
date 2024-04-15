'use client'
import tags from './tags.json'
import { matchweek } from "@/constants";
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
import Moment from 'react-moment'
import { Label } from '../ui/label'


interface TLeader  {
    tag: string,
    score: number,
    submittedAt: string
}
const sortLeaders = (theLeaders: Array<TLeader> | []) => {
  if (theLeaders.length > 1){
    return theLeaders.sort((a, b) => b.score - a.score) 
  } 
    return theLeaders
}

const Leaders= () => {
const title = `Top leader for Matchday ${matchweek} 📺`

const sortedleaders = sortLeaders(tags)
  return (<>
     <Label>📍 Winner Matchday ${matchweek} 📺 </Label>
    
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableCaption>📍 Score breaking will be available soon </TableCaption>  
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Tags</TableHead>
          <TableHead className="w-[200px]">Submitted</TableHead>
          <TableHead className="text-right">score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedleaders.map((leader: TLeader ) => (
          <TableRow key={leader.tag}>
            <TableCell className="font-small">{leader.tag}</TableCell>
            <TableCell className="font-small"><Moment>{new Date(parseInt(leader.submittedAt))}</Moment></TableCell>
            <TableCell className="text-right">{leader.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

export default Leaders;
