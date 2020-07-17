import { withFormik } from "formik";
import * as Yup from "yup";

import { addStudentApi } from "../../api";


export const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        name: Yup.string()
            .required('Name is required'),
        rating: Yup.number()
            .required('Rating is required'),
        group: Yup.string()
            .required('Group is required!'),
        spec: Yup.string()
            .required('Spec is required!'),
        gender: Yup.string()
            .required('Gender is required!'),
        color: Yup.string()
            .required('Color is required!'),
    }),
    mapPropsToValues: () => ({
        email: '',
        spec: '',
        group: '',
        name: '',
        rating: '',
        gender: '',
        color: '',
        img: {
            file: null,
            blobURL: null,
        }
    }),
    handleSubmit: (values, { props }) => {
        const payload = {
            ...values,
            color: values.color.value,
            gender: values.gender.label,
            spec: values.spec.label,
            group: values.group.label,
            age: 20,
            img: values.img.file
        };
        let formData = new FormData();
        for (let key of Object.keys(payload)) {
            formData.append(key, payload[key]);
        }
        addStudentApi(formData)
            .then(() => props.history.push('/'))
            .catch(() => alert('500'));
    },
});