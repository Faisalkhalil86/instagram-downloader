import React, { useState } from "react";

const faqs = [
  {
    question: "Is the Instagram Video Downloader free to use?",
    answer: "Yes, it is completely free to use without any hidden charges.",
  },
  {
    question:
      "Are there any limitations on the number of videos I can download from Instagram?",
    answer: "No, you can download unlimited Instagram videos anytime.",
  },
  {
    question: "Do I need to install any software to download Instagram videos?",
    answer: "No, you don’t need to install any software. It works online.",
  },
  {
    question: "Can I download Instagram videos on my smartphone?",
    answer: "Yes, you can download videos directly on your smartphone.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white"
            style={{
              borderImage:
                "linear-gradient(to right, #ff00ff, #00ffff) 1", // gradient border
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 border-t">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
