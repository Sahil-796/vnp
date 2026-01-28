import { FAQ } from '@/components/ui/faq-tabs'
import { landingPageData } from '@/constants';

const FAQSection = () => {
  return (
    <div className="pt-10 pb-20">
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