import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Pen,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"


const HeaderProfileMenu: React.FC = () => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-0 border-0 focus-visible:ring-0 focus-visible:outline-none">
                    <span className='flex items-center gap-2'>
                        <Image className='w-8 h-8 rounded-full ring-1 ring-offset-1' src={'/images/avater/profile1.png'} width={30} height={30} alt='User' />
                        <span>Rana</span>
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="flex flex-col gap-2">
                    <DropdownMenuItem className="hover:bg-gray-200 rounded-md  cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-200 rounded-md  cursor-pointer">
                        <Pen className="mr-2 h-4 w-4" />
                        <span>Edit Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-200 rounded-md  cursor-pointer">
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Add Listing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-200 rounded-md  cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Setting</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-200 rounded-md  cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HeaderProfileMenu