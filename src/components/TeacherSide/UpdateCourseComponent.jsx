import React from "react";

const UpdateCourseComponent = (props) => {
  return (
    <div className="border rounded-lg bg-white w-fit text-sm sm:text-base py-2 px-3 font-poppins">
      <img src={props.img} alt="" className="w-full" />
      <div className="px-2 py-2 font-semibold">
        <div className="flex justify-between space-x-2">
          <p>{props.course}</p>
          <button>
            <img
              src="/TeacherSide/edit.png"
              alt=""
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>
        <p>{props.duration}</p>
        <div className="flex justify-between items-center">
          <p>Rs. {props.price}/-</p>
          <button className="bg-teal-800 text-white rounded-xl p-2 sm:px-3 sm:py-2">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourseComponent;
