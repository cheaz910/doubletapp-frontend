import React from "react";
import PropTypes from "prop-types";

import StudentsListItem from "../studentsListItem";
import { studentType } from "../../types";
import styles from "./studentsList.module.css";


const StudentsList = ({ students, onClickRemoveButton }) => (
    <ul className={styles.studentsList}>
        {students.map((student) => (
            <StudentsListItem key={student._id} student={student} onClickRemoveButton={onClickRemoveButton} />
        ))}
    </ul>
);

StudentsList.propTypes = {
    students: PropTypes.arrayOf(studentType),
    onClickRemoveButton: PropTypes.func
}

export default StudentsList;