import React, { useRef } from 'react';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const Languages = () => {
    const languages = [
        { name: 'Trending Now' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'Bootstrap' },
        { name: 'Java' },
        { name: 'C++' },
        { name: 'C' },
        { name: 'React js' },
        { name: 'Node js' },
        { name: 'Web Development' },
        { name: 'Practice Problem' },
        { name: 'Test' }
    ];

    const scrollRef = useRef(null);

    // Scroll Functionality
    const scroll = (direction) => {
        if (scrollRef.current) {
            if (direction === 'left') {
                scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="relative bg-[#F1F1F1] h-12 flex items-center :md:px-15 sm:px-10">

            <button onClick={() => scroll('left')} className="p-2 text-orange-300 hover:text-orange-500">
                <MdOutlineArrowBackIos size={20} />
            </button>

            <div ref={scrollRef} className="flex gap-6 items-center overflow-x-auto scrollbar-hidden flex-nowrap w-full">
                {languages.map((lang) => (
                    <span key={lang.name} className="whitespace-nowrap hover:font-medium hover:cursor-pointer">
                        {lang.name}
                    </span>
                ))}
            </div>

            <button onClick={() => scroll('right')} className="p-2 text-orange-300 hover:text-orange-500">
                <MdArrowForwardIos size={20} />
            </button>
        </div>
    );
};

export default Languages;
