import { useContext } from "react";
import Layout from "../layout/layout";
import FAQItem from "./faqItem";
import "./faqs.css";
import { FAQ, FAQs as faqQuestions } from "./faqsConfig";
import AppContext from "../../contexts/AppContext";

const FAQs: React.FC = () => {
  const { isMobile } = useContext(AppContext);

  return (
    <Layout
      activeSection="faqs"
      title={isMobile ? "FAQs" : "Frequently Asked Questions"}
    >
      <div>
        <div className="faq-subheader">
          We know traveling to Athens for our wedding is a big trip, and you
          probably have a lot of questions. Hopefully, this section will answer
          them and make your planning a little easier!
        </div>
        <div className="q-and-a">
          {faqQuestions.map((faqQuestion: FAQ) => (
            <FAQItem
              question={faqQuestion.question}
              answer={faqQuestion.answer}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
