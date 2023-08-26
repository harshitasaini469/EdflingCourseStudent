import React, { useState } from "react";

const Pagination = () => {
  const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);
  };

  return (
    <div className="font-poppins">
    <div className="flex max-h-40 overflow-x-auto overflow-y-auto flex-wrap">
      <div className="flex flex-col md:flex-row sm:flex-nowrap w-full md:items-center space-y-1 md:space-y-0 md:space-x-6">
        <span
          className={`text-base sm:text-base md:text-base lg:text-lg cursor-pointer whitespace-nowrap ${
            activeLesson === null
              ? "text-teal-900 border-b-4 border-teal-900 rounded"
              : "text-teal-900/50"
          }`}
          onClick={() => setActiveLesson(null)}
        >
          View all
        </span>
        {lessons.map((lesson) => (
          <span
            key={lesson}
            className={` text-base sm:text-base md:text-base lg:text-lg cursor-pointer whitespace-nowrap ${
              activeLesson === lesson
                ? "text-teal-900 border-b-4 border-teal-900 rounded"
                : "text-teal-900/50"
            }`}
            onClick={() => handleLessonClick(lesson)}
          >
            Lesson {lesson}
          </span>
        ))}
      </div>
    </div>

  </div>
  
  
  );
};

export default Pagination;
