
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

const MobileMenu = () => {
    return (
        <Sheet key={'left'}>
            <SheetTrigger asChild>
                <span className=" md:hidden p-1 rounded-md border border-gray-200 cursor-pointer">
                    <Menu />
                </span>
            </SheetTrigger>
            <SheetContent side={'left'} className="bg-white">
                <SheetHeader>
                    <SheetTitle className="text-left">Edit profile</SheetTitle>
                    <SheetDescription className="text-left">
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <ul className="flex flex-col gap-3">
                        <li><Link className="py-2 px-3 hover:bg-gray-100 text-gray-800 " href={'/'}>Home</Link></li>
                        <li><Link className="py-2 px-3 hover:bg-gray-100 text-gray-800 " href={'/about'}>About</Link></li>
                        <li><Link className="py-2 px-3 hover:bg-gray-100 text-gray-800 " href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>

            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu