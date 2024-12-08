/* eslint-disable react/prop-types */
const AssignTaskForm = (props) => {
    return (
    <form style={props.styles} onSubmit={props.handleFormSubmit}>
        {props.children}
    </form>
    )
}

export default AssignTaskForm;