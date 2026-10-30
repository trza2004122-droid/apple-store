export interface Product {
  id: string;
  name: string;
  arabicTitle: string;
  tagline: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  images: string[];
  features: string[];
  specs: { label: string; value: string }[];
  isBundle?: boolean;
}

export interface GovernorateRate {
  id: string;
  name: string;
  price: number;
  deliveryTime: string;
  tier: 1 | 2 | 3;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface OrderFormState {
  fullName: string;
  phone: string;
  altPhone: string;
  governorateId: string;
  address: string;
  notes: string;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  productUsed: string;
}
