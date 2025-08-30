import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    'hero.title.line1': 'Oussama Bouqontar',
    'hero.title.line2': 'Creative UGC Content',
    'hero.title.line3': 'for Your Brand',
    'hero.subtitle': 'Helping brands connect with their audience through authentic, engaging videos that drive real results and meaningful connections.',
    'hero.cta.whatsapp': "Let's Chat on WhatsApp",
    'hero.cta.instagram': 'Follow on Instagram',
    'hero.scroll': 'Scroll to discover my work',

    // About Section
    'about.title': 'About',
    'about.title.highlight': 'Me',
    'about.description.p1': 'Based in Morocco, I specialize in creating authentic, high-converting User Generated Content for brands worldwide. From concept to final cut, I deliver engaging videos that resonate with your target audience.',
    'about.description.p2': 'With a deep understanding of social media trends and consumer behavior, I craft content that not only looks great but drives real business results. Every video tells a story that connects brands with their community.',
    'about.skills.content.title': 'Quality video',
    'about.skills.content.desc': 'Professional video production with state-of-the-art equipment',
    'about.skills.editing.title': 'Video Editing',
    'about.skills.editing.desc': 'Expert post-production and storytelling through visuals',
    'about.skills.engagement.title': 'Audience Engagement',
    'about.skills.engagement.desc': 'Understanding what resonates with target demographics',
    'about.skills.growth.title': 'Brand Growth',
    'about.skills.growth.desc': 'Proven track record of driving measurable results',

    // Portfolio Section
    'portfolio.title': 'My',
    'portfolio.title.highlight': 'Work',
    'portfolio.subtitle': 'Explore a collection of authentic UGC videos that have helped brands connect with their audience and drive meaningful engagement.',
    'portfolio.video1.title': 'Product Showcase Video',
    'portfolio.video1.desc': 'Authentic product demonstration with engaging storytelling',
    'portfolio.video2.title': 'Lifestyle Content Creation',
    'portfolio.video2.desc': 'Lifestyle brand integration with natural storytelling',
    'portfolio.cta': 'See More Work & Get Quote',
    'portfolio.fullscreen': 'View Full Screen',

    // Services Section
    'services.title': 'Services',
    'services.title.highlight': 'I Offer',
    'services.subtitle': 'From concept to final cut, I create authentic UGC content that resonates with your audience and drives measurable results for your brand.',
    'services.ugc.title': 'UGC Video Creation',
    'services.ugc.duration': '15-60s ads',
    'services.ugc.desc': 'Authentic video content that feels natural and drives conversions. Perfect for social media advertising campaigns.',
    'services.ugc.feature1': 'Professional filming',
    'services.ugc.feature2': 'Multiple angles',
    'services.ugc.feature3': 'Raw authenticity',
    'services.ugc.feature4': 'High engagement',
    'services.product.title': 'Product Showcases',
    'services.product.duration': '30-90s demos',
    'services.product.desc': 'Detailed product demonstrations that highlight key features and benefits in an engaging, trustworthy format.',
    'services.product.feature1': 'Feature highlights',
    'services.product.feature2': 'Real-world usage',
    'services.product.feature3': 'Honest reviews',
    'services.product.feature4': 'Call-to-action',
    'services.lifestyle.title': 'Lifestyle Videos',
    'services.lifestyle.duration': '45-120s stories',
    'services.lifestyle.desc': 'Lifestyle integration content that shows your product as part of daily life, building emotional connections.',
    'services.lifestyle.feature1': 'Natural integration',
    'services.lifestyle.feature2': 'Storytelling',
    'services.lifestyle.feature3': 'Emotional appeal',
    'services.lifestyle.feature4': 'Brand alignment',
    'services.testimonial.title': 'Testimonial Content',
    'services.testimonial.duration': '20-60s reviews',
    'services.testimonial.desc': 'Genuine testimonials and reviews that build trust and credibility with potential customers.',
    'services.testimonial.feature1': 'Honest feedback',
    'services.testimonial.feature2': 'Trust building',
    'services.testimonial.feature3': 'Social proof',
    'services.testimonial.feature4': 'Authentic voice',
    'services.cta.title': 'Ready to Create',
    'services.cta.title.highlight': 'Amazing Content',
    'services.cta.subtitle': "Let's discuss your project and create content that drives real results for your brand.",

    // Contact Section
    'contact.title': "Let's Create",
    'contact.title.highlight': 'Together',
    'contact.subtitle': "Ready to take your brand's content to the next level? Let's discuss your vision and create authentic UGC that resonates with your audience.",
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.desc': 'Quick response, instant communication',
    'contact.whatsapp.cta': 'Start Conversation',
    'contact.instagram.title': 'Instagram',
    'contact.instagram.desc': 'See my latest work and behind the scenes',
    'contact.instagram.cta': 'Follow & Message',
    'contact.email.prefer': 'Prefer email?',
    'contact.expect.title': 'What to Expect',
    'contact.expect.response.title': 'Quick Response',
    'contact.expect.response.desc': 'I typically respond within 2-4 hours during business days',
    'contact.expect.consultation.title': 'Free Consultation',
    'contact.expect.consultation.desc': 'Initial discussion about your project and goals at no cost',
    'contact.expect.custom.title': 'Custom Solutions',
    'contact.expect.custom.desc': 'Tailored content strategy based on your brand and audience',

    // Footer
    'footer.description': 'Creative UGC Creator helping brands connect with their audience through authentic, engaging videos.',
    'footer.copyright': '© 2025 Oussama Bouqontar — UGC Creator. All rights reserved.',
  },
  fr: {
    // Hero Section
    'hero.title.line1': 'Oussama Bouqontar',
    'hero.title.line2': 'Contenu UGC Créatif',
    'hero.title.line3': 'pour Votre Marque',
    'hero.subtitle': "J'aide les marques à se connecter avec leur audience grâce à des vidéos authentiques et engageantes qui génèrent de vrais résultats et des connexions significatives.",
    'hero.cta.whatsapp': 'Discutons sur WhatsApp',
    'hero.cta.instagram': 'Suivez sur Instagram',
    'hero.scroll': 'Faites défiler pour découvrir mon travail',

    // About Section
    'about.title': 'À Propos',
    'about.title.highlight': 'de Moi',
    'about.description.p1': "Basé au Maroc, je me spécialise dans la création de contenu généré par les utilisateurs authentique et à fort taux de conversion pour les marques du monde entier. Du concept au montage final, je livre des vidéos engageantes qui résonnent avec votre audience cible.",
    'about.description.p2': "Avec une compréhension approfondie des tendances des réseaux sociaux et du comportement des consommateurs, je crée du contenu qui non seulement a fière allure mais génère de vrais résultats commerciaux. Chaque vidéo raconte une histoire qui connecte les marques avec leur communauté.",
    'about.skills.content.title': 'Video de qualité',
    'about.skills.content.desc': 'Production vidéo professionnelle avec équipement de pointe',
    'about.skills.editing.title': 'Montage Vidéo',
    'about.skills.editing.desc': 'Post-production experte et narration par le visuel',
    'about.skills.engagement.title': 'Engagement Audience',
    'about.skills.engagement.desc': 'Comprendre ce qui résonne avec les démographies cibles',
    'about.skills.growth.title': 'Croissance de Marque',
    'about.skills.growth.desc': 'Historique prouvé de génération de résultats mesurables',

    // Portfolio Section
    'portfolio.title': 'Mon',
    'portfolio.title.highlight': 'Travail',
    'portfolio.subtitle': 'Explorez une collection de vidéos UGC authentiques qui ont aidé les marques à se connecter avec leur audience et à générer un engagement significatif.',
    'portfolio.video1.title': 'Vidéo de Présentation Produit',
    'portfolio.video1.desc': 'Démonstration produit authentique avec narration engageante',
    'portfolio.video2.title': 'Création de Contenu Lifestyle',
    'portfolio.video2.desc': 'Intégration de marque lifestyle avec narration naturelle',
    'portfolio.cta': 'Voir Plus de Travaux & Obtenir un Devis',
    'portfolio.fullscreen': 'Voir en Plein Écran',

    // Services Section
    'services.title': 'Services',
    'services.title.highlight': 'que J\'Offre',
    'services.subtitle': 'Du concept au montage final, je crée du contenu UGC authentique qui résonne avec votre audience et génère des résultats mesurables pour votre marque.',
    'services.ugc.title': 'Création Vidéo UGC',
    'services.ugc.duration': 'Pubs 15-60s',
    'services.ugc.desc': 'Contenu vidéo authentique qui semble naturel et génère des conversions. Parfait pour les campagnes publicitaires sur les réseaux sociaux.',
    'services.ugc.feature1': 'Tournage professionnel',
    'services.ugc.feature2': 'Angles multiples',
    'services.ugc.feature3': 'Authenticité brute',
    'services.ugc.feature4': 'Engagement élevé',
    'services.product.title': 'Présentations Produit',
    'services.product.duration': 'Démos 30-90s',
    'services.product.desc': 'Démonstrations produit détaillées qui mettent en évidence les caractéristiques et avantages clés dans un format engageant et digne de confiance.',
    'services.product.feature1': 'Points forts des fonctionnalités',
    'services.product.feature2': 'Utilisation réelle',
    'services.product.feature3': 'Avis honnêtes',
    'services.product.feature4': 'Appel à l\'action',
    'services.lifestyle.title': 'Vidéos Lifestyle',
    'services.lifestyle.duration': 'Histoires 45-120s',
    'services.lifestyle.desc': 'Contenu d\'intégration lifestyle qui montre votre produit comme partie de la vie quotidienne, créant des connexions émotionnelles.',
    'services.lifestyle.feature1': 'Intégration naturelle',
    'services.lifestyle.feature2': 'Narration',
    'services.lifestyle.feature3': 'Appel émotionnel',
    'services.lifestyle.feature4': 'Alignement de marque',
    'services.testimonial.title': 'Contenu Témoignage',
    'services.testimonial.duration': 'Avis 20-60s',
    'services.testimonial.desc': 'Témoignages et avis authentiques qui construisent la confiance et la crédibilité avec les clients potentiels.',
    'services.testimonial.feature1': 'Retour honnête',
    'services.testimonial.feature2': 'Construction de confiance',
    'services.testimonial.feature3': 'Preuve sociale',
    'services.testimonial.feature4': 'Voix authentique',
    'services.cta.title': 'Prêt à Créer du',
    'services.cta.title.highlight': 'Contenu Incroyable',
    'services.cta.subtitle': 'Discutons de votre projet et créons du contenu qui génère de vrais résultats pour votre marque.',

    // Contact Section
    'contact.title': 'Créons',
    'contact.title.highlight': 'Ensemble',
    'contact.subtitle': 'Prêt à faire passer le contenu de votre marque au niveau supérieur ? Discutons de votre vision et créons du contenu UGC authentique qui résonne avec votre audience.',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.desc': 'Réponse rapide, communication instantanée',
    'contact.whatsapp.cta': 'Commencer la Conversation',
    'contact.instagram.title': 'Instagram',
    'contact.instagram.desc': 'Voir mon dernier travail et les coulisses',
    'contact.instagram.cta': 'Suivre & Envoyer un Message',
    'contact.email.prefer': 'Vous préférez l\'email ?',
    'contact.expect.title': 'À Quoi S\'Attendre',
    'contact.expect.response.title': 'Réponse Rapide',
    'contact.expect.response.desc': 'Je réponds généralement dans les 2-4 heures pendant les jours ouvrables',
    'contact.expect.consultation.title': 'Consultation Gratuite',
    'contact.expect.consultation.desc': 'Discussion initiale sur votre projet et objectifs sans frais',
    'contact.expect.custom.title': 'Solutions Personnalisées',
    'contact.expect.custom.desc': 'Stratégie de contenu sur mesure basée sur votre marque et audience',

    // Footer
    'footer.description': 'Créateur UGC Créatif aidant les marques à se connecter avec leur audience grâce à des vidéos authentiques et engageantes.',
    'footer.copyright': '© 2025 Oussama Bouqontar — Créateur UGC. Tous droits réservés.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
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
