import { FAQ } from '@/components/ui/faq-tabs'
import { data } from '@/constants';

const FAQSection = () => {
  const allFaqs = Object.values(data.faq.faqData).flat();

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
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Let's answer some questions"
        categories={data.faq.categories}
        faqData={data.faq.faqData}
      />
    </div>
  );
};

export default FAQSection;