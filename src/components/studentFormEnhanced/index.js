import { formikEnhancer } from "../../highOrderComponents/formikEnhancer";
import StudentForm from "../studentForm";
import { withRouter } from "react-router-dom";


const StudentFormEnhanced = withRouter(formikEnhancer(StudentForm));
export default StudentFormEnhanced;