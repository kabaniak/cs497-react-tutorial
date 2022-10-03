import React, { useState, useEffect } from 'react';
import Course from "./Course";

const terms = { F: 'Fall', W: 'Winter', S: 'Spring' };

const CourseList = ({ courses }) => {
    const [term, setTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);
    const termCourses = Object.values(courses).filter(course => term === course.term);

    console.log(termCourses)

    return (
        <>
            <TermSelector term={term} setTerm={setTerm} />
            <div className="course-list">
                {
                    termCourses.map(course =>
                        <Course key={course.term + " " + course.number} course={course}
                            selected={selected} setSelected={setSelected} />
                    )
                }
            </div>
        </>
    );
};


const TermSelector = ({ term, setTerm }) => {
    return (
        <div className="btn-toolbar justify-content-between">
            <div className="btn-group" id="term-btns">
                {
                    Object.values(terms).map(
                        value => <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
                    )
                }
            </div>
        </div>
    );
};

const TermButton = ({ term, setTerm, checked }) => (
    <>
        <input type="radio" id={term} className="btn-check" checked={checked} autoComplete="off"
            onChange={() => setTerm(term)} />
        <label className="btn btn-success m-1 p-2" htmlFor={term}>
            {term}
        </label>
    </>
);

export default CourseList;