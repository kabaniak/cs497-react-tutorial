const CourseList = ({ courses }) => {
    const termCourses = Object.values(courses)

    return (
        <div>
            {
                termCourses.map(course =>
                    <p>{course.term} CS {course.number}: {course.title}</p>
                )
            }
        </div>
    );
};

export default CourseList;