import React, { useState } from 'react';
import { GOVERNORATES, SHIPPING_IMAGE_PATH } from '../data/governorates';
import { Truck, MapPin, Search, Eye, CheckCircle2, AlertCircle, Sparkles, X } from 'lucide-react';

interface ShippingSectionProps {
  onScrollToBundle: () => void;
}

export const ShippingSection: React.FC<ShippingSectionProps> = ({ onScrollToBundle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGovernorateId, setSelectedGovernorateId] = useState('cairo');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const filteredGovs = GOVERNORATES.filter(g =>
    g.name.includes(searchQuery.trim())
  );

  const activeGov = GOVERNORATES.find(g => g.id === selectedGovernorateId) || GOVERNORATES[0];

  return (
    <section id="shipping" className="py-16 sm:py-24 bg-[#F5F5F7] border-t border-black/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0071E3] mb-2">
            <Truck className="w-4 h-4" />
            <span>توصيل سريع وآمن لجميع أنحاء جمهورية مصر العربية</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            جدول مصاريف الشحن حسب المحافظة
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            أسعار شحن شفافة وثابتة بالتعاون مع كبرى شركات الشحن، مع الدفع عند الاستلام بعد المعاينة والتجربة.
          </p>
        </div>

        {/* Free Shipping Callout for Golden Bundle */}
        <div className="max-w-4xl mx-auto mb-10 bg-gradient-to-r from-blue-600 to-[#0071E3] text-white p-4 sm:p-5 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-right">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold">عرض خاص: شحن مجاني 100% (صفر مصاريف)</h4>
              <p className="text-xs text-blue-100">عند طلبك لـ "العرض الذهبي المزدوج"، التوصيل مجاني تماماً لأي محافظة في مصر.</p>
            </div>
          </div>
          <button
            onClick={onScrollToBundle}
            className="w-full sm:w-auto px-5 py-2.5 bg-white text-[#0071E3] hover:bg-slate-50 active:scale-95 text-xs font-bold rounded-xl whitespace-nowrap transition-all shadow-sm cursor-pointer"
          >
            اطلب العرض الذهبي مجاناً شحنه
          </button>
        </div>

        {/* 3 Price Tiers Grid (Taager official pricing: 95, 100, 105) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Tier 1: 95 EGP */}
          <div className="bg-white rounded-3xl p-6 border border-black/[0.06] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-blue-600" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                  الفئة الأولى
                </span>
                <span className="text-2xl font-black text-[#1D1D1F] tabular-nums">
                  95 ج.م
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1D1D1F] mb-1">القاهرة، الجيزة، الإسكندرية</h3>
              <p className="text-xs text-slate-500 mb-4">مدة التوصيل: خلال 24 إلى 48 ساعة فقط</p>
              
              <div className="bg-[#F9F9FA] rounded-xl p-3 text-xs text-slate-700 space-y-1.5">
                <div className="font-semibold text-slate-900 mb-1">المناطق المشمولة:</div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>القاهرة (كافة الأحياء)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>الجيزة (والمدن الجديدة مثل زايد وأكتوبر)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>الإسكندرية (جميع المناطق)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>توصيل سوبر سريع لباب البيت</span>
            </div>
          </div>

          {/* Tier 2: 100 EGP */}
          <div className="bg-white rounded-3xl p-6 border border-black/[0.06] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#0071E3]" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full">
                  الفئة الثانية
                </span>
                <span className="text-2xl font-black text-[#1D1D1F] tabular-nums">
                  100 ج.م
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1D1D1F] mb-1">محافظات الدلتا والقناة</h3>
              <p className="text-xs text-slate-500 mb-4">مدة التوصيل: خلال 2 إلى 3 أيام عمل</p>

              <div className="bg-[#F9F9FA] rounded-xl p-3 text-xs text-slate-700">
                <div className="font-semibold text-slate-900 mb-1.5">تشمل 15 محافظة ومدينة:</div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  البحيرة · الدقهلية (المنصورة) · الشرقية · الغربية · القليوبية · الإسماعيلية · السويس · المنوفية · بور سعيد · كفر الشيخ · المحلة الكبرى · العاشر من رمضان · طنطا · بني سويف · دمياط
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>مندوب مخصص لكل منطقة</span>
            </div>
          </div>

          {/* Tier 3: 105 EGP */}
          <div className="bg-white rounded-3xl p-6 border border-black/[0.06] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-indigo-600" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
                  الفئة الثالثة
                </span>
                <span className="text-2xl font-black text-[#1D1D1F] tabular-nums">
                  105 ج.م
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1D1D1F] mb-1">الصعيد والمناطق الساحلية</h3>
              <p className="text-xs text-slate-500 mb-4">مدة التوصيل: خلال 3 إلى 4 أيام عمل</p>

              <div className="bg-[#F9F9FA] rounded-xl p-3 text-xs text-slate-700">
                <div className="font-semibold text-slate-900 mb-1.5">تشمل المحافظات والمدن:</div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  سوهاج · أسيوط · الفيوم · العين السخنة · أسوان · قنا · المنيا · وادي النطرون · مرسى مطروح · الأقصر · الساحل الشمالي · البحر الأحمر (الغردقة)
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>تغطية كاملة حتى أقصى الجنوب</span>
            </div>
          </div>

        </div>

        {/* Interactive Governorate Search & Live Calculator */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0071E3]" />
                <span>حاسبة مصاريف الشحن الفورية</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">ابحث عن محافظتك لتتعرف على التكلفة والوقت التقديري</p>
            </div>

            {/* View Official Taager Sheet Button */}
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#1D1D1F] text-xs font-semibold rounded-xl transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Eye className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>عرض جدول الشحن الأصلي</span>
            </button>
          </div>

          {/* Search bar */}
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="اكتب اسم محافظتك أو مدينتك (مثال: القاهرة، المنصورة، طنطا، أسوان...)"
              className="w-full pr-10 pl-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:border-transparent transition-all"
            />
          </div>

          {/* Quick select buttons */}
          <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto p-1 mb-6">
            {filteredGovs.map(gov => (
              <button
                key={gov.id}
                onClick={() => setSelectedGovernorateId(gov.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedGovernorateId === gov.id
                    ? 'bg-[#1D1D1F] text-white border-[#1D1D1F] font-bold shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {gov.name}
              </button>
            ))}
          </div>

          {/* Active Result Card */}
          <div className="bg-[#FBFBFC] rounded-2xl p-4 sm:p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0071E3] flex items-center justify-center font-bold shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500">المحافظة المحددة:</div>
                <div className="text-base font-bold text-[#1D1D1F]">{activeGov.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">التوصيل المتوقع: {activeGov.deliveryTime}</div>
              </div>
            </div>

            <div className="text-center sm:text-left border-t sm:border-t-0 sm:border-r border-slate-200 pt-3 sm:pt-0 sm:pr-6 w-full sm:w-auto">
              <div className="text-xs text-slate-500">مصاريف الشحن:</div>
              <div className="text-2xl font-black text-[#0071E3] tabular-nums">{activeGov.price} ج.م</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">أو 0 ج.م مع العرض الذهبي</div>
            </div>
          </div>

          {/* Delivery terms footnote */}
          <div className="mt-4 pt-3 flex items-start gap-2 text-xs text-slate-500">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              ملاحظة هامة: يحق للعميل فحص المنتج وتجربته فور وصول مندوب الشحن. في حال عدم رغبة العميل في استلام الطلب لأسباب خاصة يتم دفع مصاريف الشحن فقط للمندوب.
            </span>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Original Taager Shipping Chart Image */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full p-4 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="text-sm font-bold text-[#1D1D1F]">جدول أسعار الشحن الرسمي المعتمد لجميع المحافظات</h4>
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="my-3 max-h-[80vh] overflow-auto rounded-xl">
              <img
                src={SHIPPING_IMAGE_PATH}
                alt="جدول أسعار الشحن الرسمي للمحافظات"
                className="w-full h-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center pt-2">
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="px-6 py-2 bg-[#1D1D1F] hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
