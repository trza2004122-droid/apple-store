import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'هل يمكنني فتح الشحنة وفحص المنتجات قبل دفع ثمنها للمندوب؟',
    answer: 'نعم بالتأكيد! سياستنا تتيح لك فتح الصندوق وتجربة الباور بانك والتأكد من التصاقه المغناطيسي وتجربة سماعات AirPods 4 والتحقق من نقاء الصوت ومطابقتها للمواصفات المعروضة قبل دفع مليم واحد للمندوب.'
  },
  {
    question: 'كيف يتم حساب مصاريف الشحن لمحافظتي؟',
    answer: 'مصاريف الشحن محددة رسمياً حسب جدول المحافظات: 95 جنيهاً للقاهرة والجيزة والإسكندرية، 100 جنيه لمحافظات الدلتا والقناة (مثل الدقهلية والشرقية والغربية وبورسعيد)، و 105 جنيهات لمحافظات الصعيد والمناطق الساحلية (مثل سوهاج وأسيوط والفيوم والغردقة). وفي حال طلبك "العرض الذهبي المزدوج"، الشحن مجاني 100% لأي محافظة.'
  },
  {
    question: 'ما هي مدة التوصيل المتوقعة بعد إتمام الطلب؟',
    answer: 'يتم تسليم الطلبات داخل القاهرة والجيزة والإسكندرية خلال 24 إلى 48 ساعة كحد أقصى. وبالنسبة لباقي المحافظات يستغرق الشحن من يومين إلى 3 أيام عمل.'
  },
  {
    question: 'هل يأتي الباور بانك والسماعة مع ضمان؟',
    answer: 'نعم، يشمل الشراء ضمان استبدال فوري لمدة 14 يوماً ضد أي عيوب صناعة. في حال وجود أي ملاحظة يمكنك التواصل مع خدمة العملاء عبر الواتساب ويتم إرسال مندوب لاستبدال المنتج دون أي تعقيد.'
  },
  {
    question: 'هل الباور بانك متوافق مع هواتف أندرويد أيضاً؟',
    answer: 'نعم، الباور بانك يدعم الشحن السلكي السريع 20W PD عبر منفذ Type-C لجميع هواتف سامسونج وشاومي وهواوي، كما يدعم الشحن اللاسلكي لأي هاتف يدعم تقنية Qi (يمكن استخدام حلقة ماج سيف المرفقة مع الجراب).'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-[#F5F5F7] border-t border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071E3] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>إجابات واضحة لراحة بالك</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
            الأسئلة الشائعة حول الطلب والمعاينة
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1D1D1F] hover:text-[#0071E3] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="p-1 rounded-full bg-slate-100 text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
