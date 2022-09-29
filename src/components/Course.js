const Course = ({ course }) => {
    return (
      <div className="card m-1 p-2">
        <div className="card-body">
          <div className="topSection">
            <div className="card-title">{ course.term } CS { course.number }</div>
            <div className="card-text">{ course.title }</div>
          </div>
          <hr></hr>
          <div className="card-text">{ course.meets }</div>
        </div>
      </div>
    );
  };

export default Course;