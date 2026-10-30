import React, { useState } from 'react';
import { CartItem } from '../types';
import { GOVERNORATES, getShippingRate } from '../data/governorates';
import { X, Trash2, ShoppingBag, ArrowLeft, Truck, ShieldCheck, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  const [governorateId, setGovernorateId] = useState('cairo');
  const selectedGov = getShippingRate(governorateId);

  const hasBundle = items.some(i => i.product.isBundle);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingFee = items.length === 0 ? 0 : (hasBundle ? 0 : selectedGov.price);
  const total = subtotal + shippingFee;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-start animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#0071E3]" />
            <h3 className="font-bold text-base sm:text-lg text-[#1D1D1F]">سلة المشتريات ({items.reduce((a, b) => a + b.quantity, 0)})</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping notification bar */}
        {hasBundle ? (
          <div className="bg-emerald-50 px-4 py-2 border-b border-emerald-100 text-emerald-800 text-xs flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>تهانينا! أنت مؤهل للحصول على <strong>شحن مجاني 100%</strong> مع العرض الذهبي.</span>
          </div>
        ) : (
          <div className="bg-blue-50 px-4 py-2 border-b border-blue-100 text-blue-800 text-xs flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-[#0071E3] shrink-0" />
            <span>نصيحة: اطلب العرض الذهبي المزدوج واحصل على شحن مجاني لأي مكان!</span>
          </div>
        )}

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-700">سلتك فارغة حالياً</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                اختر ملحقاتك المفضلة واستمتع بتجربة شحن سريع مع الدفع عند الاستلام.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#1D1D1F] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
              >
                تصفح المنتجات الآن
              </button>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.product.id}
                className="bg-[#FBFBFC] rounded-2xl p-3 sm:p-4 border border-black/[0.05] flex gap-3.5 items-center justify-between"
              >
                <div className="w-16 h-16 rounded-xl bg-white border border-slate-100 p-1 shrink-0 flex items-center justify-center">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.arabicTitle}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 min-w-0 pr-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1F] truncate">
                    {item.product.arabicTitle}
                  </h4>
                  <div className="text-xs font-bold text-[#0071E3] tabular-nums mt-0.5">
                    {item.product.price} ج.م
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      className="w-6 h-6 rounded bg-white border border-slate-200 text-xs font-bold hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold w-4 text-center tabular-nums">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 rounded bg-white border border-slate-200 text-xs font-bold hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                  title="حذف من السلة"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer (Pricing & Checkout) */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-[#FBFBFC] space-y-3.5">
            {/* Quick Governorate estimate */}
            <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">الشحن إلى:</span>
              <select
                value={governorateId}
                onChange={(e) => setGovernorateId(e.target.value)}
                className="bg-transparent font-bold text-[#0071E3] focus:outline-none cursor-pointer text-xs"
              >
                {GOVERNORATES.map(gov => (
                  <option key={gov.id} value={gov.id}>
                    {gov.name} ({hasBundle ? 'مجاني' : `${gov.price} ج.م`})
                  </option>
                ))}
              </select>
            </div>

            {/* Calculations breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>المجموع الفرعي:</span>
                <span className="font-bold text-slate-900 tabular-nums">{subtotal} ج.م</span>
              </div>
              <div className="flex justify-between">
                <span>مصاريف الشحن ({selectedGov.name}):</span>
                {hasBundle ? (
                  <span className="font-bold text-emerald-600">شحن مجاني 100%</span>
                ) : (
                  <span className="font-bold text-slate-900 tabular-nums">{shippingFee} ج.م</span>
                )}
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                <span className="font-bold text-sm text-[#1D1D1F]">الإجمالي عند الاستلام:</span>
                <span className="text-xl font-extrabold text-[#0071E3] tabular-nums">{total} ج.م</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>متابعة إتمام الطلب (الدفع عند الاستلام)</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>معاينة وتجربة قبل دفع مليم واحد</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
