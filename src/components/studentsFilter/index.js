import React from "react";
import PropTypes from "prop-types";

import sortAscImg from "../../assets/images/sortAsc.png";
import styles from "./studentsFilter.module.css";


const StudentsFilter = (props) => (
    <div className={styles.filter}>
        <input
            className={styles.filter__searchField}
            placeholder="Поиск по имени"
            onChange={props.onChangeSearchField}
        />
        <div className={styles.filter__sortButton}>
            <div className={styles.sortButton__sortField} onClick={props.onClickSortField}>
                {props.sortField}
            </div>
            <input
                id="sortTypeInput"
                type="checkbox"
                className={styles.sortButton__input}
                checked={props.isSortTypeAsc}
            />
            <label htmlFor="sortTypeInput" className={styles.sortButton__sortType} onClick={props.onClickSortType}>
                <img className={styles.sortButton__img} src={sortAscImg} alt="" />
            </label>
        </div>
    </div>
);

StudentsFilter.propTypes = {
    onChangeSearchField: PropTypes.func,
    onClickSortField: PropTypes.func,
    onClickSortType: PropTypes.func,
    sortField: PropTypes.string,
    isSortTypeAsc: PropTypes.bool
};

export default StudentsFilter;