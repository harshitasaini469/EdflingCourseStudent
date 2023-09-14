import React from 'react'
import LessonCreate from './LessonCreate'
import FileOperations from '../AdminSide/HRdesignation/FileOperations'
import LessonPlanTable from './LessonPlanTable'
import lessonPlans from './lessonPlans'

const PlanCreatePage = () => {
  return (
    <div>
      <button className="rounded-md p-2 bg-gradient-to-r from-teal-600 to-teal-100 font-medium w-fit text-sm sm:text-base">
        Lesson Plan Create
      </button>
      <LessonCreate/>
      <div className='mt-5'>
        <FileOperations/>
      </div>
      <LessonPlanTable lessonPlans={lessonPlans}/>
    </div>
  )
}

export default PlanCreatePage
