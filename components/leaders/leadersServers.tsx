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
    username: string,
    tags: string,
    formation: string,
    submited: string,
    score: number
}
// const URL = 'http://127.0.0.1:8000'
// export async function getData() {
//     const res = await fetch(`${URL}/api/leaders`);

//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
// }

export default async function LeaderServers() {
 // const { leaders, matchday, total } = await getData()
 // const title = total ? `Top leader for Matchday ${matchday} 📺 total user ${total}` : "Top leader for Matchday 📺"
  return (
    <div>home</div>
    // <Table>
    //   <TableCaption>{title}</TableCaption>
    //   <TableHeader>
    //     <TableRow>
    //       <TableHead className="w-[100px]">User</TableHead>
    //       <TableHead>Formation</TableHead>
    //       <TableHead className="w-[100px]">Tags</TableHead>
    //       <TableHead className="w-[100px]">Submitted</TableHead>
    //       <TableHead className="text-right">score</TableHead>
    //     </TableRow>
    //   </TableHeader>
    //   <TableBody>
    //     {leaders && leaders.map((leader: TLeader ) => (
    //       <TableRow key={leader.tags}>
    //         <TableCell className="font-medium">{leader.username}</TableCell>
    //         <TableCell>{leader.formation}</TableCell>
    //         <TableCell className="font-medium">{leader.tags}</TableCell>
    //         <TableCell className="font-medium">{leader.submited}</TableCell>
    //         <TableCell className="text-right">{leader.score}</TableCell>
    //       </TableRow>
    //     ))}
    //   </TableBody>
    //   <TableFooter>
      
    //   </TableFooter>
    // </Table>
  )
}
