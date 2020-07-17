import React from "react";
import PropTypes from "prop-types";

import StudentsTableRow from "../studentsTableRow";
import styles from "./studentsTable.module.css";
import { studentType } from "../../types";


const StudentsTable = ({ students, onClickRemoveButton }) => (
    <table className={styles.table}>
        <colgroup span="7" align="center" width="50">
            <col span="1" width="7%" />
            <col span="1" width="25%" />
            <col span="1" width="25%" />
            <col span="1" width="11%" />
            <col span="1" width="11%" />
            <col span="1" width="11%"/>
            <col span="1" width="5%" />
            <col span="1" width="5%" />
        </colgroup>
        <thead>
            <tr>
                <td/>
                <td>ФИО</td>
                <td>Специальность</td>
                <td>Группа</td>
                <td>Возраст</td>
                <td>Рейтинг</td>
                <td/>
                <td/>
            </tr>
        </thead>
        <tbody>
            {students.map((student) => (
                <StudentsTableRow key={student._id} student={student} onClickRemoveButton={onClickRemoveButton} />
            ))}
        </tbody>
    </table>
);

StudentsTable.propTypes = {
    students: PropTypes.arrayOf(studentType),
    onClickRemoveButton: PropTypes.func
};

export default StudentsTable;