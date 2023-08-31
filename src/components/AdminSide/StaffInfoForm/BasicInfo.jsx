import React from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const BasicInfo = () => {
  return (
    <div>
      <p className="font-medium text-lg font-poppins mb-3">Basic Info</p>
      <div className="flex flex-col  sm:grid  sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <TextInput
          type={"text"}
          field={"Staff No."}
          placeholder={20}
          required={true}
        />
        <SelectInput
          label={"Role"}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <SelectInput
          label={"Department"}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />

        <SelectInput
          label={"Designation"}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <TextInput
          type={"text"}
          field={"First Name"}
          placeholder={""}
          required={true}
        />
        <TextInput
          type={"text"}
          field={"Last Name"}
          placeholder={""}
          required={true}
        />
        <TextInput
          type={"text"}
          field={"Father Name"}
          placeholder={""}
          required={true}
        />
        <TextInput
          type={"text"}
          field={"Mother Name"}
          placeholder={""}
          required={true}
        />

        <TextInput
          type={"email"}
          field={"Email"}
          placeholder={""}
          required={true}
        />
        <SelectInput
          label={"Gender"}
          options={[
            { value: "Female", label: "Female" },
            { value: "Male", label: "Male" },
          ]}
        />

        <TextInput
          type={"date"}
          field={"Date of Birth"}
          placeholder={""}
          required={true}
        />
        <TextInput
          type={"date"}
          field={"Date of joining"}
          placeholder={""}
          required={true}
        />
        <TextInput
          type={"phone"}
          field={"Mobile No."}
          placeholder={""}
          required={true}
        />

        <SelectInput
          label={"Marital Status"}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />

        <TextInput
          type={"phone"}
          field={"Emergency Mobile"}
          placeholder={""}
          required={true}
        />
        <TextInput
          type={"email"}
          field={"Driving Licence"}
          placeholder={""}
          required={true}
        />
      </div>
      <div>
      <div className="flex flex-col relative font-poppins sm:w-1/3 mt-5">
        <label
          htmlFor="staff-photo"
          className="absolute z-20 top-0 bg-white px-1 text-sm ml-4 "
        >
          Staff Photo
        </label>
        <input
          type="file"
          name="staff-photo"
          id="staff-photo"
          className="relative z-10 top-3 border-1 border-black px-3 py-2 text-gray-400 text-sm rounded-md file:bg-teal-800 file:text-white file:outline-none file:rounded-full file:border-0 file:px-2 file:py-1   file:cursor-pointer file:text-sm "
        />
      </div>
      <p className="text-sm text-teal-800 mt-3 ml-2">(JPG, JPEG, PNG are allowed to upload)</p>
      </div>
     
      
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 mt-5">
      <TextInput
        type={"text"}
        field={"Current Address"}
        placeholder={""}
        required={true}
      />
      <TextInput
        type={"text"}
        field={"Permanent Address"}
        placeholder={""}
        required={true}
      />
      <TextInput
        type={"text"}
        field={"Qualification"}
        placeholder={""}
        required={true}
      />
      <TextInput
        type={"text"}
        field={"Experience"}
        placeholder={""}
        required={true}
      />
      </div>
    </div>
  );
};

export default BasicInfo;
