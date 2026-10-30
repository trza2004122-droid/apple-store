import React, { useState } from 'react';
import { Product } from '../types';
import { Check, ShoppingBag, Zap, ChevronDown, ChevronUp, ShieldAlert, Sparkles, Battery, Radio, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProductSectionProps {
  product: Product;
  sectionId: string;
  badgeText: string;
  onAddToCart: (product: Product, quantity: number) => void;
  onDirectOrder: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  product,
  sectionId,
  badgeText,
  onAddToCart,
  onDirectOrder
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 2000);
  };

  return (
    <section id={sectionId} className="py-16 sm:py-20 border-t border-black/[0.05] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0071E3] mb-1">
            <span>{badgeText}</span>
            <span aria-hidden="true">·</span>
            <span>أصلي ومضمون 100%</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            {product.arabicTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl">
            {product.tagline}
          </p>
        </div>

        {/* Product Grid: Gallery Left + Details Right (RTL: Gallery Right, Details Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Gallery Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#F5F5F7] rounded-3xl overflow-hidden border border-black/[0.05] flex items-center justify-center p-6 group">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.arabicTitle}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Discount tag */}
              <div className="absolute top-4 right-4 bg-[#1D1D1F] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                خصم {product.discountPercentage}%
              </div>

              {/* Verified badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-slate-700 font-medium flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0071E3]" />
                <span>معاينة وتجربة قبل الدفع</span>
              </div>
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl bg-[#F5F5F7] border-2 overflow-hidden shrink-0 transition-all cursor-pointer p-1 ${
                      selectedImageIndex === idx
                        ? 'border-[#0071E3] ring-2 ring-blue-100'
                        : 'border-transparent hover:border-black/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.arabicTitle} thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Purchase Module Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#FBFBFC] rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm">
            
            {/* Price Box */}
            <div className="mb-6 pb-6 border-b border-black/[0.06]">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tabular-nums">
                  {product.price} ج.م
                </span>
                <span className="text-base text-slate-400 line-through tabular-nums">
                  {product.originalPrice} ج.م
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  وفرت {product.originalPrice - product.price} ج.م
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                الأسعار شاملة ضريبة القيمة المضافة. مصاريف الشحن تبدأ من 95 ج.م حسب المحافظة والدفع كاش عند الاستلام.
              </p>
            </div>

            {/* Key Feature Highlights */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#1D1D1F] mb-3">أبرز المميزات والمواصفات:</h3>
              <ul className="space-y-2.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-normal">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0071E3] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6 flex items-center justify-between p-3 bg-white rounded-2xl border border-black/[0.06]">
              <span className="text-xs font-semibold text-slate-700">الكمية المطلوبة:</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#1D1D1F] font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="w-6 text-center text-sm font-bold tabular-nums">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#1D1D1F] font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 mb-6">
              <button
                type="button"
                onClick={() => onDirectOrder(product)}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>اطلب الآن - الدفع عند الاستلام</span>
              </button>

              <button
                type="button"
                onClick={handleAdd}
                className="w-full py-3 px-6 rounded-2xl bg-white hover:bg-slate-50 active:scale-[0.98] text-[#1D1D1F] font-semibold text-sm border border-black/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isAddedRecently ? 'تمت الإضافة للسلة بنجاح ✓' : 'أضف للسلة'}</span>
              </button>
            </div>

            {/* Technical Specifications Accordion */}
            <div className="border-t border-black/[0.06] pt-4">
              <button
                type="button"
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:text-[#0071E3] transition-colors py-1 cursor-pointer"
              >
                <span>المواصفات الفنية التفصيلية</span>
                {isSpecsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {isSpecsOpen && (
                <div className="mt-3 space-y-2 text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-black/[0.04]">
                  {product.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between py-1 border-b border-slate-100 last:border-none">
                      <span className="text-slate-500">{spec.label}</span>
                      <span className="font-semibold text-slate-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Guarantee Note */}
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>ضمان استبدال فوري 14 يوماً مع إمكانية فتح الشحنة والتجربة</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
