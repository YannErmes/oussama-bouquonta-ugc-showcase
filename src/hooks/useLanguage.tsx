import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    'hero.name': 'Oussama Bouqontar',
    'hero.title': 'Creative UGC Content for Your Brand',
    'hero.subtitle': 'Helping brands connect with their audience through authentic, engaging videos that drive real results and meaningful connections.',
    'hero.whatsapp': "Let's Chat on WhatsApp",
    'hero.instagram': 'Follow on Instagram',
    'hero.scroll': 'Scroll to discover my work',
    
    // About Section
    'about.title': 'About Me',
    'about.bio1': 'Based in Morocco, I specialize in creating authentic, high-converting User Generated Content for brands worldwide. From concept to final cut, I deliver engaging videos that resonate with your target audience.',
    'about.bio2': 'With a deep understanding of social media trends and consumer behavior, I craft content that not only looks great but drives real business results. Every video tells a story that connects brands with their community.',
    'about.skill1.title': 'Content Creation',
    'about.skill1.desc': 'Professional video production with state-of-the-art equipment',
    'about.skill2.title': 'Video Editing',
    'about.skill2.desc': 'Expert post-production and storytelling through visuals',
    'about.skill3.title': 'Audience Engagement',
    'about.skill3.desc': 'Understanding what resonates with target demographics',
    'about.skill4.title': 'Brand Growth',
    'about.skill4.desc': 'Proven track record of driving measurable results',
    
    // Video Portfolio
    'portfolio.title': 'My Work',
    'portfolio.subtitle': 'Take a look at some of my recent UGC projects that helped brands connect with their audience and drive engagement.',
    'portfolio.viewFullScreen': 'View Full Screen',
    'portfolio.seeMore': 'See More Work & Get Quote',
    
    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'Professional UGC content tailored to your brand needs',
    'services.service1.title': 'UGC Video Creation',
    'services.service1.duration': '15-60 seconds',
    'services.service1.desc': 'Authentic user-generated style videos that showcase your products naturally',
    'services.service1.feature1': 'Authentic storytelling',
    'services.service1.feature2': 'High-quality production',
    'services.service1.feature3': 'Platform optimization',
    'services.service2.title': 'Product Showcases',
    'services.service2.duration': '30-90 seconds',
    'services.service2.desc': 'Detailed product demonstrations highlighting key features and benefits',
    'services.service2.feature1': 'Feature highlights',
    'services.service2.feature2': 'Real-world usage',
    'services.service2.feature3': 'Clear value proposition',
    'services.service3.title': 'Lifestyle Videos',
    'services.service3.duration': '30-120 seconds',
    'services.service3.desc': 'Lifestyle integration videos showing products in everyday scenarios',
    'services.service3.feature1': 'Lifestyle integration',
    'services.service3.feature2': 'Emotional connection',
    'services.service3.feature3': 'Brand alignment',
    'services.service4.title': 'Testimonial Content',
    'services.service4.duration': '20-60 seconds',
    'services.service4.desc': 'Genuine testimonial-style content that builds trust and credibility',
    'services.service4.feature1': 'Authentic reviews',
    'services.service4.feature2': 'Trust building',
    'services.service4.feature3': 'Social proof',
    'services.cta.title': 'Ready to Get Started?',
    'services.cta.subtitle': 'Get a custom quote for your project',
    'services.cta.button': 'Get Quote & View Examples',
    
    // Contact Section
    'contact.title': "Let's Create Together",
    'contact.subtitle': "Ready to take your brand's content to the next level? Let's discuss your vision and create authentic UGC that resonates with your audience.",
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.desc': 'Quick response, instant communication',
    'contact.whatsapp.action': 'Start Conversation',
    'contact.instagram.title': 'Instagram',
    'contact.instagram.desc': 'See my latest work and behind the scenes',
    'contact.instagram.action': 'Follow & Message',
    'contact.email.prefer': 'Prefer email?',
    'contact.expect.title': 'What to Expect',
    'contact.expect.response.title': 'Quick Response',
    'contact.expect.response.desc': 'I typically respond within 2-4 hours during business days',
    'contact.expect.consultation.title': 'Free Consultation',
    'contact.expect.consultation.desc': 'Initial discussion about your project and goals at no cost',
    'contact.expect.custom.title': 'Custom Solutions',
    'contact.expect.custom.desc': 'Tailored content strategy based on your brand and audience',
    
    // Footer
    'footer.tagline': 'Creative UGC Content Creator helping brands connect with their audience through authentic, engaging videos.',
    'footer.copyright': '© 2025 Oussama Bouqontar — UGC Creator. All rights reserved.',
  },
  fr: {
    // Hero Section
    'hero.name': 'Oussama Bouqontar',
    'hero.title': 'Contenu UGC Créatif pour Votre Marque',
    'hero.subtitle': "Aidant les marques à se connecter avec leur audience grâce à des vidéos authentiques et engageantes qui génèrent de vrais résultats et des connexions significatives.",
    'hero.whatsapp': 'Discutons sur WhatsApp',
    'hero.instagram': 'Suivre sur Instagram',
    'hero.scroll': 'Faites défiler pour découvrir mon travail',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.bio1': "Basé au Maroc, je me spécialise dans la création de contenu généré par les utilisateurs authentique et à forte conversion pour les marques du monde entier. Du concept au montage final, je livre des vidéos engageantes qui résonnent avec votre public cible.",
    'about.bio2': "Avec une compréhension approfondie des tendances des médias sociaux et du comportement des consommateurs, je crée du contenu qui non seulement a fière allure mais génère de vrais résultats commerciaux. Chaque vidéo raconte une histoire qui connecte les marques à leur communauté.",
    'about.skill1.title': 'Création de Contenu',
    'about.skill1.desc': 'Production vidéo professionnelle avec équipement de pointe',
    'about.skill2.title': 'Montage Vidéo',
    'about.skill2.desc': 'Post-production experte et narration visuelle',
    'about.skill3.title': "Engagement d'Audience",
    'about.skill3.desc': 'Comprendre ce qui résonne avec les démographies cibles',
    'about.skill4.title': 'Croissance de Marque',
    'about.skill4.desc': 'Historique prouvé de génération de résultats mesurables',
    
    // Video Portfolio
    'portfolio.title': 'Mon Travail',
    'portfolio.subtitle': "Jetez un œil à quelques-uns de mes projets UGC récents qui ont aidé les marques à se connecter avec leur audience et à stimuler l'engagement.",
    'portfolio.viewFullScreen': 'Voir en Plein Écran',
    'portfolio.seeMore': 'Voir Plus de Travaux & Obtenir un Devis',
    
    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'Contenu UGC professionnel adapté aux besoins de votre marque',
    'services.service1.title': 'Création Vidéo UGC',
    'services.service1.duration': '15-60 secondes',
    'services.service1.desc': 'Vidéos authentiques de style généré par les utilisateurs qui présentent vos produits naturellement',
    'services.service1.feature1': 'Narration authentique',
    'services.service1.feature2': 'Production de haute qualité',
    'services.service1.feature3': 'Optimisation plateforme',
    'services.service2.title': 'Présentations Produit',
    'services.service2.duration': '30-90 secondes',
    'services.service2.desc': 'Démonstrations produit détaillées mettant en évidence les caractéristiques et avantages clés',
    'services.service2.feature1': 'Points forts des fonctionnalités',
    'services.service2.feature2': 'Utilisation réelle',
    'services.service2.feature3': 'Proposition de valeur claire',
    'services.service3.title': 'Vidéos Lifestyle',
    'services.service3.duration': '30-120 secondes',
    'services.service3.desc': "Vidéos d'intégration lifestyle montrant les produits dans des scénarios quotidiens",
    'services.service3.feature1': 'Intégration lifestyle',
    'services.service3.feature2': 'Connexion émotionnelle',
    'services.service3.feature3': 'Alignement de marque',
    'services.service4.title': 'Contenu Témoignage',
    'services.service4.duration': '20-60 secondes',
    'services.service4.desc': 'Contenu témoignage authentique qui construit la confiance et la crédibilité',
    'services.service4.feature1': 'Avis authentiques',
    'services.service4.feature2': 'Construction de confiance',
    'services.service4.feature3': 'Preuve sociale',
    'services.cta.title': 'Prêt à Commencer?',
    'services.cta.subtitle': 'Obtenez un devis personnalisé pour votre projet',
    'services.cta.button': 'Obtenir Devis & Voir Exemples',
    
    // Contact Section
    'contact.title': 'Créons Ensemble',
    'contact.subtitle': "Prêt à amener le contenu de votre marque au niveau supérieur? Discutons de votre vision et créons de l'UGC authentique qui résonne avec votre audience.",
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.desc': 'Réponse rapide, communication instantanée',
    'contact.whatsapp.action': 'Commencer Conversation',
    'contact.instagram.title': 'Instagram',
    'contact.instagram.desc': 'Voir mon travail récent et les coulisses',
    'contact.instagram.action': 'Suivre & Envoyer Message',
    'contact.email.prefer': 'Préférez email?',
    'contact.expect.title': 'À Quoi S\'Attendre',
    'contact.expect.response.title': 'Réponse Rapide',
    'contact.expect.response.desc': 'Je réponds généralement dans les 2-4 heures pendant les jours ouvrables',
    'contact.expect.consultation.title': 'Consultation Gratuite',
    'contact.expect.consultation.desc': 'Discussion initiale sur votre projet et objectifs sans frais',
    'contact.expect.custom.title': 'Solutions Personnalisées',
    'contact.expect.custom.desc': 'Stratégie de contenu sur mesure basée sur votre marque et audience',
    
    // Footer
    'footer.tagline': 'Créateur de Contenu UGC Créatif aidant les marques à se connecter avec leur audience grâce à des vidéos authentiques et engageantes.',
    'footer.copyright': '© 2025 Oussama Bouqontar — Créateur UGC. Tous droits réservés.',
  },
  ar: {
    // Hero Section
    'hero.name': 'أسامة بوقنطار',
    'hero.title': 'محتوى إبداعي للمحتوى المُنشأ من المستخدمين لعلامتك التجارية',
    'hero.subtitle': 'مساعدة العلامات التجارية على التواصل مع جمهورها من خلال مقاطع فيديو أصيلة وجذابة تحقق نتائج حقيقية وروابط ذات معنى.',
    'hero.whatsapp': 'لنتحدث على واتساب',
    'hero.instagram': 'تابع على إنستغرام',
    'hero.scroll': 'مرر لاكتشاف أعمالي',
    
    // About Section
    'about.title': 'نبذة عني',
    'about.bio1': 'مقيم في المغرب، أتخصص في إنشاء محتوى أصيل وعالي التحويل مُنشأ من المستخدمين للعلامات التجارية في جميع أنحاء العالم. من المفهوم إلى القطع النهائي، أقدم مقاطع فيديو جذابة تتردد صداها مع جمهورك المستهدف.',
    'about.bio2': 'مع فهم عميق لاتجاهات وسائل التواصل الاجتماعي وسلوك المستهلك، أصنع محتوى لا يبدو رائعاً فحسب، بل يحقق نتائج تجارية حقيقية. كل فيديو يحكي قصة تربط العلامات التجارية بمجتمعها.',
    'about.skill1.title': 'إنشاء المحتوى',
    'about.skill1.desc': 'إنتاج فيديو احترافي بمعدات حديثة',
    'about.skill2.title': 'تحرير الفيديو',
    'about.skill2.desc': 'ما بعد الإنتاج الخبير والسرد من خلال المرئيات',
    'about.skill3.title': 'إشراك الجمهور',
    'about.skill3.desc': 'فهم ما يتردد صداه مع الفئات السكانية المستهدفة',
    'about.skill4.title': 'نمو العلامة التجارية',
    'about.skill4.desc': 'سجل حافل مثبت في تحقيق نتائج قابلة للقياس',
    
    // Video Portfolio
    'portfolio.title': 'أعمالي',
    'portfolio.subtitle': 'ألق نظرة على بعض مشاريع المحتوى المُنشأ من المستخدمين الحديثة التي ساعدت العلامات التجارية على التواصل مع جمهورها وزيادة المشاركة.',
    'portfolio.viewFullScreen': 'عرض بملء الشاشة',
    'portfolio.seeMore': 'شاهد المزيد من الأعمال واحصل على عرض سعر',
    
    // Services Section
    'services.title': 'الخدمات',
    'services.subtitle': 'محتوى احترافي مُنشأ من المستخدمين مصمم خصيصاً لاحتياجات علامتك التجارية',
    'services.service1.title': 'إنشاء فيديو المحتوى المُنشأ من المستخدمين',
    'services.service1.duration': '15-60 ثانية',
    'services.service1.desc': 'مقاطع فيديو أصيلة بأسلوب المحتوى المُنشأ من المستخدمين تعرض منتجاتك بشكل طبيعي',
    'services.service1.feature1': 'سرد أصيل',
    'services.service1.feature2': 'إنتاج عالي الجودة',
    'services.service1.feature3': 'تحسين المنصة',
    'services.service2.title': 'عروض المنتجات',
    'services.service2.duration': '30-90 ثانية',
    'services.service2.desc': 'عروض توضيحية مفصلة للمنتج تسلط الضوء على الميزات والفوائد الرئيسية',
    'services.service2.feature1': 'إبراز الميزات',
    'services.service2.feature2': 'الاستخدام في العالم الحقيقي',
    'services.service2.feature3': 'اقتراح قيمة واضح',
    'services.service3.title': 'فيديوهات أسلوب الحياة',
    'services.service3.duration': '30-120 ثانية',
    'services.service3.desc': 'مقاطع فيديو تكامل أسلوب الحياة تُظهر المنتجات في سيناريوهات يومية',
    'services.service3.feature1': 'تكامل أسلوب الحياة',
    'services.service3.feature2': 'اتصال عاطفي',
    'services.service3.feature3': 'توافق العلامة التجارية',
    'services.service4.title': 'محتوى الشهادات',
    'services.service4.duration': '20-60 ثانية',
    'services.service4.desc': 'محتوى شهادة أصيل يبني الثقة والمصداقية',
    'services.service4.feature1': 'مراجعات أصيلة',
    'services.service4.feature2': 'بناء الثقة',
    'services.service4.feature3': 'إثبات اجتماعي',
    'services.cta.title': 'جاهز للبدء؟',
    'services.cta.subtitle': 'احصل على عرض سعر مخصص لمشروعك',
    'services.cta.button': 'احصل على عرض سعر وشاهد الأمثلة',
    
    // Contact Section
    'contact.title': 'لننشئ معاً',
    'contact.subtitle': 'جاهز لرفع محتوى علامتك التجارية إلى المستوى التالي؟ لنناقش رؤيتك وننشئ محتوى أصيل مُنشأ من المستخدمين يتردد صداه مع جمهورك.',
    'contact.whatsapp.title': 'واتساب',
    'contact.whatsapp.desc': 'استجابة سريعة، تواصل فوري',
    'contact.whatsapp.action': 'بدء المحادثة',
    'contact.instagram.title': 'إنستغرام',
    'contact.instagram.desc': 'شاهد أعمالي الأخيرة وما وراء الكواليس',
    'contact.instagram.action': 'متابعة وإرسال رسالة',
    'contact.email.prefer': 'تفضل البريد الإلكتروني؟',
    'contact.expect.title': 'ما يمكن توقعه',
    'contact.expect.response.title': 'استجابة سريعة',
    'contact.expect.response.desc': 'أرد عادة خلال 2-4 ساعات خلال أيام العمل',
    'contact.expect.consultation.title': 'استشارة مجانية',
    'contact.expect.consultation.desc': 'مناقشة أولية حول مشروعك وأهدافك دون تكلفة',
    'contact.expect.custom.title': 'حلول مخصصة',
    'contact.expect.custom.desc': 'استراتيجية محتوى مصممة بناءً على علامتك التجارية وجمهورك',
    
    // Footer
    'footer.tagline': 'منشئ محتوى إبداعي مُنشأ من المستخدمين يساعد العلامات التجارية على التواصل مع جمهورها من خلال مقاطع فيديو أصيلة وجذابة.',
    'footer.copyright': '© 2025 أسامة بوقنطار — منشئ محتوى مُنشأ من المستخدمين. جميع الحقوق محفوظة.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set document direction for RTL languages
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};