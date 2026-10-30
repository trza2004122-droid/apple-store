import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { Sparkles, Check, Gift, Truck, ShieldCheck, Flame, ArrowLeft, Clock } from 'lucide-react';

interface BundleSectionProps {
  bundleProduct: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onDirectOrder: (product: Product) => void;
}

export const BundleSection: React.FC<BundleSectionProps> = ({
  bundleProduct,
  onAddToCart,
  onDirectOrder
}) => {
  // Urgency countdown (Apple keynote style)
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 27, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="bundle" className="py-16 sm:py-24 bg-[#141416] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Ribbon */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Flame className="w-4 h-4 text-amber-400 fill-current animate-pulse" />
            <span>العرض الأقوى والأكثر طلباً لعام 2026</span>
            <span aria-hidden="true">·</span>
            <span>الأكثر مبيعاً</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            العرض الذهبي المزدوج
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-slate-300 font-normal">
            احصل على الباور بانك المغناطيسي 8000mAh وسماعات AirPods 4 معاً بخصم استثنائي، مع شحن مجاني 100% وهدايا فورية!
          </p>

          {/* Urgency countdown bar */}
          <div className="mt-5 inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl text-xs sm:text-sm text-slate-300">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>ينتهي هذا الخصم بعد:</span>
            <div className="flex items-center gap-1.5 font-mono font-bold text-white tabular-nums">
              <span className="bg-white/10 px-2 py-0.5 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>:
              <span className="bg-white/10 px-2 py-0.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>:
              <span className="bg-white/10 px-2 py-0.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Main Golden Bundle Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#222226] via-[#1B1B1E] to-[#161619] border border-amber-500/30 p-6 sm:p-10 shadow-2xl shadow-black/80">
          
          {/* Badges strip on top */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 fill-current" />
                الأكثر مبيعاً
              </span>
              <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                شحن مجاني لجميع المحافظات
              </span>
            </div>
            
            <div className="text-xs text-slate-400 font-medium">
              الكمية المتبقية بالعرض: <span className="text-amber-400 font-bold tabular-nums">7 باقات فقط</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Side: Visual Showcase of both products side by side */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {/* Product A */}
              <div className="bg-[#29292F] rounded-2xl p-4 border border-white/10 flex flex-col items-center text-center relative group">
                <span className="text-[11px] font-semibold text-blue-400 mb-1">المنتج الأول</span>
                <div className="w-full aspect-square flex items-center justify-center p-2 my-2">
                  <img
                    src="/assets/aistudio/523f50e2-91a4-4a72-ba3b-8d399ad3d330_b6016fb8.webp"
                    alt="باور بانك MagSafe 8000mAh"
                    className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white">باور بانك MagSafe</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">8000mAh وشحن سريع 20W</p>
                <div className="text-xs text-slate-400 line-through mt-1">القيمة: 950 ج.م</div>
              </div>

              {/* Product B */}
              <div className="bg-[#29292F] rounded-2xl p-4 border border-white/10 flex flex-col items-center text-center relative group">
                <span className="text-[11px] font-semibold text-blue-400 mb-1">المنتج الثاني</span>
                <div className="w-full aspect-square flex items-center justify-center p-2 my-2">
                  <img
                    src="/assets/aistudio/a54b6187-2099-4411-a523-9a5a1c54f117_5b62b447.webp"
                    alt="سماعات AirPods 4 Semi Original"
                    className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white">AirPods 4 Semi Original</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">صوت مكاني وشريحة H2</p>
                <div className="text-xs text-slate-400 line-through mt-1">القيمة: 1,050 ج.م</div>
              </div>

              {/* Free Gifts Banner */}
              <div className="col-span-2 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-2xl p-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-black flex items-center justify-center shrink-0">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-300 block">هدايا مجانية مدمجة مع الباقة:</span>
                    <span className="text-[11px] text-slate-300">كابل Type-C سريع + جراب سيليكون مضاد للصدمات</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-400 shrink-0">مـجـانـاً</span>
              </div>
            </div>

            {/* Offer Details Side */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              {/* Pricing Math */}
              <div className="bg-[#242429] rounded-2xl p-6 border border-white/10 mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm font-medium text-slate-400">سعر الباقة الإجمالي:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-5xl font-black text-amber-400 tabular-nums">
                      1,149 ج.م
                    </span>
                    <span className="text-base text-slate-500 line-through tabular-nums">
                      2,000 ج.م
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 pt-3 border-t border-white/10">
                  <span className="text-emerald-400 font-bold">✓ توفير مباشر قدره 850 ج.م</span>
                  <span className="text-blue-400 font-bold">✓ شحن مجاني 100% (صفر مصاريف)</span>
                </div>
              </div>

              {/* Perks List */}
              <div className="space-y-3 mb-8">
                {bundleProduct.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => onDirectOrder(bundleProduct)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 active:scale-[0.98] text-black font-extrabold text-base shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 fill-current" />
                  <span>اطلب العرض الذهبي الآن (شحن مجاني + هدايا)</span>
                  <ArrowLeft className="w-4 h-4 mr-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onAddToCart(bundleProduct, 1)}
                  className="w-full py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white font-medium text-xs border border-white/10 transition-all cursor-pointer text-center"
                >
                  إضافة العرض الذهبي إلى سلة التسوق
                </button>
              </div>

              {/* COD Notice */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>الدفع عند الاستلام كاش بعد المعاينة والتجربة الفورية مع المندوب</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
