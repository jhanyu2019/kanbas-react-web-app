import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database/";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            <div className="btn-list-modules-wrapper">
                <div className="btn-list-modules">
                    <button className="btn btn-outline-secondary">Collapse All</button>
                    <button className="btn btn-outline-secondary">View Progress</button>
                    <select className="btn btn-outline-secondary">
                        <option>✓ Publish All</option>
                        <option>Unpublish All</option>
                    </select>
                    <button className="btn btn-danger">+ Module</button>
                    <button className="btn btn-outline-secondary incon-small">
                        <FaEllipsisV className="ms-2" />
                    </button>
                </div>
            </div>

            <div className="module-content">
            <ul className="list-group wd-modules">
                {modulesList.map((module, index) => (
                    <li key={index}
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson, index) => (
                                    <li className="list-group-item" key={index}>
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}
export default ModuleList;

