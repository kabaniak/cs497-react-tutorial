import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from './EditForm';
import CourseList from './CourseList';

const Dispatcher = ({courses, profile}) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CourseList courses={courses} profile={profile} />} />
      <Route path="/edit/:id" element={<EditForm courses={courses} />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;
