import React from "react";
import ProfileCard from "./ProfileCard";

const CourseGuide = () => {
  const profileSections = [
    {
      designation: "Faculties",
      data: [
        {
          name: "Smith Thakkar",
          experience: " 10+ yr in python & ML",
          exCompanies: "Ex-Google, Ex-Amazon",
          courseEnrolled: "23+ Course Enrolled",
        },
        {
          name: "Smith Thakkar",
          experience: " 10+ yr in python & ML",
          exCompanies: "Ex-Google, Ex-Amazon",
          courseEnrolled: "23+ Course Enrolled",
        },
        {
          name: "Smith Thakkar",
          experience: " 10+ yr in python & ML",
          exCompanies: "Ex-Google, Ex-Amazon",
          courseEnrolled: "23+ Course Enrolled",
        },
      ],
    },
    {
      designation: "Teaching Assistants",
      data: [
        {
          name: "Smith Thakkar",
          experience: " 10+ yr in python & ML",
          exCompanies: "Ex-Google, Ex-Amazon",
          courseEnrolled: "23+ Course Enrolled",
        },
        {
          name: "Smith Thakkar",
          experience: " 10+ yr in python & ML",
          exCompanies: "Ex-Google, Ex-Amazon",
          courseEnrolled: "23+ Course Enrolled",
        },
      ],
    },
    {
      designation: "Placement Coaches",
      data: [
        {
          name: "Smith Thakkar",
          experience: " 10+ yr in python & ML",
          exCompanies: "Ex-Google, Ex-Amazon",
          courseEnrolled: "23+ Course Enrolled",
        },
      ],
    },
  ];
  return (
    <div className="w-[90vw] mt-3 sm:mx-auto mb-3 ">
      <div className="max-sm:w-screen mx-auto bg-cover bg-no-repeat bg-top py-16 lg:px-3 lg:py-32 px-2 mb-5" style={{
      backgroundImage: 'url("./desktop20/courseGuideBg.png")' ,height:'fit'
    }}>
      <div className="flex flex-col max-w-screen-xl mx-auto ">
      <div className="text-center mb-2">
        <p className="text-orange-600 font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          Course Guides
        </p>
      </div>
      <div className="text-center mb-3">
        <p className="text-lg lg:text-2xl text-white font-light">
          Meet the team that is invested in your success throughout your journey
          with us
        </p>
      </div>
      <div className="space-y-8 overflow-x-auto">
        <div className="flex flex-col gap-4 lg:gap-6">
          {profileSections.map((section) => (
            <div
              key={section.designation}
              className="flex flex-col md:flex-row"
            >
              <div className="flex-none w-full md:w-40 md:p-4 px-4">
                <h2 className="text-xl md:text-2xl text-white">
                  {section.designation}
                </h2>
              </div>
              <div className="flex-grow p-4 overflow-x-auto flex">
                <div className="flex flex-row gap-4">
                  {section.data.map((person) => (
                    <ProfileCard
                      key={person.name}
                      name={person.name}
                      experience={person.experience}
                      exCompanies={person.exCompanies}
                      courseEnrolled={person.courseEnrolled}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
     
    </div>
      
    </div>
  );
};

export default CourseGuide;
