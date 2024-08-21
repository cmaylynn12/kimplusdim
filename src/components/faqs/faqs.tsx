import Layout from "../layout/layout"
import FAQItem from "./faqItem";
import "./faqs.css"

const FAQs: React.FC = () => {
  return (
    <Layout activeSection="faqs" title="Frequently Asked Questions">
      <div>
        <div className="q-and-a">
          <FAQItem question="What is the best way to travel to Greece?" answer="Most international guests will likely fly into Athens International Airport (ATH). From there, you can reach Island Art & Taste by car, taxi, or public transportation. We recommend booking flights early, especially during the peak travel season." />
          <FAQItem question="Do I need a visa to travel to Greece?" answer="Citizens of the European Union, the United States, Malaysia, and many other countries do not require a visa for short stays in Greece. However, please check with your local embassy or consulate for the most up-to-date visa requirements." />
          <FAQItem question="What is the weather like in Athens during the wedding?" answer="In May, the weather in Athens is typically warm and sunny with temperatures ranging from 16 to 25 degrees Celsius. We recommend bringing sunscreen, a hat, and sunglasses but also something light as it can get chilly in the night."/>
          <FAQItem question="What is the local currency, and will I need cash?" answer="The local currency is the Euro (€). Credit and debit cards are widely accepted, but it’s a good idea to carry some cash, especially for small purchases or in more remote areas." />
          <FAQItem question="How can we contact you?" answer="You can contact us on Messenger or via email at dimoandkimo@gmail.com :)" />
        </div>
      </div>
    </Layout>
  )
}

export default FAQs;