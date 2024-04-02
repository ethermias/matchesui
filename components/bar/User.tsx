import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CircleUserRound } from "lucide-react"

const UserDrawer = ({ open, setOpen }) => {
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (<>
         <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <CircleUserRound className="text-gray-600 hover:text-gray-800 cursor-pointer mr-2" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                        The login is not functinal.
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline" onClick={handleDrawerClose}>Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}

function User() {
    const [open, setOpen] = React.useState<Boolean>(false)
    const handleUserClick = () => {
        setOpen(true)
    }

    return (
        <div onClick={handleUserClick} style={{ cursor: 'pointer' }}>
           <UserDrawer open={open} setOpen={setOpen} />
        </div>
    )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    return (
        <form className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" defaultValue="ethermaisn@example.com" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="ethermias" />
            </div>
            <Button type="submit">Save changes</Button>
        </form>
    )
}

export default User