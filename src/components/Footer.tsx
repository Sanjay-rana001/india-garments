export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 px-6 md:px-12 font-sans">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-serif tracking-widest uppercase font-bold">
            INDIA
          </div>
          <p className="text-neutral-400 text-sm max-w-xs">
            Modern clothing for modern lives. Elegance redefined for the contemporary wardrobe.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium tracking-widest uppercase mb-2">Shop</h4>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Men</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Women</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">New Arrivals</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Collections</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium tracking-widest uppercase mb-2">Help</h4>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Contact</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Shipping</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Returns</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Size Guide</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">FAQs</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium tracking-widest uppercase mb-2">Company</h4>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">About</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Our Story</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Journal</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Careers</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© 2026 INDIA GARMENTS. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
        </div>
      </div>
    </footer>
  );
}
