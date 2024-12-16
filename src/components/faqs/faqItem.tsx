import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div>
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default FAQItem;
