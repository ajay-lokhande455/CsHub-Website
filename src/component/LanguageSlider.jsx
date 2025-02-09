import React, { useEffect, useRef } from "react";

const LanguageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const speed = 3;

    const scroll = () => {
      if (slider) {
        scrollAmount += speed;
        if (scrollAmount >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        } else {
          slider.scrollLeft += speed;
        }
      }
    };

    const interval = setInterval(scroll, 50);

    return () => clearInterval(interval);
  }, []);

  const languages = [
    { name: "HTML", img: "src/assets/html.svg" },
    { name: "CSS", img: "src/assets/css.svg" },
    { name: "JavaScript", img: "src/assets/javascript.svg" },
    { name: "Python", img: "src/assets/python.svg" },
    { name: "React", img: "src/assets/react.svg" }
  ];

  return (
    <div className="md:flex px-6 md:px-15 py-9 bg-[#F1F1F1] items-center relative gap-6">
      <div className="w-64 min-w-[160px] flex flex-col justify-center items-center md:pb-2 pb-2 relative ">
        <h2 className="text-2xl md:text-3xl text-[#072F53] font-bold pb-2 ">
          Trending Technology
        </h2>
        <img
          src="src/assets/line.svg"
          className="absolute bottom-0 w-2xs"
        />
      </div>

      <div className="relative w-full overflow-hidden">
        <div ref={sliderRef} className="flex gap-6 pt-5 whitespace-nowrap overflow-hidden scrollbar-hidden scroll-smooth">
          {[...languages, ...languages].map((lang, index) => (
            <div
              key={index}
              className="flex gap-6 pl-8 px-6 py-4 min-w-[180px] md:min-w-[220px] text-xl text-[#072F53] 
              justify-center items-center rounded-md shadow-md bg-white"
            >
              <img src={lang.img} className="" alt={lang.name} />
              <h2>{lang.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSlider;
