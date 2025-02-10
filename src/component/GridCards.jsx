import React from "react";
import polygon from "../assets/polygon.svg";
import upperArrow from "../assets/upperArrrow.svg"
import downArrow from "../assets/downArrow.svg"
import polygon2 from "../assets/polygon2.svg"

const GridCards = () => {
  return (
    <div className=" overflow-x-auto scrollbar-hidden relative z-[9999]">
      <div className="grid grid-cols-[repeat(7,300px)]  px-18">
        <div className=" col-start-1 col-end-3 p-8 flex flex-col  justify-end relative">
          <img
            src={upperArrow}
            className="absolute left-0 top-2"
          />
          <img src={polygon} className="absolute top-6 left-45"/>
          <p className="font-bold">Sign Up:</p>
          <p className="py-5">
            Create your account in just a few clicks. Register with CS BUZZ to
            start your journey into the world of computer science. Just enter
            your details and you’re ready to go!
          </p>
        </div>
        <div className=" col-start-3 col-end-5 p-10 flex flex-col  justify-end relative">
          <img
            src={upperArrow}
            className="absolute left-0 top-2"
          />
          <img src={polygon} className="absolute top-6 left-45"/>
          <p className="font-bold">Personalize Your Learning Experience:</p>
          <p className="py-5 ">
            Set your learning goals and preferences. Our adaptive learning
            system will suggest the most effective path for you, adjusting to
            your pace and style. You can also choose to focus on specific topics
            or projects that interest you the most.
          </p>
        </div>
        <div className=" col-start-5 col-end-7 p-8 flex flex-col  justify-end relative">
          <img
            src={upperArrow}
            className="absolute left-0 top-2 "
          />
          <img src={polygon} className="absolute top-6 left-45"/>
          <p className="font-bold">Apply Your Skill</p>
          <p className="py-5 text-">
            Put your skills to the test with hands-on projects and coding
            challenges. Build your software, apps, or algorithms with the
            guidance of our expert mentors and share your projects with peers
            for collaborative learning and feedback.
          </p>
        </div>

        <div className="h-2 bg-[#072F53] rounded-full border border-green col-start-1 col-end-6  relative">
          <div className="flex absolute justify-between gap-[18vw] top-[-30px] left-[-29px]">
            <div className="border-10 flex justify-center items-center text-center  border-amber-300 bg-[#FFFFFF] p-6 h-10 w-10 rounded-full">
              1
            </div>
            <div className="border-10 flex justify-center items-center text-center  border-amber-300 bg-[#FFFFFF] p-6 h-10 w-10 rounded-full">
              2
            </div>
            <div className="border-10 flex justify-center items-center text-center  border-amber-300 bg-[#FFFFFF] p-6 h-10 w-10 rounded-full">
              3
            </div>
            <div className="border-10 flex justify-center items-center text-center  border-amber-300 bg-[#FFFFFF] p-6 h-10 w-10 rounded-full">
              4
            </div>
            <div className="border-10 flex justify-center items-center text-center  border-amber-300 bg-[#FFFFFF] p-6 h-10 w-10 rounded-full">
              5
            </div>
            <div className="border-10 flex justify-center items-center text-center  border-amber-300 bg-[#FFFFFF] p-6 h-10 w-10 rounded-full">
              6
            </div>
          </div>
        </div>
        <div className="  col-start-2 col-end-4 p-10 flex flex-col  justify-center relative ">
          <img src={downArrow} alt="" className="absolute left-0 z-[-100] bottom-2.5 " />
          <img src={polygon2} alt="" className="absolute bottom-6 left-45" />
          <p className="font-bold">Choose Your Course:</p>
          <p className="py-5">
            Browse through our extensive catalog of computer science courses.
            Whether you’re interested in learning the basics of programming,
            data science , or diving deep into artificial intelligence, we have
            something for every level of expertise.
          </p>
        </div>
        <div className=" col-start-4 col-end-6 p-10 flex flex-col  justify-center relative">
        <img src={downArrow} alt="" className="absolute left-0 z-[-100] bottom-2.5 " />
        <img src={polygon2} alt="" className="absolute bottom-6 left-45" />
          <p className="font-bold">Engage with Interactive Content</p>
          <p className="py-5">
            Start learning through interactive lessons that make complex
            concepts easy to understand. Engage with video tutorials, practical
            coding exercises, and quizzes that ensure you grasp and retain
            knowledge effectively.
          </p>
        </div>
        <div className=" col-start-6 col-end-8 p-10 flex flex-col  justify-center relative">
        <img src={downArrow} alt="" className="absolute left-0 z-[-100] bottom-2.5" />
        <img src={polygon2} alt="" className="absolute bottom-6 left-45" />
          <p className="font-bold">Track Your Progress</p>
          <p className="py-5">
            Monitor your learning progress with our built-in tracking tools. See
            how much you've achieved and what's left to master. Adjust your
            learning plan at any time to focus on areas that need more
            attention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
