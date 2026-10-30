import { Product } from '../types';

export const POWER_BANK_PRODUCT: Product = {
  id: 'magsafe-powerbank-8000',
  name: 'MagSafe Power Bank 8000mAh',
  arabicTitle: 'باور بانك لاسلكي مغناطيسي 8000mAh',
  tagline: 'شحن مغناطيسي سريع بقوة 20W وتصميم فائق النحافة في راحة يدك',
  price: 649,
  originalPrice: 950,
  discountPercentage: 32,
  images: [
    '/assets/aistudio/523f50e2-91a4-4a72-ba3b-8d399ad3d330_b6016fb8.webp',
    '/assets/aistudio/8d3ba963-85c2-4081-a0bd-b2e5aa2edecf_5942e859.webp',
    '/assets/aistudio/39f8b2fa-92cc-4be2-ae79-a77b9cf3ca74_159858de.webp'
  ],
  features: [
    'شحن سريع سلكي بقوة 20W PD عبر منفذ Type-C وشحن لاسلكي حتى 15W',
    'قبضة مغناطيسية MagSafe فائقة القوة تلتصق بالهاتف دون انزلاق',
    'سعة حقيقية 8000mAh تشحن هاتفك بالكامل من 1.5 إلى مرتين',
    'مؤشرات LED ذكية لعرض مستوى الطاقة وحالة الشحن الفورية',
    'تصميم انسيابي ونحيف مخصص للجيب وسهولة الحمل أثناء التنقل',
    'نظام حماية ذكي متعدد ضد الشحن الزائد والحرارة وقصر الدائرة'
  ],
  specs: [
    { label: 'السعة التخزينية', value: '8,000 مللي أمبير (mAh)' },
    { label: 'شحن Type-C السلكي', value: '20W Power Delivery (PD)' },
    { label: 'الشحن اللاسلكي', value: 'MagSafe 15W / 10W / 7.5W' },
    { label: 'التوافق', value: 'iPhone 12 وحتى iPhone 16 / أجهزة Qi' },
    { label: 'الوزن والسمك', value: '185 جرام / خفيف وفائق النحافة' },
    { label: 'المؤشر', value: 'شاشة إضاءات LED رقمية' }
  ]
};

export const AIRPODS_PRODUCT: Product = {
  id: 'airpods-4-semi-original',
  name: 'AirPods 4 Semi Original',
  arabicTitle: 'سماعات AirPods 4 Semi Original',
  tagline: 'صوت مكاني غامر وشريحة H2 متطورة مع بطارية تدوم حتى 30 ساعة',
  price: 699,
  originalPrice: 1050,
  discountPercentage: 33,
  images: [
    '/assets/aistudio/a54b6187-2099-4411-a523-9a5a1c54f117_5b62b447.webp',
    '/assets/aistudio/5e19ddc4-4bd3-4a43-8ffc-4d8064cb0c58_e96f37ba.webp'
  ],
  features: [
    'شريحة H2 الذكية لصوت نقي جداً وبيس قوي وعميق',
    'دعم كامل لميزة الصوت المكاني ثلاثي الأبعاد (Spatial Audio)',
    'معيار مقاومة الغبار ورذاذ الماء والتعرق IP54 للرياضة واليوميات',
    'بطارية تدوم حتى 30 ساعة متواصلة مع حافظة الشحن السريع',
    'أحدث تقنية بلوتوث 5.3 لثبات الإشارة وعدم وجود أي تأخير في الألعاب',
    'مايكروفونات مدمجة متطورة لعزل ضوضاء الرياح والمحيط أثناء المكالمات'
  ],
  specs: [
    { label: 'المعالج الصوتي', value: 'H2 Audio Chip متطورة' },
    { label: 'تقنية الصوت', value: 'صوت مكاني مخصص (Spatial Audio)' },
    { label: 'مقاومة الماء', value: 'معيار IP54 (مقاومة للتعرق ورذاذ الماء)' },
    { label: 'عمر البطارية', value: 'حتى 30 ساعة مع العلبة / 6 ساعات استماع' },
    { label: 'الاتصال', value: 'بلوتوث 5.3 فائق السرعة' },
    { label: 'منفذ الشحن', value: 'USB-C متوافق مع شواحن آبل' }
  ]
};

export const GOLDEN_BUNDLE_PRODUCT: Product = {
  id: 'golden-bundle-offer',
  name: 'The Golden Apple Bundle',
  arabicTitle: 'العرض الذهبي المزدوج (الباور بانك + السماعة)',
  tagline: 'الحزمة الكاملة لهاتفك: طاقة مستمرة وصوت محيطي فاخر مع شحن مجاني وهدايا فورية',
  price: 1149,
  originalPrice: 2000,
  discountPercentage: 43,
  isBundle: true,
  images: [
    '/assets/aistudio/8d3ba963-85c2-4081-a0bd-b2e5aa2edecf_5942e859.webp',
    '/assets/aistudio/5e19ddc4-4bd3-4a43-8ffc-4d8064cb0c58_e96f37ba.webp'
  ],
  features: [
    'الحصول على باور بانك MagSafe 8000mAh + سماعة AirPods 4 الأصلية سيمي',
    'شحن مجاني بالكامل لأي محافظة في مصر (توفير إضافي يصل لـ 105 ج.م)',
    'هدية حصرية: كابل شحن سريع Type-C معتمد',
    'هدية حصرية: جراب سيليكون مضاد للصدمات للسماعة',
    'الدفع عند الاستلام مع إمكانية الفحص والمعاينة قبل السداد',
    'ضمان استبدال فوري لمدة 14 يوماً ضد أي عيوب صناعة'
  ],
  specs: [
    { label: 'المحتويات', value: 'باور بانك 8000mAh + سماعة AirPods 4 + كابل شحن + جراب' },
    { label: 'الشحن', value: 'مجاني 100% لجميع المحافظات' },
    { label: 'الضمان', value: 'ضمان 14 يوم استبدال فوري' },
    { label: 'طريقة الدفع', value: 'كاش عند الاستلام بعد المعاينة' }
  ]
};
