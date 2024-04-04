
import "./index.css";
import { Navigate, Route, Routes, useLocation, useParams, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Breadcrumb from './Breadcrumb';
import { useState, useEffect } from "react";
import axios from "axios";

function Courses({ courses }: { courses: any[]; }) {
    const { courseId, assignmentId } = useParams();
    const COURSES_API = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState<any>({ _id: "" });
    const findCourseById = async (courseId?: string) => {
        const response = await axios.get(
            `${COURSES_API}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    return (
        <div className="d-block">
            <Breadcrumb />
            <hr />
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "50px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Piazza" element={<h1 style={{ marginTop: '30px' }}>Piazza</h1>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;

