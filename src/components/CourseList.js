import Course from "./Course";

const CourseList = ({ courses }) => {
    const termCourses = Object.values(courses)

    return (
        <div className="course-list">
            {
                termCourses.map(course =>
                    <Course course={course} />
                )
            }
        </div>
    );
};

export default CourseList;