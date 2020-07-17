import React from "react";
import PropTypes from "prop-types";

import Image from "../image";
import { getColorStyleByValue, getFirstLetters } from "../../utils";
import iconStar from "../../assets/images/iconStar.png";
import { studentType } from "../../types";
import styles from "./studentsListItem.module.css";


const StudentsListItem = ({ student, onClickRemoveButton }) => (
    <li className={styles.profile} key={student._id}>
        <div className={styles.profile__header}>
            <Image
                isBorder={true}
                width="40px"
                height="40px"
                firstLetters={getFirstLetters(student.name)}
                src={student.img}
                fontStyles={{ fontSize: '15px', lineHeight: '20px' }}
            />
            <div className={styles.header__mainInfo}>
                <span className={styles.mainInfo__name}>{student.name}</span>
                <div className={styles.mainInfo__secondRow}>
                    <span
                        className={styles.secondRow__colorPick}
                        style={{ background: getColorStyleByValue(student.color) }}
                    />
                    <img src={iconStar} alt="" />
                    <span className={styles.secondRow__rating}>{student.rating}</span>
                </div>
            </div>
            <div onClick={() => onClickRemoveButton(student._id)} className={styles.profile__removeButton} />
        </div>
        <ul className={styles.profile__description}>
            <li>{student.age}</li>
            <li>{student.spec}</li>
            <li>{student.group}</li>
        </ul>
    </li>
);

StudentsListItem.propTypes = {
    student: studentType,
    onClickRemoveButton: PropTypes.func
};

export default StudentsListItem;