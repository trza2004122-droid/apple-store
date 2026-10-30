import React from 'react';
import { Sparkles, ShieldCheck, Zap, ArrowLeft, Headphones, BatteryCharging, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onScrollToBundle: () => void;
  onScrollToProducts: () => void;
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToBundle, onScrollToProducts, onOpenOrderModal }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-[#F5F5F7]">
      {/* Subtle Apple-style glow behind hero showcase */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-blue-200/40 via-sky-100/30 to-purple-100/20 blur-3xl pointer-events-none -z-0 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Pill-free Kicker */}
        <div className="flex items-center justify-center gap-2 mb-4 text-xs sm:text-sm font-semibold text-[#0071E3]">
          <Sparkles className="w-4 h-4" />
          <span>تكنولوجيا الشحن والصوت الفاخرة لعام 2026</span>
          <span aria-hidden="true">·</span>
          <span>إصدار محدود بأعلى مواصفات</span>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.2] sm:leading-[1.15] text-balance">
            طاقة لا تنتهي، وصوت يحيط بك من كل اتجاه
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-[#1D1D1F]/70 font-normal max-w-2xl mx-auto leading-relaxed text-balance">
            قم بترقية تجربة هاتفك الآن مع أفضل ملحقات الشحن والصوت. باور بانك MagSafe بقوة 8000mAh وشحن سريع 20W، مع سماعات AirPods 4 سيمي أوريجينال بصوت مكاني غامر.
          </p>
        </div>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 sm:mb-16">
          <button
            onClick={onScrollToBundle}
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 transition-all rounded-full shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>تسوق العرض المزدوج الآن</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onScrollToProducts}
            className="w-full sm:w-auto px-6 py-3.5 text-base font-medium text-[#1D1D1F] bg-white hover:bg-slate-50 border border-black/10 active:scale-95 transition-all rounded-full shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>استكشف المنتجات بالتفصيل</span>
          </button>
        </div>

        {/* Visual Showcase - Dual Device Presentation */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm border border-black/[0.06] rounded-3xl p-4 sm:p-8 shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              
              {/* Device 1: MagSafe Power Bank showcase */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#F9F9FA] to-[#EDEDF0] p-6 flex flex-col items-center justify-center border border-black/[0.04] group hover:border-[#0071E3]/30 transition-all">
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#1D1D1F] shadow-sm">
                  <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
                  <span>8000mAh · PD 20W</span>
                </div>
                
                <div className="relative w-full aspect-square max-w-[280px] flex items-center justify-center overflow-hidden my-4">
                  <img
                    src="/assets/aistudio/523f50e2-91a4-4a72-ba3b-8d399ad3d330_b6016fb8.webp"
                    alt="باور بانك لاسلكي مغناطيسي 8000mAh"
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-center w-full">
                  <div className="text-xs text-[#0071E3] font-semibold mb-1">ماج سيف فائق النحافة</div>
                  <h2 className="text-lg font-bold text-[#1D1D1F]">باور بانك لاسلكي 8000mAh</h2>
                  <p className="text-xs text-[#1D1D1F]/60 mt-1 line-clamp-1">التصاق مغناطيسي متين وشحن سلكي ولاسلكي متزامن</p>
                  
                  <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-extrabold text-[#1D1D1F] tabular-nums">649 ج.م</span>
                      <span className="text-xs text-slate-400 line-through mr-2 tabular-nums">950 ج.م</span>
                    </div>
                    <a
                      href="#powerbank"
                      className="text-xs font-semibold text-[#0071E3] hover:underline flex items-center gap-1"
                    >
                      التفاصيل
                      <ArrowLeft className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Device 2: AirPods 4 Semi Original showcase */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#F9F9FA] to-[#EDEDF0] p-6 flex flex-col items-center justify-center border border-black/[0.04] group hover:border-[#0071E3]/30 transition-all">
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#1D1D1F] shadow-sm">
                  <Headphones className="w-3.5 h-3.5 text-blue-600" />
                  <span>شريحة H2 · صوت مكاني</span>
                </div>

                <div className="relative w-full aspect-square max-w-[280px] flex items-center justify-center overflow-hidden my-4">
                  <img
                    src="/assets/aistudio/a54b6187-2099-4411-a523-9a5a1c54f117_5b62b447.webp"
                    alt="سماعات AirPods 4 Semi Original"
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-center w-full">
                  <div className="text-xs text-[#0071E3] font-semibold mb-1">صوت استثنائي وبطارية 30 ساعة</div>
                  <h2 className="text-lg font-bold text-[#1D1D1F]">AirPods 4 Semi Original</h2>
                  <p className="text-xs text-[#1D1D1F]/60 mt-1 line-clamp-1">معالجة صوت سينمائية ومقاومة للماء IP54</p>

                  <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-extrabold text-[#1D1D1F] tabular-nums">699 ج.م</span>
                      <span className="text-xs text-slate-400 line-through mr-2 tabular-nums">1,050 ج.م</span>
                    </div>
                    <a
                      href="#airpods"
                      className="text-xs font-semibold text-[#0071E3] hover:underline flex items-center gap-1"
                    >
                      التفاصيل
                      <ArrowLeft className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Golden Banner Teaser inside Showcase */}
            <div className="mt-6 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 p-4 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0071E3] text-white flex items-center justify-center font-bold shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1D1D1F]">
                    وفر 850 ج.م مع العرض الذهبي المزدوج + شحن مجاني
                  </h3>
                  <p className="text-xs text-slate-500">
                    احصل على الباور بانك والسماعة معاً بسعر 1,149 ج.م فقط وهدايا شاحن وجراب حماية.
                  </p>
                </div>
              </div>
              <button
                onClick={onScrollToBundle}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold rounded-xl whitespace-nowrap transition-colors cursor-pointer"
              >
                مشاهدة الباقة الذهبية
              </button>
            </div>
          </div>
        </div>

        {/* 3 Trust Markers Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 sm:mt-12 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm border border-black/[0.05] p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1D1D1F]">الدفع عند الاستلام</h4>
              <p className="text-xs text-slate-500">حق المعاينة والتجربة قبل دفع مليم واحد</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-black/[0.05] p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0071E3] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1D1D1F]">شحن سريع لجميع المحافظات</h4>
              <p className="text-xs text-slate-500">من 24 إلى 48 ساعة حتى باب بيتك</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-black/[0.05] p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1D1D1F]">ضمان استبدال 14 يوماً</h4>
              <p className="text-xs text-slate-500">ضمان حقيقي ضد عيوب الصناعة مع استبدال فوري</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
