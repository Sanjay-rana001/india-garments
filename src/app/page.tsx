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
const mShowcase = "/images/mens_showcase_1789818667090.jpg";
const w1Img = "/images/women_product_1_1789818800927.jpg";
const w2Img = "/images/women_product_2_1789818813910.jpg";
const wShowcase = "/images/womens_showcase_1789818740040.jpg";
const jd1 = "/images/jd_1_1789819139205.jpg";
const jd2 = "/images/jd_2_1789819150785.jpg";
const jd3 = "/images/jd_3_1789819163512.jpg";
const jd4 = "/images/jd_4_1789819176482.jpg";

const mensProducts = [
  { id: "m1", name: "Handcrafted Silk Kurta", category: "Kurta Sets", price: "₹4,499", image1: m1Img, isNew: true },
  { id: "m2", name: "Embroidered Sherwani", category: "Wedding", price: "₹18,899", image1: m2Img },
  { id: "m3", name: "Linen Bandhgala Suit", category: "Suits", price: "₹12,299", image1: mShowcase },
  { id: "m4", name: "Classic Cotton Kurta", category: "Everyday", price: "₹2,499", image1: jd2 },
  { id: "m5", name: "Silk Blend Nehru Jacket", category: "Jackets", price: "₹5,999", image1: jd4 },
  { id: "m6", name: "Festive Pathani Suit", category: "Kurta Sets", price: "₹6,999", image1: m1Img },
  { id: "m7", name: "Zari Work Safa", category: "Accessories", price: "₹2,299", image1: m2Img },
  { id: "m8", name: "Velvet Sherwani Set", category: "Wedding", price: "₹24,999", image1: mShowcase }
];

const womensProducts = [
  { id: "w1", name: "Banarasi Silk Saree", category: "Sarees", price: "₹14,999", image1: w1Img, isNew: true },
  { id: "w2", name: "Heavy Embroidered Lehenga", category: "Lehengas", price: "₹36,999", image1: w2Img },
  { id: "w3", name: "Chikankari Kurti Set", category: "Kurta Sets", price: "₹4,499", image1: wShowcase },
  { id: "w4", name: "Velvet Anarkali Suit", category: "Suits", price: "₹12,199", image1: jd1 },
  { id: "w5", name: "Organza Floral Saree", category: "Sarees", price: "₹8,499", image1: jd3 },
  { id: "w6", name: "Georgette Sharara Set", category: "Sets", price: "₹9,499", image1: w1Img },
  { id: "w7", name: "Zardosi Work Blouse", category: "Tops", price: "₹3,799", image1: w2Img },
  { id: "w8", name: "Silk Bandhani Saree", category: "Sarees", price: "₹11,999", image1: wShowcase }
];

const justDroppedProducts = [
  { id: "jd1", name: "Pastel Bridal Lehenga", category: "Lehengas", price: "₹48,999", image1: jd1, isNew: true },
  { id: "jd2", name: "Mirror Work Kurta", category: "Kurta Sets", price: "₹5,799", image1: jd2, isNew: true },
  { id: "jd3", name: "Handloom Cotton Saree", category: "Sarees", price: "₹6,199", image1: jd3, isNew: true },
  { id: "jd4", name: "Brocade Silk Sherwani", category: "Wedding", price: "₹21,499", image1: jd4, isNew: true },
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
        id="men"
        title="THE MEN'S EDIT" 
        subtitle="Heritage craftsmanship. Modern elegance." 
        products={mensProducts} 
        linkText="VIEW ALL MEN'S COLLECTION →" 
      />

      <EditorialSection />

      <ProductCarousel 
        id="women"
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
