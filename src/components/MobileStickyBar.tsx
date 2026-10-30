import React from 'react';
import { ShoppingBag, Zap, Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  cartCount: number;
  onOpenCart: () => void;
  onQuickOrder: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  cartCount,
  onOpenCart,
  onQuickOrder
}) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-black/[0.08] px-3.5 py-2.5 shadow-lg safe-bottom">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* Cart Bag with badge */}
        <button
          onClick={onOpenCart}
          className="relative p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#1D1D1F] transition-colors shrink-0 flex items-center justify-center cursor-pointer"
          aria-label="سلة المشتريات"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0071E3] text-white text-[11px] font-bold rounded-full flex items-center justify-center tabular-nums">
              {cartCount}
            </span>
          )}
        </button>

        {/* Info & Price */}
        <div className="flex flex-col justify-center leading-tight">
          <span className="text-[11px] text-slate-500 font-medium">دفع عند الاستلام</span>
          <span className="text-xs font-black text-[#1D1D1F]">
            يبدأ من <span className="text-[#0071E3] font-bold">649 ج.م</span>
          </span>
        </div>

        {/* Main CTA Button */}
        <button
          onClick={onQuickOrder}
          className="flex-1 py-2.5 px-4 bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>اطلب الآن بعد المعاينة</span>
        </button>

      </div>
    </div>
  );
};
