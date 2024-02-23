import React from "react";
import "./index.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div style={{marginTop: "40px"}}>
             <span className="float-end" >
                 <FaCheckCircle className="text-success" /> Published
                <button className="edit-button">
                     <FaEllipsisV className="ms-2" />
                </button>
            </span>
            <br/><hr/>
            <h5 style={{marginTop: "20px"}}>Assignment Name</h5>
            <input value={assignment?.title}
                   className="form-control mb-2" /> <hr/>


            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger float-end">
                Cancel
            </Link> <br/> <hr/>
        </div>
    );
}
export default AssignmentEditor;