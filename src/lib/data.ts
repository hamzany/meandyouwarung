// ============================================
// ME & YOU WARUNG — Static Data
// ============================================

export interface TourPackage {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  whatsappMessage: string;
}

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: "food" | "drink";
  image: string;
  whatsappMessage: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  category: string;
}

// WhatsApp number (include country code without +)
export const WHATSAPP_NUMBER = "6281917280551";

// Generate WhatsApp link
export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ============================================
// Tour Packages Data
// ============================================
export const tourPackages: TourPackage[] = [
  {
    id: "tour-1",
    title: "Tetebatu Panorama Walking",
    description:
      "Explore the breathtaking rice terraces and lush green landscapes of Tetebatu. Walk through traditional Sasak villages and enjoy stunning mountain views of Mount Rinjani.",
    price: "Rp 200.000",
    duration: "3-4 hours",
    image: "/images/tour-panorama.jpg",
    whatsappMessage:
      "Halo, saya tertarik dengan paket Tetebatu Panorama Walking. Bisa info lebih lanjut?",
  },
  {
    id: "tour-2",
    title: "Cooking Class",
    description:
      "Learn to cook authentic Sasak dishes with our local chef. From traditional spices to plating, experience the rich culinary heritage of Lombok.",
    price: "Rp 150.000",
    duration: "2-3 hours",
    image: "/images/tour-cooking.jpg",
    whatsappMessage:
      "Halo, saya tertarik dengan Cooking Class. Kapan jadwal terdekat?",
  },
  {
    id: "tour-3",
    title: "Coconut Oil & Coffee Process",
    description:
      "Witness the traditional process of making virgin coconut oil and Lombok coffee. A unique cultural experience you won't find anywhere else.",
    price: "Rp 100.000",
    duration: "2 hours",
    image: "/images/tour-coconut.jpg",
    whatsappMessage:
      "Halo, saya ingin ikut tur Coconut Oil & Coffee Process. Bisa booking?",
  },
  {
    id: "tour-4",
    title: "Massage & Spa",
    description:
      "Relax and rejuvenate with a traditional Sasak massage using natural oils and herbs. The perfect way to unwind after a day of exploring.",
    price: "Rp 120.000",
    duration: "1-2 hours",
    image: "/images/tour-spa.jpg",
    whatsappMessage:
      "Halo, saya ingin booking Massage & Spa. Apakah tersedia hari ini?",
  },
  {
    id: "tour-5",
    title: "Transport & Rental",
    description:
      "Need a ride? Rent a scooter or arrange private transport to explore Lombok at your own pace. Safe, reliable, and affordable.",
    price: "From Rp 75.000",
    duration: "Per day",
    image: "/images/tour-transport.jpg",
    whatsappMessage:
      "Halo, saya ingin sewa kendaraan. Apa saja pilihan yang tersedia?",
  },
  {
    id: "tour-6",
    title: "Waterfall Adventure",
    description:
      "Discover hidden waterfalls nestled in the tropical jungle of Tetebatu. Trek through nature and cool off in crystal-clear natural pools.",
    price: "Rp 175.000",
    duration: "4-5 hours",
    image: "/images/tour-waterfall.jpg",
    whatsappMessage:
      "Halo, saya ingin ikut Waterfall Adventure. Kapan bisa berangkat?",
  },
];

