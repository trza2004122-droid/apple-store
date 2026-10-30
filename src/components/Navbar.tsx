import React, { useState } from 'react';
import { ShoppingBag, ShieldCheck, Truck, Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenOrderModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 border-b border-black/[0.06] transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#1D1D1F] text-white text-xs py-1.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 text-[13px]">
          <span className="flex items-center gap-1.5 font-medium">
            <Truck className="w-3.5 h-3.5 text-blue-400" />
            <span>الدفع عند الاستلام مع حق المعاينة والتجربة قبل الدفع</span>
          </span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:flex items-center gap-1.5 text-white/90">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>شحن مجاني وهدايا حصرية مع باقة العرض الذهبي</span>
          </span>
        </div>
      </div>

      {/* Main Apple 3-zone Header Contract */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2 font-bold text-lg sm:text-xl tracking-tight text-[#1D1D1F] whitespace-nowrap shrink-0 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1D1D1F] to-[#434344] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.85-11.7-14.44-6.3-10.12-11.08-21.6-14.34-34.45-3.26-12.85-4.89-24.87-4.89-36.06 0-14.35 3.49-26.4 10.47-36.16 6.98-9.76 15.89-14.75 26.74-14.96 4.35 0 9.24 1.15 14.67 3.44 5.43 2.29 9.38 3.48 11.85 3.58 2.07 0 6.13-1.25 12.19-3.76 6.06-2.5 11.23-3.64 15.52-3.41 11.53.64 20.89 4.89 28.08 12.75-10.02 6.1-15.03 14.45-15.03 25.07 0 9.15 3.48 16.94 10.45 23.36 6.97 6.42 15.35 10.01 25.13 10.77-2.17 6.75-4.89 13.49-8.17 20.23zM119.22 33.56c0-6.73 2.45-13.2 7.35-19.41 4.9-6.21 11.04-10.47 18.42-12.79.87 6.31-.54 12.44-4.23 18.39-3.69 5.95-9.17 10.23-16.44 12.84-1.63.43-3.33.75-5.1.97z"/>
            </svg>
          </div>
          <span>آبل <span className="font-semibold text-[#0071E3]">ستور</span></span>
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1D1D1F]/80">
          <a href="#hero" className="hover:text-[#0071E3] transition-colors whitespace-nowrap shrink-0">الرئيسية</a>
          <a href="#powerbank" className="hover:text-[#0071E3] transition-colors whitespace-nowrap shrink-0">باور بانك 8000mAh</a>
          <a href="#airpods" className="hover:text-[#0071E3] transition-colors whitespace-nowrap shrink-0">إيربودز 4</a>
          <a href="#bundle" className="text-[#0071E3] font-semibold hover:opacity-85 transition-opacity whitespace-nowrap shrink-0 flex items-center gap-1">
            <span>العرض الذهبي</span>
            <span className="w-2 h-2 rounded-full bg-[#0071E3]"></span>
          </a>
          <a href="#shipping" className="hover:text-[#0071E3] transition-colors whitespace-nowrap shrink-0">جدول الشحن</a>
          <a href="#reviews" className="hover:text-[#0071E3] transition-colors whitespace-nowrap shrink-0">آراء العملاء</a>
        </nav>

        {/* Zone 3: 1 Primary Action + Cart */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label="سلة المشتريات"
            className="relative p-2.5 rounded-full hover:bg-black/5 text-[#1D1D1F] transition-colors flex items-center justify-center cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-[#0071E3] text-white text-[11px] font-bold rounded-full flex items-center justify-center tabular-nums shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenOrderModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 transition-all rounded-full shadow-sm whitespace-nowrap cursor-pointer"
          >
            اطلب الآن والدفع عند الاستلام
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1D1D1F] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
            aria-label="القائمة"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-white px-4 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <a
              href="#hero"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              الرئيسية
            </a>
            <a
              href="#powerbank"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              باور بانك MagSafe 8000mAh
            </a>
            <a
              href="#airpods"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              سماعات AirPods 4 Semi Original
            </a>
            <a
              href="#bundle"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg bg-blue-50 text-[#0071E3] font-semibold transition-colors flex items-center justify-between"
            >
              <span>العرض الذهبي المزدوج</span>
              <span className="text-xs bg-[#0071E3] text-white px-2 py-0.5 rounded-full">الأكثر طلباً</span>
            </a>
            <a
              href="#shipping"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              جدول ومصاريف الشحن حسب المحافظة
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              آراء وتقييمات العملاء
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#0071E3] rounded-xl shadow-sm"
              >
                اطلب الآن - الدفع عند الاستلام
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
