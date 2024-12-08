import { assignTask } from "../../../backendInterface/api";

const handleFormSubmitAssignTask = async (event, title, description, assignedTo) => {
    event.preventDefault(); 

    const taskData = {
        title: title || "Untitled Task",
        description,
        status: "PE", 
        assigned_to: assignedTo,
    };

    try {
        const response = await assignTask(taskData);
        console.log("Task assigned successfully:", response);
    } catch (error) {
        console.error("Failed to assign task:", error);
    }
};

export default handleFormSubmitAssignTask;