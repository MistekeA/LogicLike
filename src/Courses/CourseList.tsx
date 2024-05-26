import React from 'react';
import '../scss/course.scss';
import { ICourseItem } from './interfaces';
import CourseItem from './CourseItem';



const CourseList: React.FC<{ courses: ICourseItem[] }> = ({ courses }) =>  (
    <div className="course-cargo" >
      {courses.map((course) => (
        <CourseItem course={course} key={course.id}/>
      ))}
    </div>
  )

export default CourseList;