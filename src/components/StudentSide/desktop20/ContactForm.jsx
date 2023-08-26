import React, { useState } from "react";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can use the form data in state variables (fullName, email, etc.) as needed
    console.log("Form submitted:", {
      fullName,
      email,
      phoneNumber,
      graduationYear,
      description,
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl ">
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-0 focus:ring focus:ring-teal-800 "
              placeholder="Full name"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-0 focus:ring focus:ring-teal-800"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-0 focus:ring focus:ring-teal-800"
              placeholder="Contact Number"
            />
          </div>
          <div>
            <input
              type="month"
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md  focus:outline-0 focus:ring focus:ring-teal-800"
              placeholder="Graduation Year"
            />
          </div>
        </div>

        <div className="mt-4">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-0 focus:ring focus:ring-teal-800"
            rows="4"
            placeholder="Description"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-900"
          >
            Request for Counselling
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
