import React, { useState, useEffect } from 'react';
import CourseList from './Courses/CourseList';
import Filter from './Filter';
import './scss/app.scss';
import { ICourseItem } from './Courses/interfaces';
const App: React.FC = () => {
  const [courses, setCourses] = useState< ICourseItem []>([]);
  const [filteredCourses, setFilteredCourses] = useState<ICourseItem[]>([]);

  useEffect(() => {
    fetch('https://logiclike.com/docs/courses.json')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setFilteredCourses(data);
      });
  }, []);

  const handleFilterChange = (selectedTag: string) => {
    if (selectedTag === "Все темы") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter((course) =>
        course?.tags?.includes(selectedTag)
      );
      setFilteredCourses(filtered);
    }
  };

  return (
    <div className="main-block">
      <Filter courses={courses} onFilterChange={handleFilterChange} />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default App;