import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/reviews';
import { Star, ShieldCheck, Quote, CheckCircle, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-t border-black/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0071E3] mb-2">
            <ThumbsUp className="w-4 h-4" />
            <span>تجارب حقيقية وموثقة 100%</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            ماذا يقول عملاؤنا بعد التجربة والمعاينة؟
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            أكثر من 4,500 عميل سعيد في جميع محافظات مصر وثقوا في جودة منتجاتنا وخدمة الدفع عند الاستلام.
          </p>

          {/* Aggregate Rating Badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-[#F5F5F7] px-5 py-2.5 rounded-full border border-black/[0.05]">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#1D1D1F] tabular-nums">4.9 من 5</span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-600 font-medium">(أكثر من 420 تقييم موثق)</span>
          </div>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FBFBFC] rounded-3xl p-6 border border-black/[0.06] hover:border-black/10 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Stars + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>

                {/* Review Comment Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#1D1D1F]">{review.name}</span>
                    {review.verified && (
                      <span title="مشتري مؤكد">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-50" />
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5">{review.city}</span>
                </div>

                <div className="text-[10px] text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200/60 max-w-[130px] truncate text-left">
                  {review.productUsed}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Footnote */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>جميع التقييمات صادرة من عملاء استلموا وفحصوا المنتجات بأنفسهم قبل السداد</span>
        </div>

      </div>
    </section>
  );
};
