import React from "react";
import SelectInput from "../StaffInfoForm/SelectInput";
import TextInput from "../StaffInfoForm/TextInput";
const AddLesson = () => {
  return (
    <div className="border-2 border-gray-300 rounded-lg justify-center gap-3 flex flex-col px-4 h-fit py-2  font-poppins mt-4 text-sm sm:text-base">
      <p className="text-gray-500">Add Lesson & Topic</p>

      <div className="sm:grid flex flex-col  sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-500 ">
        <SelectInput
          label={"Class"}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <TextInput
          type={"text"}
          field={"Section"}
          placeholder={""}
          required={true}
        />
        <TextInput
          type={"text"}
          field={"Subject"}
          placeholder={""}
          required={true}
        />
        <div className="flex flex-col relative font-poppins">
          <label htmlFor="lesson" className="absolute z-20 top-0 bg-white px-1 text-sm ml-4 ">Lesson</label>
          <div  className="relative z-10 flex gap-5 top-3 border-1 border-black px-3 py-2 text-sm  rounded-md">
            <input type="text" name="lesson" id="lesson" placeholder="lesson" required />
            <div className="flex gap-1 border-1 border-black rounded-md px-1 ">
              <button className="border-1 border-r-black p-1"  >
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6305 8.16786H7.26426V12.8077C7.26426 13.3181 6.8713 13.7356 6.39102 13.7356C5.91074 13.7356 5.51778 13.3181 5.51778 12.8077V8.16786H1.15156C0.67128 8.16786 0.27832 7.75027 0.27832 7.23989C0.27832 6.72951 0.67128 6.31193 1.15156 6.31193H5.51778V1.67211C5.51778 1.16172 5.91074 0.744141 6.39102 0.744141C6.8713 0.744141 7.26426 1.16172 7.26426 1.67211V6.31193H11.6305C12.1108 6.31193 12.5037 6.72951 12.5037 7.23989C12.5037 7.75027 12.1108 8.16786 11.6305 8.16786Z"
                    fill="black"
                  />
                </svg>
                </button>
                <button className="p-1" >
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.80925 13.7356C2.42402 13.7356 2.09413 13.5942 1.81956 13.3113C1.545 13.0283 1.40795 12.6886 1.40842 12.2921V2.90939H0.708008V1.46589H4.21007V0.744141H8.41255V1.46589H11.9146V2.90939H11.2142V12.2921C11.2142 12.6891 11.0769 13.029 10.8024 13.312C10.5278 13.5949 10.1981 13.7361 9.81338 13.7356H2.80925ZM9.81338 2.90939H2.80925V12.2921H9.81338V2.90939ZM4.21007 10.8486H5.6109V4.35289H4.21007V10.8486ZM7.01173 10.8486H8.41255V4.35289H7.01173V10.8486Z"
                      fill="black"
                    />
                  </svg>
                
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative font-poppins">
          <label htmlFor="lesson" className="absolute z-20 top-0 bg-white px-1 text-sm ml-4 ">Topic</label>
          <div  className="relative z-10 flex  gap-5  top-3 border-1 border-black px-3 py-2 text-sm  rounded-md">
            <input type="text" name="topic" id="topic" placeholder="Topic" required />
            <div className="flex gap-1 border-1 border-black rounded-md px-1 ">
              <button className="border-1 border-r-black p-1"  >
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6305 8.16786H7.26426V12.8077C7.26426 13.3181 6.8713 13.7356 6.39102 13.7356C5.91074 13.7356 5.51778 13.3181 5.51778 12.8077V8.16786H1.15156C0.67128 8.16786 0.27832 7.75027 0.27832 7.23989C0.27832 6.72951 0.67128 6.31193 1.15156 6.31193H5.51778V1.67211C5.51778 1.16172 5.91074 0.744141 6.39102 0.744141C6.8713 0.744141 7.26426 1.16172 7.26426 1.67211V6.31193H11.6305C12.1108 6.31193 12.5037 6.72951 12.5037 7.23989C12.5037 7.75027 12.1108 8.16786 11.6305 8.16786Z"
                    fill="black"
                  />
                </svg>
                </button>
                <button className="p-1" >
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.80925 13.7356C2.42402 13.7356 2.09413 13.5942 1.81956 13.3113C1.545 13.0283 1.40795 12.6886 1.40842 12.2921V2.90939H0.708008V1.46589H4.21007V0.744141H8.41255V1.46589H11.9146V2.90939H11.2142V12.2921C11.2142 12.6891 11.0769 13.029 10.8024 13.312C10.5278 13.5949 10.1981 13.7361 9.81338 13.7356H2.80925ZM9.81338 2.90939H2.80925V12.2921H9.81338V2.90939ZM4.21007 10.8486H5.6109V4.35289H4.21007V10.8486ZM7.01173 10.8486H8.41255V4.35289H7.01173V10.8486Z"
                      fill="black"
                    />
                  </svg>
                
              </button>
            </div>
          </div>
        </div>
        
      </div>
      <button className='flex items-center ms-auto mr-3 mt-3 bg-gray-200 w-fit rounded-lg px-3 py-1'> <svg
                className="w-5 h-5"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.875 26.2188L16.6562 18C16.0312 18.5417 15.3025 18.9635 14.47 19.2656C13.6376 19.5677 12.7517 19.7188 11.8125 19.7188C9.55912 19.7188 7.65203 18.9375 6.09122 17.375C4.53041 15.8125 3.75 13.9271 3.75 11.7188C3.75 9.51042 4.53125 7.625 6.09375 6.0625C7.65625 4.5 9.54688 3.71875 11.7656 3.71875C13.9844 3.71875 15.8698 4.5 17.4219 6.0625C18.974 7.625 19.75 9.51198 19.75 11.7234C19.75 12.6161 19.6042 13.4792 19.3125 14.3125C19.0208 15.1458 18.5833 15.9271 18 16.6562L26.25 24.8438L24.875 26.2188ZM11.7812 17.8438C13.474 17.8438 14.9128 17.2448 16.0977 16.0469C17.2826 14.849 17.875 13.4062 17.875 11.7188C17.875 10.0312 17.2826 8.58854 16.0977 7.39062C14.9128 6.19271 13.474 5.59375 11.7812 5.59375C10.0712 5.59375 8.61762 6.19271 7.42056 7.39062C6.22352 8.58854 5.625 10.0312 5.625 11.7188C5.625 13.4062 6.22352 14.849 7.42056 16.0469C8.61762 17.2448 10.0712 17.8438 11.7812 17.8438Z"
                  fill="black"
                />
              </svg><span>Search</span></button>
    </div>
  );
};

export default AddLesson;
