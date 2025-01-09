import DormitoryTent from '../assets/tent/dormitory-tent.jpg';
import DeluxeCottageTent from '../assets/tent/deluxe-cottage-tent.webp';
import PremiumCottageTent from '../assets/tent/premium-cottage-tent.webp';

import Tent1 from '../assets/tent/dormitory-tent.jpg';
import Tent2 from '../assets/tent/deluxe-cottage-tent.webp';
import Tent3 from '../assets/tent/premium-cottage-tent.webp';

import StandardRoom from '../assets/room/standard-room.jpg';
import DeluxeRoom from '../assets/room/deluxe-room.jpg';
import SuperDeluxeRoom from '../assets/room/super-deluxe-room.webp';
import FamilyRoom from '../assets/room/family-room.webp';
import SuiteRoom from '../assets/room/suite-room.jpg';

import TentVideo from '../assets/tent-video.mp4';

import LeteHanumanMandir from '../assets/tourist-place/lete-hanuman-mandir.jpeg';
import Kumbh from '../assets/tourist-place/kumbh.jpeg';
import AshokaPillar from '../assets/tourist-place/ashoka-pillar.jpg';

import TentExplore from '../assets/mahakumbh/tent.jpg';
import HotelExplore from '../assets/mahakumbh/hotel.jpg'

import DormitoryTentIcon from '../assets/icon/dormitory-tent.png';
import HotelIcon from '../assets/icon/hotel.png';

