import React from "react";

const Cards = () => {
  const card = [
    {
      logo: <img src="src/assets/html.svg" alt="htnl" />,
      bg: "bg-[#FFD6CC]",
      title: "HTML",
      description:
        "Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance",
    },
    {
      logo: <img src="src/assets/css.svg" alt="css" />,
      bg: "bg-[#B6C5FF]",
      title: "CSS",
      description:
        "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).",
    },
    {
      logo: <img src="src/assets/javascript.svg" alt="js" />,
      bg: "bg-[#FFF8D5]",
      title: "JavaScript",
      description:
        "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions.",
    },
    {
      logo: <img src="src/assets/java.svg" alt="react" />,
      bg: "bg-[#FFE6CF]",
      title: "Java",
      description:
        "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
    {
      logo: <img src="src/assets/bootstrap.svg" alt="react" />,
      bg: "bg-[#FFF8D5]",
      title: "Bootstrap",
      description:
        "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    },
    {
      logo: <img src="src/assets/php.svg" alt="react" />,
      bg: "bg-[#FFF8D5]",
      title: "PHP",
      description:
        'PHP is a recursive acronym for "PHP: Hypertext Preprocessor". PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.',
    },
  ];
  return (
    <div className=" p-15 my-10 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {card.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col justify-center items-center text-center bg-[#F1F1F1]"
          >
            <div
              className={`${item.bg} w-full flex justify-center  items-center p-2 `}
            >
              {item.logo}
            </div>
            <div className="h-full">
              <h2 className="text-2xl py-6 font-bold">{item.title}</h2>
              <p className="px-5 pb-5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <img
        src="src/assets/notebook.svg"
        alt=""
        className="absolute right-0 bottom-0 "
      />

      <img
        src="src/assets/book.svg"
        alt=""
        className="absolute left-0 bottom-[-50px] z-40 "
      />
    </div>
  );
};
export default Cards;
