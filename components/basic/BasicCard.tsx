
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "../ui/card";

export default function BasicCard({ children, title, description = '' }: { children: ReactNode, title: ReactNode, description?: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
          {children}
      </CardContent>
    </Card>

  );
}