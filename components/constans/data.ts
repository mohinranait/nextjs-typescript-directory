import { FaAmbulance } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { RiSliceFill } from "react-icons/ri";
import { MdEventSeat } from "react-icons/md";
import { GiPencilBrush } from "react-icons/gi";
import { Map, Phone } from 'lucide-react'
import { BiLogoGmail } from "react-icons/bi";
import { BiMessageRoundedDetail } from "react-icons/bi";





export const categorys = [
    {
        _id: 1,
        name: 'Ambulance',
        icon: FaAmbulance,
    },
    {
        _id: 2,
        name: 'Travels',
        icon: IoIosAirplane,
    },
    {
        _id: 3,
        name: 'Resturent',
        icon: RiSliceFill,
    },
    {
        _id: 4,
        name: 'Events',
        icon: MdEventSeat,
    },
    {
        _id: 5,
        name: 'Arts',
        icon: GiPencilBrush,
    },
]

export const posts = [
    {
        _id: 1,
        title: 'Web Design',
        image: '/images/posts/2.jpeg',
        rating: 3,
    },
    {
        _id: 2,
        title: 'Web Development',
        image: '/images/posts/3.jpeg',
        rating: 4,
    },
    {
        _id: 3,
        title: 'Cafe in Boston',
        image: '/images/posts/4.jpg',
        rating: 1,
    },
    {
        _id: 4,
        title: 'Rent a Car in Texas',
        image: '/images/posts/5.jpeg',
        rating: 2,
    },
]

export const howWorks = [
    {
        _id: 1,
        title: 'Find Good Places',
        icon: Map,
    },
    {
        _id: 2,
        title: 'Contact The Owner',
        icon: BiLogoGmail,
    },
    {
        _id: 3,
        title: 'Live Chat with Owner',
        icon: BiMessageRoundedDetail,
    },
]