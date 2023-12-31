import React from 'react'
import TextInput from '../AdminSide/StaffInfoForm/TextInput'
import SelectInput from '../AdminSide/StaffInfoForm/SelectInput'
const LessonCreate = () => {
  return (
    <div className='border-2 border-gray-300 rounded-lg justify-center gap-3 flex flex-col px-4 h-fit py-2  font-poppins mt-4 text-sm sm:text-base'>
    <p className='text-gray-500'>Add Lesson</p>
    <div className="sm:grid flex flex-col  sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-500 ">
    <SelectInput
              label={"Teacher"}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
            />
            
            <TextInput
              type={"date"}
              field={"Section"}
              placeholder={""}
              required={true}
            />
            <TextInput
              type={"date"}
              field={"Subject"}
              placeholder={""}
              required={true}
            />
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
  )
}

export default LessonCreate
