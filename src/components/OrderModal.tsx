import React, { useState } from 'react';
import { Product, CartItem, OrderFormState } from '../types';
import { GOVERNORATES, getShippingRate } from '../data/governorates';
import { X, CheckCircle, Truck, ShieldCheck, MapPin, Phone, User, Home, FileText, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  directProduct?: Product | null;
  cartItems?: CartItem[];
  onOrderSuccess: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  directProduct,
  cartItems = [],
  onOrderSuccess
}) => {
  if (!isOpen) return null;

  // Form State
  const [formData, setFormData] = useState<OrderFormState>({
    fullName: '',
    phone: '',
    altPhone: '',
    governorateId: 'cairo',
    address: '',
    notes: ''
  });

  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    totalAmount: number;
    shippingFee: number;
    itemsSummary: string;
  } | null>(null);

  // Determine items and pricing
  const isDirect = !!directProduct;
  const activeItems: { product: Product; qty: number }[] = isDirect
    ? [{ product: directProduct!, qty: quantity }]
    : cartItems.map(item => ({ product: item.product, qty: item.quantity }));

  // Has golden bundle?
  const hasBundle = activeItems.some(item => item.product.isBundle);

  // Subtotal calculation
  const subtotal = activeItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  // Shipping calculation based on governorate from Taager price sheet
  const selectedGov = getShippingRate(formData.governorateId);
  const shippingFee = hasBundle ? 0 : selectedGov.price;
  const totalAmount = subtotal + shippingFee;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'يرجى كتابة الاسم بالكامل لتسليم الشحنة';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'يرجى إدخال رقم الهاتف للتواصل مع المندوب';
    } else if (!/^(01)[0-2,5]{1}[0-9]{8}$/.test(formData.phone.trim().replace(/\s+/g, ''))) {
      newErrors.phone = 'يرجى إدخال رقم هاتف مصري صحيح (مثال: 01012345678)';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'يرجى كتابة العنوان بالتفصيل (اسم الشارع والمنطقة)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = 'EG-' + Math.floor(100000 + Math.random() * 900000);
      const itemsSummary = activeItems
        .map(i => `${i.product.arabicTitle} (${i.qty})`)
        .join(' + ');

      setConfirmedOrder({
        orderId,
        totalAmount,
        shippingFee,
        itemsSummary
      });
      setIsSubmitting(false);
      onOrderSuccess();
    }, 600);
  };

  // WhatsApp formatted confirmation
  const getWhatsAppLink = () => {
    if (!confirmedOrder) return '#';
    const text = encodeURIComponent(
      `مرحباً، أود تأكيد طلبي من المتجر:\n` +
      `رقم الطلب: ${confirmedOrder.orderId}\n` +
      `الاسم: ${formData.fullName}\n` +
      `الهاتف: ${formData.phone}\n` +
      `المحافظة: ${selectedGov.name}\n` +
      `العنوان: ${formData.address}\n` +
      `المنتجات: ${confirmedOrder.itemsSummary}\n` +
      `الإجمالي عند الاستلام: ${confirmedOrder.totalAmount} ج.م`
    );
    return `https://wa.me/201000000000?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-2xl my-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmedOrder ? (
          <div>
            {/* Modal Title */}
            <div className="mb-5 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0071E3] mb-1">
                <Truck className="w-4 h-4" />
                <span>الدفع نقدياً عند الاستلام مع حق الفحص والمعاينة</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
                نموذج تأكيد الطلب السريع
              </h3>
            </div>

            {/* Selected Items Summary Strip */}
            <div className="bg-[#F9F9FA] rounded-2xl p-3.5 mb-5 border border-slate-200/80">
              <div className="text-xs font-semibold text-slate-500 mb-2">المنتجات المطلوبة:</div>
              <div className="space-y-2">
                {activeItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold tabular-nums">
                        {item.qty}
                      </span>
                      <span className="font-bold text-[#1D1D1F]">{item.product.arabicTitle}</span>
                    </div>
                    <span className="font-extrabold text-[#1D1D1F] tabular-nums">
                      {item.product.price * item.qty} ج.م
                    </span>
                  </div>
                ))}
              </div>

              {/* If single direct product, let user adjust quantity */}
              {isDirect && (
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">تعديل كمية هذا المنتج:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-6 h-6 rounded bg-slate-200 hover:bg-slate-300 font-bold flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-5 text-center font-bold tabular-nums">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-6 h-6 rounded bg-slate-200 hover:bg-slate-300 font-bold flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>الاسم بالكامل (ثلاثي) *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="مثال: أحمد محمد علي"
                  className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all ${
                    errors.fullName ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Phone Numbers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>رقم الهاتف الأساسي *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01012345678"
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all text-right ${
                      errors.phone ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>رقم هاتف بديل (اختياري)</span>
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={formData.altPhone}
                    onChange={(e) => setFormData({ ...formData, altPhone: e.target.value })}
                    placeholder="رقم آخر للطوارئ"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all text-right"
                  />
                </div>
              </div>

              {/* Governorate Dropdown (Dynamic Taager rates: 95/100/105 EGP) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>المحافظة *</span>
                  </span>
                  <span className="text-[11px] text-[#0071E3] font-semibold">
                    {hasBundle ? 'شحن مجاني مع العرض الذهبي!' : `مصاريف الشحن: ${selectedGov.price} ج.م`}
                  </span>
                </label>
                <select
                  value={formData.governorateId}
                  onChange={(e) => setFormData({ ...formData, governorateId: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all cursor-pointer font-medium"
                >
                  {GOVERNORATES.map((gov) => (
                    <option key={gov.id} value={gov.id}>
                      {gov.name} — ({hasBundle ? 'شحن مجاني' : `${gov.price} ج.م`} · {gov.deliveryTime})
                    </option>
                  ))}
                </select>
              </div>

              {/* Detailed Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-slate-400" />
                  <span>العنوان بالتفصيل *</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="اسم الشارع، رقم العقار، الدور، رقم الشقة، علامة مميزة بجوارك"
                  className={`w-full px-3.5 py-2 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all ${
                    errors.address ? 'border-red-400 bg-red-50/50' : 'border-slate-200'
                  }`}
                />
                {errors.address && <p className="text-[11px] text-red-500 mt-1">{errors.address}</p>}
              </div>

              {/* Delivery Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>ملاحظات إضافية لمندوب الشحن (اختياري)</span>
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="مثال: يفضل التوصيل بعد الساعة 3 عصراً"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-all"
                />
              </div>

              {/* Price Calculation Card */}
              <div className="bg-[#F5F5F7] rounded-2xl p-4 space-y-2 border border-slate-200">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>سعر المنتجات ({activeItems.reduce((acc, i) => acc + i.qty, 0)} قطع):</span>
                  <span className="font-bold tabular-nums text-slate-900">{subtotal} ج.م</span>
                </div>

                <div className="flex justify-between text-xs text-slate-600">
                  <span>مصاريف الشحن ({selectedGov.name}):</span>
                  {hasBundle ? (
                    <span className="font-bold text-emerald-600">0 ج.م (شحن مجاني هدية)</span>
                  ) : (
                    <span className="font-bold tabular-nums text-slate-900">{shippingFee} ج.م</span>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-300/70 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-[#1D1D1F]">الإجمالي المستحق عند الاستلام:</span>
                  <span className="text-2xl font-black text-[#0071E3] tabular-nums">
                    {totalAmount} ج.م
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-extrabold text-base shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>جاري تسجيل الطلب...</span>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>تأكيد الطلب الآن (الدفع عند الاستلام)</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>لن تدفع أي مبالغ الآن · السداد كاش عند الاستلام بعد المعاينة</span>
              </div>

            </form>
          </div>
        ) : (
          /* Order Confirmation Success State */
          <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>تم استلام طلبك بنجاح!</span>
            </div>

            <h3 className="text-2xl font-black text-[#1D1D1F] mb-1">
              شكراً لثقتك بنا، {formData.fullName}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
              رقم تتبع طلبك هو <strong className="text-slate-900 font-mono text-sm">{confirmedOrder.orderId}</strong>. سيتواصل معك المندوب هاتفياً قبل موعد التسليم لتأكيد العنوان.
            </p>

            {/* Receipt Box */}
            <div className="bg-[#F9F9FA] rounded-2xl p-4 text-right text-xs space-y-2 border border-slate-200 mb-6">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">الطلب:</span>
                <span className="font-bold text-slate-900">{confirmedOrder.itemsSummary}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">المحافظة والعنوان:</span>
                <span className="font-bold text-slate-900">{selectedGov.name} - {formData.address}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">رقم الهاتف:</span>
                <span className="font-bold text-slate-900 font-mono" dir="ltr">{formData.phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">وقت التوصيل المتوقع:</span>
                <span className="font-bold text-[#0071E3]">{selectedGov.deliveryTime}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm">
                <span>المبلغ المطلوب عند الاستلام:</span>
                <span className="text-emerald-700 tabular-nums">{confirmedOrder.totalAmount} ج.م</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>إرسال تفاصيل الطلب فوراً عبر واتساب</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#1D1D1F] font-semibold text-xs transition-colors cursor-pointer"
              >
                العودة للصفحة الرئيسية
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
