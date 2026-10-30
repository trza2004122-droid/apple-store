import React, { useState } from 'react';
import { Truck, RotateCcw, Phone, ShieldCheck, Mail, MessageCircle, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'shipping' | 'return' | 'contact' | null>(null);

  return (
    <footer className="bg-[#F5F5F7] border-t border-black/[0.08] text-slate-600 text-xs py-12 pb-24 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top 3 Guarantee Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-10 border-b border-black/[0.06] mb-10">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-white border border-slate-200 text-[#0071E3] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">شحن سريع ومعاينة مجانية</h4>
              <p className="text-slate-500 leading-normal">
                تسليم خلال 24-48 ساعة للقاهرة والإسكندرية، مع حق الفحص والتجربة قبل الدفع.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-white border border-slate-200 text-emerald-600 shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">استبدال فوري خلال 14 يوماً</h4>
              <p className="text-slate-500 leading-normal">
                ضمان حقيقي ضد عيوب الصناعة مع استبدال مباشر حتى باب بيتك دون أي عناء.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-white border border-slate-200 text-purple-600 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">خدمة عملاء على مدار الساعة</h4>
              <p className="text-slate-500 leading-normal">
                فريق دعم فني متواجد عبر واتساب والمكالمات لمتابعة الشحنات والرد على الاستفسارات.
              </p>
            </div>
          </div>
        </div>

        {/* Links Navigation Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-black/[0.06]">
          {/* Brand mark */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-base">متجر ملحقات آبل الذكية</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">الجودة الأصلية بأفضل سعر</span>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-700">
            <button
              onClick={() => setActiveModal('shipping')}
              className="hover:text-[#0071E3] transition-colors cursor-pointer"
            >
              سياسة الشحن والتوصيل
            </button>
            <span className="text-slate-300">·</span>
            <button
              onClick={() => setActiveModal('return')}
              className="hover:text-[#0071E3] transition-colors cursor-pointer"
            >
              سياسة الاسترجاع والاستبدال
            </button>
            <span className="text-slate-300">·</span>
            <button
              onClick={() => setActiveModal('contact')}
              className="hover:text-[#0071E3] transition-colors cursor-pointer"
            >
              معلومات الاتصال والدعم
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 جميع الحقوق محفوظة لمتجر ملحقات آبل. الدفع عند الاستلام معتمد لجميع محافظات مصر.</p>
          <div className="flex items-center gap-3">
            <span>شحن موثوق عبر منصة تاجر Taager</span>
            <span>·</span>
            <span>بوابة شحن سريعة</span>
          </div>
        </div>

      </div>

      {/* Modal for Policies & Contact */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 left-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'shipping' && (
              <div>
                <div className="flex items-center gap-2 text-[#0071E3] mb-3">
                  <Truck className="w-5 h-5" />
                  <h3 className="font-bold text-lg text-slate-900">سياسة الشحن والتوصيل</h3>
                </div>
                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <p>• نقوم بالشحن لجميع محافظات جمهورية مصر العربية عبر كبرى شركات الشحن السريع.</p>
                  <p>• مصاريف الشحن ثابتة وفقاً للمنطقة: 95 ج.م (القاهرة، الجيزة، الإسكندرية)، 100 ج.م لمحافظات الدلتا والقناة، و 105 ج.م للصعيد والمناطق الساحلية.</p>
                  <p>• مدة التسليم تتراوح بين 24 إلى 48 ساعة للقاهرة والجيزة والإسكندرية، ومن 2 إلى 4 أيام لباقي المحافظات.</p>
                  <p>• يحق للعميل فحص المنتج وتجربته فور وصول مندوب الشحن قبل دفع قيمة الطلب.</p>
                  <p className="font-semibold text-emerald-700">• عند طلب "العرض الذهبي المزدوج"، يكون الشحن مجانياً 100%.</p>
                </div>
              </div>
            )}

            {activeModal === 'return' && (
              <div>
                <div className="flex items-center gap-2 text-emerald-600 mb-3">
                  <RotateCcw className="w-5 h-5" />
                  <h3 className="font-bold text-lg text-slate-900">سياسة الاسترجاع والاستبدال (14 يوماً)</h3>
                </div>
                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <p>• نضمن حقك في استبدال المنتج مجاناً خلال 14 يوماً من تاريخ الاستلام في حال وجود أي عيب صناعة.</p>
                  <p>• يشترط للاستبدال أو الاسترجاع الحفاظ على المنتج وملحقاته والعلبة بحالتها الأصلية.</p>
                  <p>• في حال رغبة العميل في استرجاع المنتج دون وجود أي عيب صناعة خلال فترة السماح، يتحمل العميل مصاريف الشحن فقط.</p>
                  <p>• يتم إرسال مندوب لاستلام المنتج المستبدل وتسليمك القطعة البديلة الجديدة فوراً.</p>
                </div>
              </div>
            )}

            {activeModal === 'contact' && (
              <div>
                <div className="flex items-center gap-2 text-purple-600 mb-3">
                  <Phone className="w-5 h-5" />
                  <h3 className="font-bold text-lg text-slate-900">معلومات الاتصال وخدمة العملاء</h3>
                </div>
                <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                  <p>فريق خدمة العملاء جاهز للرد على استفساراتكم ومتابعة الشحنات يومياً من 9 صباحاً حتى 11 مساءً:</p>
                  <div className="p-3 bg-slate-50 rounded-xl space-y-2 border border-slate-100">
                    <div className="flex items-center gap-2 font-medium text-slate-800">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>واتساب الدعم الفوري:</span>
                      <span dir="ltr" className="font-mono text-sm font-bold text-emerald-700">01000000000</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-slate-800">
                      <Phone className="w-4 h-4 text-[#0071E3]" />
                      <span>الخط الساخن للمبيعات:</span>
                      <span dir="ltr" className="font-mono text-sm font-bold text-[#0071E3]">01200000000</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-slate-800">
                      <Mail className="w-4 h-4 text-slate-500" />
                      <span>البريد الإلكتروني:</span>
                      <span dir="ltr" className="font-mono">support@istore-eg.com</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400">مقر العمل الرئيسي: التجمع الخامس، القاهرة الجديدة، مصر.</p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 bg-[#1D1D1F] hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                حسناً، فهمت
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
