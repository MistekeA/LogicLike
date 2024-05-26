import React from "react";
import "../scss/course.scss";
import { ICourseItem } from "./interfaces";


const CourseItem: React.FC<{ course: ICourseItem, key: string}> = ({
  course
}) => (
    <div className="course-item" key={course.id}>
      <div
        className="course-picture"
        style={{ backgroundColor: course.bgColor }}
      >
       <img src={course.image}></img>
      </div>
      <div className="course-titile">{course.name}</div>
    </div>
  );

export default CourseItem;