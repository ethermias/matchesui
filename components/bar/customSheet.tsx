import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

interface CustomSheet {
    handleCallback: Function
    header: React.ReactNode;
    content: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right" | null | undefined
    title?: string
    description?: string
}
const CustomSheet: React.FC<CustomSheet> = ({ handleCallback, header, content, side='right', title='This is not functinal.', description='This is not functinal.'}) => {
    const [open, setOpen] = React.useState<boolean>(false)
    const handleSheetClose = () => {
        handleCallback()
        setOpen(false);
    };
    const handleUserClick = () => {
        setOpen(false);
    }

    return (<>
         <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
            <div onClick={handleUserClick} style={{ cursor: 'pointer' }}>
                 {header}
            </div> 
            </SheetTrigger>
            <SheetContent side={side}>
                <SheetHeader className="text-left">
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>
                        {description}
                    </SheetDescription>
                </SheetHeader>
                {content}
                <SheetFooter className="pt-2">
                    <SheetClose asChild>
                        <Button variant="outline" onClick={handleSheetClose}>Cancel</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
        </>
    )
}


export default CustomSheet