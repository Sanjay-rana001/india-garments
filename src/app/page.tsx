import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CategoryShowcase from "@/components/CategoryShowcase";
import ProductCarousel from "@/components/ProductCarousel";
import EditorialSection from "@/components/EditorialSection";
import NewArrivals from "@/components/NewArrivals";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const m1Img = "/images/men_product_1_1789818772721.jpg";
const m2Img = "/images/men_product_2_1789818787592.jpg";
const w1Img = "/images/women_product_1_1789818800927.jpg";
const w2Img = "/images/women_product_2_1789818813910.jpg";

const mensProducts = [
  { id: "m1", name: "Handcrafted Silk Kurta", category: "Kurta Sets", price: "₹4,499", image1: m1Img, isNew: true },
  { id: "m2", name: "Embroidered Sherwani", category: "Wedding", price: "₹18,899", image1: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1780&auto=format&fit=crop" },
  { id: "m3", name: "Linen Bandhgala Suit", category: "Suits", price: "₹12,299", image1: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1887&auto=format&fit=crop" },
  { id: "m4", name: "Classic Cotton Kurta", category: "Everyday", price: "₹2,499", image1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1771&auto=format&fit=crop" },
  { id: "m5", name: "Silk Blend Nehru Jacket", category: "Jackets", price: "₹5,999", image1: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1780&auto=format&fit=crop" },
  { id: "m6", name: "Festive Pathani Suit", category: "Kurta Sets", price: "₹6,999", image1: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop" },
  { id: "m7", name: "Zari Work Safa", category: "Accessories", price: "₹2,299", image1: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1770&auto=format&fit=crop" },
  { id: "m8", name: "Velvet Sherwani Set", category: "Wedding", price: "₹24,999", image1: m2Img }
];

const womensProducts = [
  { id: "w1", name: "Banarasi Silk Saree", category: "Sarees", price: "₹14,999", image1: w1Img, isNew: true },
  { id: "w2", name: "Heavy Embroidered Lehenga", category: "Lehengas", price: "₹36,999", image1: w2Img },
  { id: "w3", name: "Chikankari Kurti Set", category: "Kurta Sets", price: "₹4,499", image1: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=1887&auto=format&fit=crop" },
  { id: "w4", name: "Velvet Anarkali Suit", category: "Suits", price: "₹12,199", image1: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1887&auto=format&fit=crop" },
  { id: "w5", name: "Organza Floral Saree", category: "Sarees", price: "₹8,499", image1: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop" },
  { id: "w6", name: "Georgette Sharara Set", category: "Sets", price: "₹9,499", image1: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1946&auto=format&fit=crop" },
  { id: "w7", name: "Zardosi Work Blouse", category: "Tops", price: "₹3,799", image1: "https://images.unsplash.com/photo-1434389678369-18342cb31a0b?q=80&w=2070&auto=format&fit=crop" },
  { id: "w8", name: "Silk Bandhani Saree", category: "Sarees", price: "₹11,999", image1: "https://images.unsplash.com/photo-1583496661160-c588c25a5307?q=80&w=1770&auto=format&fit=crop" }
];

const justDroppedProducts = [
  { id: "jd1", name: "Pastel Bridal Lehenga", category: "Lehengas", price: "₹48,999", image1: "/images/jd_1_1789819139205.jpg", isNew: true },
  { id: "jd2", name: "Mirror Work Kurta", category: "Kurta Sets", price: "₹5,799", image1: "/images/jd_2_1789819150785.jpg", isNew: true },
  { id: "jd3", name: "Handloom Cotton Saree", category: "Sarees", price: "₹6,199", image1: "/images/jd_3_1789819163512.jpg", isNew: true },
  { id: "jd4", name: "Brocade Silk Sherwani", category: "Wedding", price: "₹21,499", image1: "/images/jd_4_1789819176482.jpg", isNew: true },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Preloader />
      <Navbar />
      <Hero />
      <Marquee />
      
      <CategoryShowcase />
      
      <ProductCarousel 
        title="THE MEN'S EDIT" 
        subtitle="Heritage craftsmanship. Modern elegance." 
        products={mensProducts} 
        linkText="VIEW ALL MEN'S COLLECTION →" 
      />

      <EditorialSection />

      <ProductCarousel 
        title="THE WOMEN'S EDIT" 
        subtitle="Timeless grace woven into every thread." 
        products={womensProducts} 
        linkText="VIEW ALL WOMEN'S COLLECTION →" 
      />

      <NewArrivals products={justDroppedProducts} />

      <Newsletter />
      <Footer />
    </main>
  );
}
