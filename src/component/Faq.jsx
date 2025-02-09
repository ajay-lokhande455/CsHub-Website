import React from "react";

const Faq = () => {
  return (
    <div className="pb-10">
      <div className="bg-[#072F53] relative">
        <h3 className="text-3xl text-white font-bold text-center p-6">
          Frequently asked questions
        </h3>
        <img
          src="src/assets/line.svg"
          alt=""
          className="absolute top-15 left-[40%]"
        />
      </div>
      <p className="text-center p-5">
        Answers to Your Burning Questions: Unveiling the FAQ Section for
        Inquisitive Minds
      </p>
      <div className="px-15">
        <div className="flex justify-center items-center gap-8">
          <div>
            <p className="py-3 font-bold text-lg">
              Is there a free trial available?
            </p>
            <p>
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </div>
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12.75H17M23.75 12.75C23.75 18.9632 18.7132 24 12.5 24C6.2868 24 1.25 18.9632 1.25 12.75C1.25 6.5368 6.2868 1.5 12.5 1.5C18.7132 1.5 23.75 6.5368 23.75 12.75Z"
              stroke="#FBC108"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          {[
            "Can I change my plan later?",
            "What is your cancellation policy?",
            "Can other info be added to an invoice?",
            "How does billing work?",
            "How do I change my account email?",
          ].map((item, index) => (
            <div
              key={index}
              className="border-t border-t-[#EAECF0] py-2 mt-4 flex justify-between"
            >
              <p className="font-bold">{item}</p>
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 9.5V18.5M9 14H18M24.75 14C24.75 20.2132 19.7132 25.25 13.5 25.25C7.2868 25.25 2.25 20.2132 2.25 14C2.25 7.7868 7.2868 2.75 13.5 2.75C19.7132 2.75 24.75 7.7868 24.75 14Z"
                  stroke="#FBC108"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
