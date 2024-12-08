/* eslint-disable react/prop-types */
import { Option } from "./Option";
import { rejectTask } from "../../../backendInterface/api";

export const RejectOption = ({ taskId }) => {
  const handleRejectTask = async () => {
    try {
      const response = await rejectTask(taskId);
      console.log("Task accepted successfully:", response);
      window.location.reload(); // Refresh the page on success
    } catch (error) {
      console.error("Failed to accept task:", error);
    }
  };

  return (
    <Option onClick={handleRejectTask}>Reject</Option>
  );
};
