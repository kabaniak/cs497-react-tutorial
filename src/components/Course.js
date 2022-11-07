import { hasConflict } from '../utilities/time.js';
import { Link } from 'react-router-dom';

const Course = ({ course, selected, setSelected, profile }) => {
  const isSelected = selected.includes(course);
  const isDisabled = !isSelected && hasConflict(course, selected);
  const style = {
    backgroundColor: isDisabled ? 'lightgrey' : isSelected ? 'lightgreen' : 'white'
  };

  const id = course.term[0] + course.number;

  return (
    <div className="card m-1 p-2"
      data-cy="course"
      style={style}
      onClick={() => isDisabled ? console.log("Select disabled") : setSelected(toggle(course, selected))}
    >
      <div className="card-body">
        <div className="topSection">
          <div className="card-title">{course.term} CS {course.number}</div>
          <div className="card-text">{course.title}</div>
        </div>
        <hr></hr>
        <div className="card-text">{course.meets}</div>
        {profile?.isAdmin &&
          <p><Link to={`/edit/${id}`}>Edit Course</Link></p>
        }
      </div>
    </div>
  );
};

export const toggle = (x, lst) => (
  lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst]
);

export default Course;