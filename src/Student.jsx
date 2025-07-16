//props
//import PropTypes from 'prop-types';
function Student(props){
    return(
        <div className="student-card">
            <h2>Details</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No" } </p>
        </div>
    
    );
}
/* Student.propTypes={
    name:propTypes.string,
    age:propTypes.number,
    isStudent:propTypes.bool,
}
Student.defaultProps={
    name: "Unknown",
    age: 0,
    isStudent: false

} */
export default Student;