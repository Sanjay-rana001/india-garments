export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-14 sm:pt-20 pb-10 px-4 sm:px-8 md:px-12 font-sans">
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-3 sm:gap-4 col-span-2 md:col-span-1">
          <div className="text-xl sm:text-2xl font-serif tracking-[0.25em] uppercase font-bold text-white">
            INDIA
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xs leading-relaxed">
            Modern clothing for modern lives. Elegance redefined for the contemporary wardrobe.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2.5 sm:gap-3">
          <h4 className="text-xs font-semibold tracking-widest uppercase mb-1 text-white">Shop</h4>
          <a href="#men" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">Men</a>
          <a href="#women" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">Women</a>
          <a href="#new-arrivals" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">New Arrivals</a>
          <a href="#collections" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">Collections</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2.5 sm:gap-3">
          <h4 className="text-xs font-semibold tracking-widest uppercase mb-1 text-white">Help</h4>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">Contact</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">Shipping</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">Returns</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">FAQs</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2.5 sm:gap-3 col-span-2 sm:col-span-1">
          <h4 className="text-xs font-semibold tracking-widest uppercase mb-1 text-white">Company</h4>
          <a href="#about" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">About</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">Our Story</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm">Journal</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 text-center sm:text-left">
        <p>© 2026 INDIA GARMENTS. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
        </div>
      </div>
    </footer>
  );
}
