import React from "react";
import UpdateCourseComponent from "./UpdateCourseComponent";

const UpdateCoursePage = () => {
  const courses = [
    {
      img: "/TeacherSide/python.png",
      course: "Python course for beginners",
      duration: "Duration 1 to 2 months",
      price: "Rs. 599/-",
    },
    {
      img: "/TeacherSide/python.png",
      course: "Python course for beginners",
      duration: "Duration 1 to 2 months",
      price: "Rs. 599/-",
    },
    {
      img: "/TeacherSide/python.png",
      course: "Python course for beginners",
      duration: "Duration 1 to 2 months",
      price: "Rs. 599/-",
    },
    {
      img: "/TeacherSide/python.png",
      course: "Python course for beginners",
      duration: "Duration 1 to 2 months",
      price: "Rs. 599/-",
    },
    {
      img: "/TeacherSide/python.png",
      course: "Python course for beginners",
      duration: "Duration 1 to 2 months",
      price: "Rs. 599/-",
    },
    {
      img: "/TeacherSide/python.png",
      course: "Python course for beginners",
      duration: "Duration 1 to 2 months",
      price: "Rs. 599/-",
    },
    {
      img: "/TeacherSide/python.png",
      course: "Python course for beginners",
      duration: "Duration 1 to 2 months",
      price: "Rs. 599/-",
    },
    {
      img: "/TeacherSide/python.png",
      course: "Python course for beginners",
      duration: "Duration 1 to 2 months",
      price: "Rs. 599/-",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-wrap gap-4">
      {courses.map((course, index) => {
        return (
          <UpdateCourseComponent
            key={index}
            img={course.img}
            course={course.course}
            duration={course.duration}
            price={course.price}
          />
        );
      })}
    </div>
  );
};

export default UpdateCoursePage;
