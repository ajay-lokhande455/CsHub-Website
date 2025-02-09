import React from "react";

const Footer = () => {
  const data = [
    {
      title: "Company",
      items: ["About", "Features", "Works", "Career"],
    },
    {
      title: "Help",
      items: [
        "Customer Support",
        "Delivery Details",
        "Term & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "Resources",
      items: [
        "Free eBooks",
        "Development Tutorial",
        "How to-Blogs",
        "Youtube Playlist",
      ],
    },
  ];

  return (
    <div className="bg-[#F1F1F1]">
      <div className="flex  md:flex-row justify-between bg-[#072F53] px-6 md:px-10 py-4">
        <h1 className="text-xl md:text-2xl text-white font-bold mb-3 md:mb-0">
          Add Valuable Feedback
        </h1>
        <button className="px-4 py-2 bg-[#FBC108] text-sm md:text-base rounded-full">
          Feedback
        </button>
      </div>

      <div className="p-6 md:p-10">
        <div className="h-full border-b-2 border-amber-300 flex flex-wrap md:flex-nowrap justify-between">
          <div className="w-full md:w-1/3">
            <img src="src/assets/logo.svg" alt="" className="py-4" />
            <p className="py-3 font-bold text-lg">About CS Buzz</p>
            <p className="py-3 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
          </div>

          <div className="flex flex-wrap justify-between gap-8 mt-6 md:mt-0">
            {data.map((section, index) => (
              <div key={index}>
                <ul>
                  <li className="font-bold text-base md:text-lg pb-4">
                    {section.title}
                  </li>
                  {section.items.map((item, idx) => (
                    <li key={idx} className="py-2 text-sm md:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-5 mt-5">
          <p className="text-sm md:text-base text-center md:text-left mb-4 md:mb-0">
            Nullam dictum aliquet accumsan porta lectus ridiculus in mattis.
            Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>

          <div className="flex gap-4">
            <img
              src="src/assets/twitter.svg"
              alt="Twitter"
              className="h-6 w-6"
            />
            <img src="src/assets/fb.svg" alt="Facebook" className="h-6 w-6" />
            <img src="src/assets/insta.svg" alt="Instagram" className="h-6 w-6" />
            <img src="src/assets/git.svg" alt="GitHub" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
