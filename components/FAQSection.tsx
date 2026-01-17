import { FAQ } from '@/components/ui/faq-tabs'
import { landingPageData } from '@/constants';

const FAQSection = () => {
  const allFaqs = Object.values(landingPageData.faq.faqData).flat();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="pt-10 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQ
        title={landingPageData.faq.title}
        subtitle={landingPageData.faq.subtitle}
        categories={landingPageData.faq.categories}
        faqData={landingPageData.faq.faqData}
      />
    </div>
  );
};

export default FAQSection;