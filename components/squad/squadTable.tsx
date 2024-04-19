import { Player } from "@/types/player";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table";
import { CardContent, CardDescription, CardTitle } from "../ui/card";
import { Content } from "@/components/content";
import { ShoppingCart } from "lucide-react";

type TSquadTable ={
    squad: Array<Player>
    sum: number
}
export default function SquadTable ({ squad, sum }: TSquadTable){
    const fullPosition = (pos: string) => {
        switch (pos) {
          case 'G':
            return "Keeper";
          case 'D':
            return "Defender";
          case 'M':
            return "Midfielder";
          case 'F':
            return "Forward";
          default:
            return "";
        }
      };
    return (<>
        { squad.length > 0 && 
            <Content>
              <CardContent>
                {
                  <Table>
                    <TableCaption>Total ${sum}</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-lef tw-[300px]">Name</TableHead>
                        <TableHead className="w-[25px]">Postion</TableHead>
                        <TableHead className="text-right w-[125px]">Salary</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {squad.map((player: Player) => (
                        <TableRow key={player.id}>
                          <TableCell className="font-small">{player.displayName}</TableCell>
                          <TableCell className="font-small">{fullPosition(player.position)}</TableCell>
                          <TableCell className="text-right">${player.salary}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter></TableFooter>
                  </Table>
                }
              </CardContent>
            </Content>
            }
        </>
    )
}