import React from "react";
import { Link } from "react-router-dom";
import { history as historyPropTypes } from "history-prop-types";
import PropTypes from "prop-types";

import StudentFormEnhanced from "../../components/studentFormEnhanced";
import ArrowLeft from "../../assets/images/arrow-left.png";
import styles from "./addStudent.module.css";


class AddStudent extends React.Component {
    render() {
        return (
            <div className={styles.addStudent}>
                <Link to="/" className={styles.addStudent__backButton}>
                    <img src={ArrowLeft} alt="" />
                    <span className={styles.backButton__text}>НАЗАД К СПИСКУ СТУДЕНТОВ</span>
                </Link>
                <span className={styles.addStudent__title}>Новый студент</span>
                <StudentFormEnhanced hist={"asf"} hh={this.props.history} />
            </div>
        );
    }
}

AddStudent.propTypes = {
    history: PropTypes.shape(historyPropTypes)
};

export default AddStudent;