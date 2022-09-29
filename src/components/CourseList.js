import Course from "./Course";

const CourseList = ({ courses }) => {
    const termCourses = Object.values(courses)

    console.log(termCourses)

    return (
        <div className="course-list">
            {
                termCourses.map(course =>
                    <Course key={ course.id } course={course} />
                )
            }
        </div>
    );
};

export default CourseList;