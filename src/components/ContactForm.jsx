"use client";

import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef();

  const interestOptions = [
    "Branding",
    "Wire-framing & Prototyping",
    "Website & Web App",
    "Mobile App Design",
    "Other",
  ];

  const budgetOptions = [
    "$0 - $50",
    "$51 - $100",
    "$101 - $200",
    "$201 and above",
  ];


  return (
    <form
      action="https://formspree.io/f/meovqpjb"
      method="POST"
      className="px-0 lg:px-20 xl:px-30 w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20"
      data-aos="zoom-in-up"
      data-aos-delay="200"
    >
      {/* Email */}
      <div>
        <label htmlFor="email" className="text-black text-xl lg:text-3xl mb-3">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-5 bg-white text-lg text-gray-700 border-b border-black  outline-0 transition-all duration-200"
          placeholder="johndoe@gmail.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="text-black text-xl lg:text-3xl mb-3">
          Your Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="w-full p-5 bg-white text-lg text-gray-700 border-b border-black  outline-0 transition-all duration-200"
          placeholder="+23491 234 56789"
        />
      </div>

      {/* Interest */}
      <div className="relative">
        <label
          htmlFor="interest"
          className="text-black text-xl lg:text-3xl mb-3"
        >
          I'm Interested in...
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full p-5 bg-white text-lg text-gray-700 border-b border-black  outline-0 transition-all duration-200 cursor-pointer"
        >
          <option value="">Select... </option>
          {interestOptions.map((option, index) => (
            <option key={index} className="text-black" value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={20}
          strokeWidth={1}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </div>

      {/* Budget */}
      <div className="relative">
        <label htmlFor="budget" className="text-black text-xl lg:text-3xl mb-3">
          Your Budget
        </label>
        <select
          id="budget"
          name="budget"
          required
          className="w-full p-5 bg-white text-lg text-gray-700 border-b border-black  outline-0 transition-all duration-200 cursor-pointer"
        >
          <option value="" className="text-gray-700">
            Select...
          </option>
          {budgetOptions.map((option, index) => (
            <option key={index} className="text-black" value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={20}
          strokeWidth={1}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </div>

      {/* Message */}
      <div className="col-span-1 lg:col-span-2">
        <label
          htmlFor="project"
          className="text-black text-xl lg:text-3xl mb-3"
        >
          More About This Project
        </label>
        <textarea
          id="project"
          name="project"
          required
          rows={5}
          className="w-full p-5 bg-white text-lg text-gray-700 border-b border-black  outline-0 transition-all duration-200 resize-vertical"
          placeholder="Type here..."
        />
      </div>

      {/* Submit */}
      <div className="col-span-1 lg:col-span-2 w-full flex justify-center ">
        <button
          type="submit"
          className="text-md font-medium bg-black text-white py-5 px-20 hover:bg-highlight rounded-full transition-all duration-200 cursor-pointer"
        >
          Send Request
        </button>
      </div>
    </form>
  );
}
