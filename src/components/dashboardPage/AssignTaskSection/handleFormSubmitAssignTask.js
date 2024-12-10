import { assignTask } from "../../../backendInterface/api";

const handleFormSubmitAssignTask = async (event, title, description, assignedTo) => {
    event.preventDefault(); 
    console.log(assignedTo);
    const taskData = {
        title: title || "Untitled Task",
        description,
        status: "PE", 
        assigned_to: assignedTo,
        assigned_from: parseInt(localStorage.getItem("userId"))
    };

    try {
        await assignTask(taskData);
        alert("Task assigned successfully:");
    } catch (error) {
        alert("Failed to assign task:", error);
    }
};

export default handleFormSubmitAssignTask;