// ============================================
// Menu Items Data
// ============================================
export const menuItems: MenuItem[] = [
  {
    id: "food-1",
    title: "Nasi Lalapan",
    description:
      "Traditional Indonesian rice dish with fresh vegetables, sambal, and your choice of fried chicken or fish.",
    price: "Rp 25.000",
    category: "food",
    image: "/images/menu-lalapan.jpg",
    whatsappMessage: "Halo, saya ingin pesan Nasi Lalapan. Bisa delivery?",
  },
  {
    id: "food-2",
    title: "Jackfruit Curry",
    description:
      "Aromatic curry made with young jackfruit, coconut milk, and traditional Sasak spices. A local favorite!",
    price: "Rp 30.000",
    category: "food",
    image: "/images/menu-jackfruit.jpg",
    whatsappMessage: "Halo, saya ingin pesan Jackfruit Curry.",
  },
  {
    id: "food-3",
    title: "Spring Roll",
    description:
      "Crispy spring rolls filled with fresh vegetables and served with our homemade peanut sauce.",
    price: "Rp 20.000",
    category: "food",
    image: "/images/menu-springroll.jpg",
    whatsappMessage: "Halo, saya ingin pesan Spring Roll.",
  },
  {
    id: "food-4",
    title: "Wood-Fired Pizza",
    description:
      "Authentic pizza baked in our traditional wood-fired oven. Choose from Margherita, Veggie, or BBQ Chicken.",
    price: "Rp 45.000",
    category: "food",
    image: "/images/menu-pizza.jpg",
    whatsappMessage: "Halo, saya ingin pesan Pizza. Apa saja topping yang tersedia?",
  },
  {
    id: "food-5",
    title: "Nasi Goreng Special",
    description:
      "Our signature fried rice with egg, chicken, prawns, and a blend of special spices.",
    price: "Rp 28.000",
    category: "food",
    image: "/images/menu-nasigoreng.jpg",
    whatsappMessage: "Halo, saya ingin pesan Nasi Goreng Special.",
  },
  {
    id: "food-6",
    title: "Mie Goreng",
    description:
      "Stir-fried noodles with fresh vegetables, egg, and aromatic spices. Served with prawn crackers.",
    price: "Rp 25.000",
    category: "food",
    image: "/images/menu-miegoreng.jpg",
    whatsappMessage: "Halo, saya ingin pesan Mie Goreng.",
  },
  {
    id: "drink-1",
    title: "Fresh Coconut",
    description:
      "Straight from the tree! Fresh young coconut served chilled — the most refreshing tropical drink.",
    price: "Rp 15.000",
    category: "drink",
    image: "/images/menu-coconut.jpg",
    whatsappMessage: "Halo, saya ingin pesan Fresh Coconut.",
  },
  {
    id: "drink-2",
    title: "Kopi Lombok",
    description:
      "Locally grown and traditionally roasted Lombok coffee. Rich, bold, and unforgettable.",
    price: "Rp 12.000",
    category: "drink",
    image: "/images/menu-kopi.jpg",
    whatsappMessage: "Halo, saya ingin pesan Kopi Lombok.",
  },
  {
    id: "drink-3",
    title: "Fresh Juice",
    description:
      "Made-to-order fresh fruit juice. Choose from mango, pineapple, watermelon, or mixed fruit.",
    price: "Rp 18.000",
    category: "drink",
    image: "/images/menu-juice.jpg",
    whatsappMessage: "Halo, saya ingin pesan Fresh Juice. Rasa apa saja?",
  },
  {
    id: "drink-4",
    title: "Lemon Ginger Tea",
    description:
      "Warm herbal tea with fresh lemon, ginger, and local honey. Perfect for relaxation.",
    price: "Rp 12.000",
    category: "drink",
    image: "/images/menu-tea.jpg",
    whatsappMessage: "Halo, saya ingin pesan Lemon Ginger Tea.",
  },
];

// ============================================
// Gallery Data
// ============================================
export const galleryImages: GalleryImage[] = [
  { id: "gal-1", src: "/images/gallery-1.jpg", caption: "Sunrise over Tetebatu rice terraces", category: "nature" },
  { id: "gal-2", src: "/images/gallery-2.jpg", caption: "Cooking class in action", category: "activity" },
  { id: "gal-3", src: "/images/gallery-3.jpg", caption: "Traditional Sasak village", category: "culture" },
  { id: "gal-4", src: "/images/gallery-4.jpg", caption: "Our cozy warung atmosphere", category: "warung" },
  { id: "gal-5", src: "/images/gallery-5.jpg", caption: "Waterfall trekking adventure", category: "nature" },
  { id: "gal-6", src: "/images/gallery-6.jpg", caption: "Fresh ingredients from the garden", category: "food" },
  { id: "gal-7", src: "/images/gallery-7.jpg", caption: "Mount Rinjani panoramic view", category: "nature" },
  { id: "gal-8", src: "/images/gallery-8.jpg", caption: "Happy guests enjoying local food", category: "warung" },
];

// ============================================
// Business Info
// ============================================
export const businessInfo = {
  name: "Me & You Warung",
  tagline: "Experience the Beauty of Tetebatu",
  address: "Jl. Pariwisata, Tetebatu, Sikur, Lombok Timur, NTB 83662",
  phone: "+62 81 1727 0551",
  email: "meandyou7626@gmail.com",
  instagram: "https://instagram.com/meandyouwarung",
  facebook: "https://facebook.com/profile.php?id=61589323323560",
  tiktok: "https://tiktok.com/@meandyouwarung",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.18700037032244!2d116.42559662461282!3d-8.548209631687987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc35000e19cf95%3A0x920c4cf10de42ccb!2sBerugak%20Sopoq!5e0!3m2!1sid!2sus!4v1778193976484!5m2!1sid!2sus",
  openingHours: [
    { day: "Monday - Friday", hours: "08:00 - 21:00" },
    { day: "Saturday", hours: "08:00 - 22:00" },
    { day: "Sunday", hours: "09:00 - 21:00" },
  ],
};
