import React from "react";
import './index.css';
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import {useNavigate, Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import {useDispatch, useSelector} from "react-redux";
import { KanbasState } from "../../store";
import {
    addAssignment, deleteAssignment,updateAssignment,selectAssignment
} from "./assignmentsReducer";


function Assignments() {
    const { courseId } = useParams();
    const dispatch = useDispatch();


    const assignmentsList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments.filter((assignment) => assignment.course === courseId));
    const navigate = useNavigate();
    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
    };

    const handleDelete = (assignmentId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmDelete) {
            dispatch(deleteAssignment(assignmentId));
        }
    };




    return (
        <>
            <div className="flex-fill"  style={{ marginTop: '70px' }}>

                <div className="d-flex justify-content-between mt-3">
                    <input className="form-control" placeholder="Search for Assignments" style={{ maxWidth: '200px', width: '100%' }} />
                    <div className="buttons-container">
                        <button className="btn btn-outline-secondary">+ Group</button>
                        <button className="btn btn-danger" onClick={handleAddAssignment}>+ Assignment</button>


                        <button className="btn button-icon"><FaEllipsisV /></button>
                    </div>
                </div>
                <hr/><br/>


            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
                    </div>
                    <ul className="list-group">
                        {assignmentsList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                       <button className="btn btn-danger" onClick={() => handleDelete(assignment._id)}>Delete</button>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
            </div>
        </>
    );}
export default Assignments;
