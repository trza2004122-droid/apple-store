import React, { useState } from 'react';
import { Product, CartItem } from './types';
import { POWER_BANK_PRODUCT, AIRPODS_PRODUCT, GOLDEN_BUNDLE_PRODUCT } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { BundleSection } from './components/BundleSection';
import { ShippingSection } from './components/ShippingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { CartDrawer } from './components/CartDrawer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [directProduct, setDirectProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart total count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Add to cart handler
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id: product.id, product, quantity }];
    });
    showToast(`تمت إضافة "${product.arabicTitle}" إلى السلة`);
  };

  // Update quantity in cart
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  // Direct 1-click order handler
  const handleDirectOrder = (product: Product) => {
    setDirectProduct(product);
    setIsOrderModalOpen(true);
  };

  // General checkout from navbar / mobile sticky bar
  const handleGeneralOrder = () => {
    if (cartItems.length > 0) {
      setDirectProduct(null);
    } else {
      // Default to golden bundle if cart is empty
      setDirectProduct(GOLDEN_BUNDLE_PRODUCT);
    }
    setIsOrderModalOpen(true);
  };

  // Smooth scroll helpers
  const scrollToBundle = () => {
    const el = document.getElementById('bundle');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    const el = document.getElementById('powerbank');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col font-sans relative selection:bg-[#0071E3] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#1D1D1F] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={handleGeneralOrder}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onScrollToBundle={scrollToBundle}
          onScrollToProducts={scrollToProducts}
          onOpenOrderModal={handleGeneralOrder}
        />

        {/* 2. Product 1: MagSafe Power Bank 8000mAh */}
        <ProductSection
          product={POWER_BANK_PRODUCT}
          sectionId="powerbank"
          badgeText="ملحق شحن MagSafe معتمد"
          onAddToCart={handleAddToCart}
          onDirectOrder={handleDirectOrder}
        />

        {/* 3. Product 2: AirPods 4 Semi Original */}
        <ProductSection
          product={AIRPODS_PRODUCT}
          sectionId="airpods"
          badgeText="صوت نقي بتقنية Spatial Audio"
          onAddToCart={handleAddToCart}
          onDirectOrder={handleDirectOrder}
        />

        {/* 4. Highlighted Golden Bundle Offer Section */}
        <BundleSection
          bundleProduct={GOLDEN_BUNDLE_PRODUCT}
          onAddToCart={handleAddToCart}
          onDirectOrder={handleDirectOrder}
        />

        {/* 5. Shipping Rates According to Governorate (Taager based) */}
        <ShippingSection
          onScrollToBundle={scrollToBundle}
        />

        {/* 6. Social Proof / Verified Customer Reviews */}
        <ReviewsSection />

        {/* 7. Frequently Asked Questions (FAQ) */}
        <FAQSection />
      </main>

      {/* 8. Minimalist Apple-inspired Footer with Policies */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setDirectProduct(null);
          setIsOrderModalOpen(true);
        }}
      />

      {/* Cash on Delivery Order Modal with Dynamic Governorate Rates */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        directProduct={directProduct}
        cartItems={cartItems}
        onOrderSuccess={() => {
          // Clear cart on successful order
          if (!directProduct) {
            setCartItems([]);
          }
        }}
      />

      {/* Mobile Sticky Buy Now Bottom Bar (< 15% viewport height) */}
      <MobileStickyBar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onQuickOrder={handleGeneralOrder}
      />

    </div>
  );
}
