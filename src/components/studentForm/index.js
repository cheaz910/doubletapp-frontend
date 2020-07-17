import React from "react";
import PropTypes from "prop-types";

import { colors } from "../../constants";
import { DefaultSelect, ColorSelect } from "../customSelect";
import StudentFormAvatar from "../studentFormAvatar";
import { groups, specs, genders} from "../../constants";
import styles from "./studentForm.module.css";


const StudentForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        isSubmitting,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <StudentFormAvatar name={values.name} img={values.img.blobURL} setFieldValue={setFieldValue} />
            <div className={styles.formStudent}>
                <label>
                    <span className={styles.formStudent__fieldTitle}>ФИО</span>
                    <input style={ errors.name && touched.name ? { border: '1px solid red' } : {} }
                        id="name"
                        className={styles.formStudent__field}
                        placeholder="Имя"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </label>
                <label>
                    <span className={styles.formStudent__fieldTitle}>Email</span>
                    <input style={ errors.email && touched.email ? { border: '1px solid red' } : {} }
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.formStudent__field}
                        placeholder="Email"
                    />
                </label>
                <label>
                    <span className={styles.formStudent__fieldTitle}>Специальность</span>
                    <DefaultSelect
                        options={specs}
                        valueName='spec'
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.spec}
                        touched={touched.spec}/>
                </label>
                <label>
                    <span className={styles.formStudent__fieldTitle}>Группа</span>
                    <DefaultSelect
                        options={groups}
                        valueName='group'
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.group}
                        touched={touched.group}
                    />
                </label>
                <label>
                    <span className={styles.formStudent__fieldTitle}>Рейтинг</span>
                    <input
                        style={ errors.rating && touched.rating ? { border: '1px solid red' } : {} }
                        id="rating"
                        type="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.formStudent__field}
                        placeholder="Рейтинг"
                        min="0"
                        max="1000"
                    />
                </label>
                <label>
                    <span className={styles.formStudent__fieldTitle}>Пол</span>
                    <DefaultSelect
                        options={genders}
                        valueName='gender'
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.gender}
                        touched={touched.gender}
                    />
                </label>
                <label>
                    <span className={styles.formStudent__fieldTitle}>Любимый цвет</span>
                    <ColorSelect
                        options={colors}
                        valueName='color'
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.color}
                        touched={touched.color}
                    />
                </label>
            </div>
            <button className={styles.formStudent__submitButton} type="submit" disabled={isSubmitting}>
                Создать
            </button>
        </form>
    );
};

const selectProps = PropTypes.objectOf(
    PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.objectOf(
            PropTypes.shape({
                blobURL: PropTypes.string,
                file: PropTypes.object,
            })
        ),
        email: PropTypes.string,
        group: PropTypes.string,
        color: PropTypes.string,
        gender: PropTypes.string,
    })
);

StudentForm.propTypes = {
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    handleSubmit: PropTypes.func,
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func,
    isSubmitting: PropTypes.bool,
    values: selectProps,
    touched: selectProps,
    errors: selectProps,
}

export default StudentForm;