const tentBooking = {
    name: "Tent Booking",
    images: [
        Tent1,
        Tent2,
        Tent3,
        TentVideo,
    ],
    facilities: [
        "100% Safe & Hygienic",
        "24x7 Assistance",
        "Restaurant Dining",
        "Air Conditioning / Heating",
        "Beach Activities",
        "Water Sports",
        "Guided Tours",
        "Beach Bar",
        "Evening Entertainment",
        "Kids Area",
        "Conference Facility",
        "Doctor on Call",
        "Waterside Spa",
        "Well Appointed Toiletries",
    ],
    activities: {
        "Water Sports":
            "Make the most of your visit and head down for a range of exciting motorised and non-motorised watersports.",
        Recreation:
            "Rifle Shooting, Archery, ATVs, Bicycles, Beach Volleyball, etc.",
        "Evening Entertainment":
            "Entertainment begins with sun down music flowing into curated cultural performances & winding with a selection of romantic melodies.",
        "Yoga Workshops":
            "Indulge in learning while holidaying from experts of sand art, yoga, zumba & wellness, surfing, etc.",
        "Culinary Experience":
            "Enjoy an amazing selection of global cuisines with delicious, exciting & creative pre-designed menus spread over the various meals with optional beach side bar, evening barbeques or chai-tapri to engage with!",
        "Guided Tours":
            "Invent a new road to explore the unexplored with our friendly and professional guided tours.",
        Spa: "Waterside Spa is a relaxed massage centre offering a multitude of wellness treatments.",
        Conferencing:
            "The Eco Retreat conferencing comes with a special venue to conduct MICE / Training programs in a separate conference hall with 150 people capacity.",
        "Private Celebrations":
            "Celebrate your momentus occasions by booking exclusive areas for lunches and dinners like our Elevated Machaan Decks, Beachside Cabanas, etc.",
    },
    rooms: [
        {
            name: "Standard Room",
            images: [StandardRoom],
            facilities: [
                "Air Conditioning",
                "WiFi",
                "King-Size Bed",
                "En Suite Bathroom",
                "Complimentary Breakfast",
            ],
        },
        {
            name: "Deluxe Room",
            images: [DeluxeRoom],
            facilities: [
                "Private Patio",
                "24x7 Assistance",
                "Spacious Interiors",
                "King-Size Bed",
                "Beach View",
            ],
        },
        {
            name: "Super Deluxe Room",
            images: [SuperDeluxeRoom],
            facilities: [
                "Private Patio",
                "24x7 Assistance",
                "Spacious Interiors",
                "King-Size Bed",
                "Beach View",
            ],
        },
        {
            name: "Suite Room",
            images: [SuiteRoom],
            facilities: [
                "Private Patio",
                "24x7 Assistance",
                "Spacious Interiors",
                "King-Size Bed",
                "Beach View",
            ],
        },
        {
            name: "Family Room",
            images: [FamilyRoom],
            facilities: [
                "Private Patio",
                "24x7 Assistance",
                "Spacious Interiors",
                "King-Size Bed",
                "Beach View",
            ],
        },
    ],
    transports: [
        {
            name: "Sedan",
        },
        {
            name: "Ertiga",
        },
        {
            name: "Crysta",
        },
        {
            name: "Tempo Traveller",
        },
        {
            name: "Station Pickup & Drop",
        },
        {
            name: "Airport Pickup & Drop",
        },
        {
            name: "Local Sight Seeing",
        },
        {
            name: "Intercity Transfers",
        },
    ],
    tents: [
        {
            name: "Dormitory Tent",
            images: [DormitoryTent],
            facilities: [
                "Air Conditioning",
                "WiFi",
                "King-Size Bed",
                "En Suite Bathroom",
                "Complimentary Breakfast",
            ],
        },
        {
            name: "Deluxe Cottage Tent",
            images: [DeluxeCottageTent],
            facilities: [
                "Private Patio",
                "24x7 Assistance",
                "Spacious Interiors",
                "King-Size Bed",
                "Beach View",
            ],
        },
        {
            name: "Premium Cottage Tent",
            images: [PremiumCottageTent],
            facilities: [
                "Private Patio",
                "24x7 Assistance",
                "Spacious Interiors",
                "King-Size Bed",
                "Beach View",
            ],
        },
    ],
    cottages: [
        { exploreImages: TentExplore }, // This is the first element, used only for the explore image
        {
            name: "Dormitory Tent",
            icon: DormitoryTentIcon,
            description: "With a comfortable twin / double bed along with a spacious porch and attached bathroom.",
        },
        {
            name: "Deluxe Cottage Tent",
            icon: DormitoryTentIcon,
            description: "Comfortable twin / double bed with a spacious sitting space to relax and en suite bathroom.",
        },
        {
            name: "Premium Cottage Tent",
            icon: DormitoryTentIcon,
            description: "A king-sized bedroom with a living room and a private dining area.",
        },
    ],
    hotelRooms: [
        { exploreImages: HotelExplore }, // This is the first element, used only for the explore image
        {
            name: "Standard Room",
            icon: HotelIcon,
            description: "With a comfortable twin / double bed along with a spacious porch and attached bathroom.",
        },
        {
            name: "Deluxe Room",
            icon: HotelIcon,
            description: "Comfortable twin / double bed with a spacious sitting space to relax and en suite bathroom.",
        },
        {
            name: "Super Deluxe Room",
            icon: HotelIcon,
            description: "A king-sized bedroom with a living room and a private dining area.",
        },
        {
            name: "Suite Room",
            icon: HotelIcon,
            description: "A king-sized bedroom with a living room and a private dining area.",
        },
        {
            name: "Family Room",
            icon: HotelIcon,
            description: "A king-sized bedroom with a living room and a private dining area.",
        },
    ],
    // activities: [
    //     {
    //         name: "Water Sports",
    //         icon: Activity1,
    //         description: "Make the most of your visit and head down for a range of exciting motorised and non-motorised watersports.",
    //     },
    //     {
    //         name: "Recreation",
    //         icon: Activity2,
    //         description: "Rifle Shooting, Archery, ATVs, Bicycles, Beach Volleyball, etc.",
    //     },
    //     {
    //         name: "Evening Entertainment",
    //         icon: Activity3,
    //         description: "Entertainment begins with sun down music flowing into curated cultural performances & winding with a selection of romantic melodies.",
    //     },
    //     {
    //         name: "Workshops",
    //         icon: Activity4,
    //         description: "Indulge in learning while holidaying from experts of sand art, yoga, zumba & wellness, surfing, etc.",
    //     },
    //     {
    //         name: "Culinary Experience",
    //         icon: Activity5,
    //         description: "No holiday is complete without a delightful culinary experience. Enjoy an amazing selection of global cuisines with delicious, exciting & creative pre-designed menus spread over the various meals with optional beach side bar, evening barbeques or chai-tapri to engage with!",
    //     },
    //     {
    //         name: "Guided Tours",
    //         icon: Activity6,
    //         description: "Invent a new road to explore the unexplored with our friendly and professional guided tours.",
    //     },
    //     {
    //         name: "Waterside Spa",
    //         icon: Activity7,
    //         description: "Waterside Spa is a relaxed massage centre offering a multitude of wellness treatments.",
    //     },
    //     {
    //         name: "Conferencing",
    //         icon: Activity8,
    //         description: "The Eco Retreat conferencing comes with a special venue to conduct MICE / Training programs in a separate conference hall with 150 people capacity.",
    //     },
    //     {
    //         name: "Private Celebrations",
    //         icon: Activity9,
    //         description: "Celebrate your momentus occasions by booking exclusive areas for lunches and dinners like our Elevated Machaan Decks, Beachside Cabanas, etc.",
    //     },
    // ],
     howToReach:  {
        byAir: [
            {
                airport: "Allahabad Domestic Airport",
                distance: "15.2 Km",
                time: "33 Mins",
            },
            {
                airport: "Lal Bahadur Shastri Airport, Varanasi",
                distance: "126.7 Km",
                time: "2 Hours 17 Mins",
            },
            {
                airport: "Chaudhary Charan Singh Airport, Lucknow",
                distance: "280.9 Km",
                time: "5 Hours 6 Mins",
            },
        ],
        byRail: [
            {
                station: "Prayagraj Railway Junction",
                distance: "9.7 Km",
                time: "27 Mins",
            },
            {
                station: "Naini Railway Station",
                distance: "8.5 Km",
                time: "25 Mins",
            },
            {
                station: "Prayagraj Chheoki Junction",
                distance: "14 Km",
                time: "31 Mins",
            },
            {
                station: "Subedarganj Railway Station",
                distance: "14 Km",
                time: "34 Mins",
            },
        ],
        byRoad: [
            {
                city: "Varanasi",
                distance: "116 Km",
                time: "2 Hours 16 Mins",
            },
            {
                city: "Lucknow",
                distance: "274 Km",
                time: "5 Hours 7 Mins",
            },
            {
                city: "Kanpur",
                distance: "209 Km",
                time: "4 Hours 31 Mins",
            },
            {
                city: "Patna",
                distance: "363 Km",
                time: "7 Hours 31 Mins",
            },
            {
                city: "Ranchi",
                distance: "531 Km",
                time: "10 Hours 50 Mins",
            },
            {
                city: "Bhopal",
                distance: "678 Km",
                time: "12 Hours 17 Mins",
            },
            {
                city: "Jaipur",
                distance: "719 Km",
                time: "13 Hours 11 Mins",
            },
            {
                city: "Kolkata",
                distance: "787 Km",
                time: "16 Hours 39 Mins",
            },
            {
                city: "Delhi",
                distance: "677 Km",
                time: "11 Hours 41 Mins",
            },
        ],
    },
    
    topAttractions: [
        {
            name: "Lete Hanuman Mandir",
            image: LeteHanumanMandir
        },
        {
            name: "Kumbh",
            image: Kumbh
        },
        {
            name: "Ashoka Pillar",
            image: AshokaPillar
        },
    ],
}

export default tentBooking;