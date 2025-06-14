import React, {useState} from "react";
import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const CustomerService = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleFaqToggle = index => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const categories = [
    {
      icon: <LocalShippingIcon />,
      title: "Shipping & Delivery",
      description: "Track your order, delivery options, and policies",
    },
    {
      icon: <AssignmentReturnIcon />,
      title: "Returns & Refunds",
      description: "Return policies, process, and refund information",
    },
    {
      icon: <PaymentIcon />,
      title: "Payment & Pricing",
      description: "Payment methods, pricing, and promotions",
    },
    {
      icon: <SecurityIcon />,
      title: "Account & Security",
      description: "Account settings, login issues, and security",
    },
  ];

  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by going to Your Orders in your account. Select the order you want to track and click on 'Track Package'. You'll see the current status and estimated delivery date.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Most items can be returned within 30 days of receipt. Items must be in their original condition to be eligible for a full refund. Some products have different policies or requirements, which are noted on the product detail page.",
    },
    {
      question: "How can I change or cancel my order?",
      answer:
        "You can change or cancel your order before it enters the shipping process. Go to Your Orders, select the order you want to modify, and click on 'Change' or 'Cancel items'. If the option is not available, the order may have already been processed for shipping.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit and debit cards, including Visa, MasterCard, American Express, and Discover. You can also use Amazon Gift Cards, and select promotional financing options.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the sign-in page. Enter the email address associated with your account, and we'll send you a password reset link.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-amazon_blue mb-6">Customer Service</h1>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-amazon_blue mb-3">{category.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-medium"
                  onClick={() => handleFaqToggle(index)}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </button>
                {expandedFaq === index && (
                  <div className="mt-2 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default CustomerService;
