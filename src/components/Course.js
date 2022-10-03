const Course = ({ course, selected, setSelected }) => {
  const isSelected = selected.includes(course);
  const style = {
    backgroundColor:  isSelected ? 'lightgreen' : 'white'
  };

  return (
    <div className="card m-1 p-2"
      style={style}
      onClick={() => setSelected(toggle(course, selected))}
    >
      <div className="card-body">
        <div className="topSection">
          <div className="card-title">{course.term} CS {course.number}</div>
          <div className="card-text">{course.title}</div>
        </div>
        <hr></hr>
        <div className="card-text">{course.meets}</div>
      </div>
    </div>
  );
};

export const toggle = (x, lst) => (
  lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst]
);

export default Course;