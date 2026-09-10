export const site = {
  name: "Namaste Guest House",
  shortName: "Namaste",
  location: "Ilupeju, Lagos",
  fullLocation: "Ilupeju, Lagos, Nigeria",
  tagline: "Feel at Home in Lagos.",
  supportingCopy:
    "A comfortable place to stay, rest and experience Lagos.",
  // Demo/placeholder contact details — to be replaced with the real
  // property details before this concept goes live.
  whatsappNumber: "2348000000000",
  whatsappDisplay: "+234 800 000 0000",
  phoneDisplay: "+234 800 000 0000",
  email: "hello@namasteguesthouse.demo",
  mapsQuery: "Namaste Guest House, Ilupeju, Lagos, Nigeria",
};

export const navLinks = [
  { label: "Stay", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#enquiry" },
];

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
];

// Curated, pre-verified stock photography standing in for the property's
// own photography. Each URL was visually checked against its label (bedroom,
// exterior, dining, etc.) before use. Clearly labelled as demo imagery
// throughout the site.
export const images = {
  hero: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80", // warm bedroom, plants through glass doors
  welcome: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1400&q=80", // cosy lounge/bedroom corner
  rooms: {
    classic: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80", // simple twin bedroom
    deluxe: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80", // modern wood-accent bedroom
    suite: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=1200&q=80", // moody bedroom with seating area
  },
  experience: {
    comfort: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&q=80", // bed with warm lamps
    hospitality: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80", // dining/service
    location: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&q=80", // exterior establishing shot
    relaxation: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=80", // spa relaxation
  },
  gallery: [
    { src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80", label: "Rooms" },
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80", label: "Exterior" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80", label: "Common Areas" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80", label: "Dining" },
    { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80", label: "Surroundings" },
    { src: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=1200&q=80", label: "Rooms" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", label: "Exterior" },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", label: "Common Areas" },
    { src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80", label: "Rooms" },
    { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80", label: "Surroundings" },
  ],
};

export const rooms = [
  {
    slug: "classic-room",
    name: "Classic Room",
    description:
      "A cosy, comfortable space designed for restful nights and easy mornings — simple comforts, done well.",
    amenities: ["Air conditioning", "Free Wi‑Fi", "Flat‑screen TV", "Private bathroom", "Daily housekeeping"],
    image: images.rooms.classic,
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    description:
      "A little more room to breathe, with warm finishes and a quiet corner to unwind after a long day.",
    amenities: ["Air conditioning", "Free Wi‑Fi", "Work desk", "Flat‑screen TV", "Private bathroom"],
    image: images.rooms.deluxe,
  },
  {
    slug: "executive-suite",
    name: "Executive Suite",
    description:
      "Our most spacious concept — for guests who want a little extra comfort during their stay in Lagos.",
    amenities: ["Air conditioning", "Free Wi‑Fi", "Seating area", "Flat‑screen TV", "Complimentary toiletries"],
    image: images.rooms.suite,
  },
];

export const amenities = [
  { label: "Free Wi‑Fi" },
  { label: "Air Conditioning" },
  { label: "24/7 Front Desk" },
  { label: "Free Parking" },
  { label: "Daily Housekeeping" },
  { label: "On‑site Security" },
];
