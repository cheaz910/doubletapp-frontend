import React from "react";
import PropTypes from "prop-types";

import Image from "../image";
import { getColorStyleByValue, getFirstLetters } from "../../utils";
import { studentType } from "../../types";
import styles from "./studentsTableRow.module.css";


const StudentsTableRow = ({ student, onClickRemoveButton }) => {
    return (
        <tr className={styles.row}>
            <td>
                <Image
                    isBorder={true}
                    firstLetters={getFirstLetters(student.name)}
                    width="40px"
                    height="40px"
                    src={student.img}
                    fontStyles={{ fontSize: '15px', lineHeight: '20px' }}
                />
            </td>
            <td className={styles.row__name}>{student.name}</td>
            <td>{student.spec}</td>
            <td>{student.group}</td>
            <td>{student.age}</td>
            <td>{student.rating}</td>
            <td>
                <span
                    className={styles.colorPick}
                    style={{ background: getColorStyleByValue(student.color) }}
                />
            </td>
            <td>
                <span onClick={() => onClickRemoveButton(student._id)} className={styles.removeButton__button} />
            </td>
        </tr>
    );
};

StudentsTableRow.propTypes = {
    student: studentType,
    onClickRemoveButton: PropTypes.func
};

export default StudentsTableRow;