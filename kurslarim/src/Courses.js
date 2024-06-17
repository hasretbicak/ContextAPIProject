import React from 'react'
import Course from './Course'

function Courses({courses, removeCourse}) {
    
  return (
    <div className='courseMainDiv'>
      <div >
        <h2>Kurslarım</h2>
      </div>
      <div className='cardDiv'>
        {
          courses.map((course)=>{
            return(
              <Course key={course.id} {...course} removeOneCourse={removeCourse} />
              // course={course}  =>bunun yerine ...course kullanacağız. Course.js de id, content, title... alabilmemiz için
            )
          })
        }
      </div>
      
    </div>
  )
}
export default Courses;