export const deleteStudentApi = (id) => {
    return fetch(`/api/students/${id}`, {
        method: 'DELETE'});
};

export const getStudentsApi = () => {
    return fetch('/api/students');
};

export const addStudentApi = (data) => {
    return fetch('/api/students', {
        method: 'POST',
        body: data
    })
};