import { GovernorateRate } from '../types';

export const GOVERNORATES: GovernorateRate[] = [
  // 95 ج.م (الفئة الأولى - العاصمة والمدن الرئيسية)
  { id: 'cairo', name: 'القاهرة', price: 95, deliveryTime: '24 - 48 ساعة', tier: 1 },
  { id: 'giza', name: 'الجيزة', price: 95, deliveryTime: '24 - 48 ساعة', tier: 1 },
  { id: 'alexandria', name: 'الإسكندرية', price: 95, deliveryTime: '24 - 48 ساعة', tier: 1 },

  // 100 ج.م (الفئة الثانية - محافظات وجه بحري ومدن القناة)
  { id: 'beheira', name: 'البحيرة', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'dakahlia', name: 'الدقهلية (المنصورة)', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'sharqia', name: 'الشرقية (الزقازيق)', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'gharbia', name: 'الغربية', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'qalyubia', name: 'القليوبية', price: 100, deliveryTime: '24 - 48 ساعة', tier: 2 },
  { id: 'ismailia', name: 'الإسماعيلية', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'suez', name: 'السويس', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'menofia', name: 'المنوفية', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'portsaid', name: 'بور سعيد', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'kafr-elsheikh', name: 'كفر الشيخ', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'mahalla', name: 'المحلة الكبرى', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'tenth-ramadan', name: 'العاشر من رمضان', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'tanta', name: 'طنطا', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'beni-suef', name: 'بني سويف', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },
  { id: 'damietta', name: 'دمياط', price: 100, deliveryTime: '2 - 3 أيام', tier: 2 },

  // 105 ج.م (الفئة الثالثة - الصعيد والمناطق الساحلية والحدودية)
  { id: 'sohag', name: 'سوهاج', price: 105, deliveryTime: '3 - 4 أيام', tier: 3 },
  { id: 'asyut', name: 'أسيوط', price: 105, deliveryTime: '3 - 4 أيام', tier: 3 },
  { id: 'fayoum', name: 'الفيوم', price: 105, deliveryTime: '2 - 3 أيام', tier: 3 },
  { id: 'ain-sokhna', name: 'العين السخنة', price: 105, deliveryTime: '2 - 3 أيام', tier: 3 },
  { id: 'aswan', name: 'أسوان', price: 105, deliveryTime: '3 - 5 أيام', tier: 3 },
  { id: 'qena', name: 'قنا', price: 105, deliveryTime: '3 - 4 أيام', tier: 3 },
  { id: 'minya', name: 'المنيا', price: 105, deliveryTime: '3 - 4 أيام', tier: 3 },
  { id: 'wadi-natrun', name: 'وادي النطرون', price: 105, deliveryTime: '2 - 3 أيام', tier: 3 },
  { id: 'matrouh', name: 'مرسى مطروح', price: 105, deliveryTime: '3 - 5 أيام', tier: 3 },
  { id: 'luxor', name: 'الأقصر', price: 105, deliveryTime: '3 - 4 أيام', tier: 3 },
  { id: 'north-coast', name: 'الساحل الشمالي', price: 105, deliveryTime: '2 - 4 أيام', tier: 3 },
  { id: 'red-sea', name: 'البحر الأحمر (الغردقة)', price: 105, deliveryTime: '3 - 5 أيام', tier: 3 },
];

export const SHIPPING_IMAGE_PATH = '/assets/aistudio/119bb7a0-22eb-4b7b-bc1b-b1d45ece1a57_dbba6464.webp';

export function getShippingRate(governorateId: string): GovernorateRate {
  const found = GOVERNORATES.find(g => g.id === governorateId);
  return found || GOVERNORATES[0];
}
