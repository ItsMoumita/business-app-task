"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = () => {
  const faqData = [
    {
      question: "Is the app free to use?",
      answer:
        "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
    },
    {
      question: "Can I assign multiple employees to one job?",
      answer:
        "Yes, you can assign multiple employees to a single job, making it easy to collaborate and track work progress across your team.",
    },
    {
      question: "Does it work on both mobile and desktop?",
      answer:
        "Absolutely! Our app is fully responsive and optimized to work seamlessly on both iOS, Android, and desktop browsers.",
    },
    {
      question: "Can clients track job progress in real time?",
      answer:
        "Yes, clients receive real-time updates, notifications, and can view progress directly from the client portal.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We use enterprise-grade encryption and follow industry best practices to keep all your data safe and secure.",
    },
  ];

  // set first accordion as open initially (index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section  className="w-full py-20 bg-gradient-to-b from-white to-green-50 ">
      <div className="w-11/12 max-w-3xl mx-auto">
        {/* Section Heading */}
        <h2 data-aos="zoom-in-down" className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <p data-aos="zoom-in-down" className="text-center text-gray-500 mt-3 mb-10">
          Quick answers to help you get the most out of our app.
        </p>

        {/* Accordion Items */}
        <div data-aos="zoom-in-up" className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-colors ${
                activeIndex === index
                  ? "border-green-400 bg-green-50"
                  : "border-green-100 bg-white"
              }`}
            >
              {/* Header */}
              <button
                className="flex justify-between items-center w-full px-5 py-4 text-left font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl"
                >
                  {activeIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              {/* Animated Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 text-gray-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;