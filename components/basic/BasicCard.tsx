
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "../ui/card";

type TBasicCard = {
  children: ReactNode,
  title?: ReactNode,
  description?: ReactNode
}
export default function BasicCard({ children, title = <></>, description = <></> }: TBasicCard) {
  return (
    <Card>
      <CardHeader>
        { title !== <></> && <CardTitle>{title}</CardTitle> }
        { description !== <></> && <CardDescription>{description}</CardDescription> }
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>

  );
}