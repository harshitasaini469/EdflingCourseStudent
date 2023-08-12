import React from "react";

const ProfileCard = (props) => {
  const {name, experience, exCompanies, courseEnrolled } = props;
  return (
    <div className="bg-white border border-gray-300 flex flex-col justify-center rounded-lg w-64 sm:w-72 h-auto font-poppins p-4">
  <div className="flex justify-center">
    <img
      src="./desktop20/krishna.png"
      alt="Profile"
      className="w-20 h-20 rounded-full border border-gray-300"
    />
  </div>
  <div className="mt-2 text-center">
    <h2 className="text-xl sm:text-2xl font-medium text-teal-900">{name}</h2>
  </div>
  <div className="mt-2 text-center">
    <p className="text-base sm:text-lg font-medium text-gray-700">{experience}</p>
    <p className="text-xs sm:text-sm font-light text-black">{exCompanies}</p>
  </div>
  <div className="mt-2 text-center">
    <p className="text-base sm:text-lg font-medium text-teal-800">{courseEnrolled}</p>
  </div>
</div>

  );
};

export default ProfileCard;
