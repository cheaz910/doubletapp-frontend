import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import StudentsTable from "../../components/studentsTable";
import StudentsList from "../../components/studentsList";
import StudentsFilter from "../../components/studentsFilter";
import { sortFields } from "../../constants";
import { withRouter } from "react-router";
import { Loader } from "../../components/loader";
import { sortBy } from "../../utils";
import { deleteStudentApi, getStudentsApi } from "../../api";
import styles from "./students.module.css";


const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 1000})
    return isDesktop ? children : null
}

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 999})
    return isMobile ? children : null
}

class Students extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchField: '',
            isSortTypeAsc: true,
            sortFieldId: 0,
            students: [],
            isLoading: true,
            errorMsg: '',
        }
    }

    onClickSortField = () => {
        this.setState({sortFieldId: (this.state.sortFieldId + 1) % sortFields.length});
    }

    onClickSortType = () => {
        this.setState({isSortTypeAsc: !this.state.isSortTypeAsc});
    }

    onClickRemoveButton = (id) => {
        deleteStudentApi(id)
            .then((response) => {
                if (response.status === 204) {
                    this.setState({
                        students: this.state.students.filter(student => student._id !== id)
                    });
                } else {
                    throw new Error("500");
                }
            })
            .catch(error => this.setState({
                errorMsg: error.message
            }));
    }

    onChangeSearchField = (e) => {
        this.setState({searchField: e.target.value});
    }

    componentDidMount() {
        getStudentsApi()
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("500");
            })
            .then(data => this.setState({
                students: data.students,
                isLoading: false,
            }))
            .catch(error => this.setState({
                errorMsg: error.message
            }));
    }

    render() {
        if (this.state.errorMsg)
            return <h1>{this.state.errorMsg}</h1>
        if (this.state.isLoading)
            return <Loader />
        let filteredStudents = this.state.students.filter(item => item.name.includes(this.state.searchField));
        filteredStudents = sortBy(filteredStudents, sortFields[this.state.sortFieldId].value, this.state.isSortTypeAsc);
        return (
            <div className={styles.students}>
                <div className={styles.students__header}>
                    <span className={styles.students__title}>Студенты</span>
                    <Link to="/addStudent" className={styles.students__addButton}>
                        <div className={styles.plus}>
                            <div className={styles.plus__horizontal}/>
                            <div className={styles.plus__vertical}/>
                        </div>
                        Добавить студента
                    </Link>
                </div>
                <StudentsFilter
                    sortType={this.state.isSortTypeAsc}
                    sortField={sortFields[this.state.sortFieldId].label}
                    onClickSortField={this.onClickSortField}
                    onClickSortType={this.onClickSortType}
                    onChangeSearchField={this.onChangeSearchField}
                />
                <Desktop>
                    <StudentsTable students={filteredStudents} onClickRemoveButton={this.onClickRemoveButton} />
                </Desktop>
                <Mobile>
                    <StudentsList students={filteredStudents} onClickRemoveButton={this.onClickRemoveButton} />
                </Mobile>
            </div>
        );
    }
}

export default withRouter(Students);