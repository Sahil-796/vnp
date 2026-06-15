import { FAQ } from "@/components/ui/faq-tabs";
import { landingPageData } from "@/constants";

const FAQSection = () => {
  return (
    <FAQ
      title={landingPageData.faq.title}
      subtitle={landingPageData.faq.subtitle}
      categories={landingPageData.faq.categories}
      faqData={landingPageData.faq.faqData}
    />
  );
};

export default FAQSection;
