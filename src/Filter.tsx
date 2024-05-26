import React, {useEffect, useState} from 'react';
import './scss/filter.scss';
const Filter: React.FC<{ courses: { tags: string[] }[], onFilterChange: (tag: string) => void }> = ({ courses, onFilterChange }) => {
  const allTags =  courses.map(course => course.tags).flat();
  const uniqueTags = Array.from(new Set(allTags));
  const optionItems: {value: string}[] = uniqueTags.map((course) => {
    return {value:course}
  });

  optionItems.unshift({ value: "Все темы" });

  const [currentTag, setCurrentTag] = useState(optionItems[0]);

  const getMenuItem = (item: string) => {
     setCurrentTag({value:item});
        optionItems.map((classingItem)=>{
          if(classingItem.value!==item) {
            const curr_classingItem = document.getElementById(classingItem.value);
            curr_classingItem?.classList.remove("custom_item_current");
          }
          else{
        const element = document.getElementById(classingItem.value);
        element?.classList.add("custom_item_current");
          }
        })

  };

  useEffect(()=>{
   onFilterChange(currentTag?.value as string);
  },[currentTag])

  return (
    <div className="select-wrapper">
      {optionItems.map((item) => (
        <div
          id={item.value}
          onClick={() => getMenuItem(item.value)}
          key={item.value}
          className="custom_item"
        >
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default Filter;
