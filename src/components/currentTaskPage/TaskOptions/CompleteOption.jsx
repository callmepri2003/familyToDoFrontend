/* eslint-disable react/prop-types */
import { Option } from "./Option";
import { completeTask } from "../../../backendInterface/api";

export const CompleteOption = ({ taskId }) => {
  const handleCompleteTask = async () => {
    try {
      const response = await completeTask(taskId);
      console.log("Task accepted successfully:", response);
      window.location.reload(); // Refresh the page on success
    } catch (error) {
      console.error("Failed to accept task:", error);
    }
  };

  return (
    <Option onClick={handleCompleteTask}>Complete</Option>
  );
};
