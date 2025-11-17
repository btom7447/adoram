"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CustomButton from "@/components/CustomButton";

const faqs = [
  {
    question: "Design Delivery time estimate?",
    answer:
      "Typically, initial design drafts are delivered within 5–7 business days depending on the complexity of the project. Full delivery times may vary based on revisions and project scope.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide web design, graphic design, branding, UI/UX design, and consultation services tailored to your project needs.",
  },
  {
    question: "How does the design process work?",
    answer:
      "The design process starts with understanding your goals, followed by research and wireframing. Then we create the initial design draft, gather feedback, revise, and finalize the design.",
  },
  {
    question: "What if I don't like a design?",
    answer:
      "We include revision rounds in every project. If you’re not satisfied, we will work with you to refine the design until it aligns with your vision.",
  },
  {
    question: "How much does your service cost?",
    answer:
      "Pricing varies depending on the project type and scope. After discussing your requirements, we provide a clear and transparent quote.",
  },
  {
    question: "Are there any refunds?",
    answer:
      "Refunds are evaluated on a case-by-case basis, but we aim to ensure client satisfaction. Payment terms and refund policies are discussed before starting any project.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

return (
  <section className="bg-black border-t border-white px-5 lg:px-10 py-20 flex flex-col xl:flex-row justify-between">
    <div className="max-w-lg flex flex-col gap-5 xl:mb-5">
      <h2 className="michroma text-4xl lg:text-6xl font-medium text-white">
        FAQs
      </h2>
      <p className="text-gray-300 text-lg mt-3">
        Here ar eanswers to the most received questiosn. If you're wondering
        about something else, just reach out{" "}
      </p>
      <div className="max-w-30">
        <CustomButton variant="white" href={"/contact"}>
          Get in Touch
        </CustomButton>
      </div>
    </div>
    <div className="space-y-4 max-w-full xl:max-w-3xl mt-10 xl:mt-40">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 overflow-hidden">
          <button
            className="w-full flex justify-between items-center py-5 text-2xl text-left transition-colors duration-300 group hover:text-highlight cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <div className="flex rounded-full border border-white group-hover:border-highlight">
              <ChevronDown
                strokeWidth={1}
                className={`w-8 h-8 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          <div
            className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-150 py-5" : "max-h-0"
            }`}
          >
            <p className="text-white text-lg font-extralight">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}
