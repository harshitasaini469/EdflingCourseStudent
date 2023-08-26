import React from "react";

const BenefitsOfPurchase = () => {
  const benefits = [
    {
      title: "Structured Learning",
      description:
        "A well-designed course provides a structured learning path that takes you through a specific topic or skill from start to finish. This can help you learn more efficiently and effectively than trying to piece together information from multiple sources.",
    },
    {
      title: "Expert guidance",
      description:
        "Courses are often created by experts in their field, who have a deep understanding of the subject matter. This means you can benefit from their knowledge and experience, and get guidance on the most important concepts and skills to master.",
    },
    {
      title: "Accountability",
      description:
        "When you purchase a course, you are making a commitment to learning. This can help keep you accountable and motivated to stick with the material and complete the course",
    },
    {
      title: "Interactive learning",
      description:
        "Many courses include interactive elements such as quizzes, exercises, and discussions, which can help you engage with the material and deepen your understanding.",
    },
    {
      title: "Better job prospects",
      description:
        "If you're looking to advance in your career or switch to a new field, completing a course can help you acquire the skills and knowledge needed to succeed and stand out to potential employers.",
    },
    {
      title: "Flexibility",
      description:
        "Most courses are designed to be completed at your own pace, which can be especially helpful if you have a busy schedule or other commitments",
    },
  ];
  return (
    <div className="container w-10/12 rounded-xl  bg-teal-900 font-poppins p-6 sm:p-8 md:p-10 lg:p-12  mt-5">
      <div className="space-y-7 p-2 mb-3">
        <div className="text-center">
          <p className="text-orange-600 text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Benefits of purchase for this course
          </p>
        </div>
        {benefits.map((purchaseBenefit, index) => (
          <div className="flex flex-col space-y-10 ">
            <div
              key={index}
              className={`flex text-white md:gap-5 justify-center flex-col  ${
                index % 2 !== 0 ? "md:flex-row-reverse " : "md:flex-row"
              }`}
            >
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-orange-600 text-center">
                  <p className="text-base md:text-lg lg:text-xl text-white">{index + 1}</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{purchaseBenefit.title}</p>
                </div>
              </div>
              <div className="">
                <p className="text-base md:text-xl  font-light">
                  {purchaseBenefit.description}
                </p>
              </div>
            </div>
            {index !== benefits.length - 1 && (
              <div className=" w-full hidden md:block "
              // className=" w-full hidden sm:block"
              >
                <img
                  src={
                    index % 2 === 0
                      ? "./desktop20/rightLine.png"
                      : "./desktop20/leftLine.png"
                  }
                  alt=""
                  className="w-4/5 mx-auto "
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsOfPurchase;
