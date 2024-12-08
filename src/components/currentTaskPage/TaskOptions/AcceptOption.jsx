/* eslint-disable react/prop-types */
import { Option } from "./Option";
import { acceptTask } from "../../../backendInterface/api";

export const AcceptOption = ({ taskId }) => {
  const handleAcceptTask = async () => {
    try {
      const response = await acceptTask(taskId);
      console.log("Task accepted successfully:", response);
      window.location.reload(); // Refresh the page on success
    } catch (error) {
      console.error("Failed to accept task:", error);
    }
  };

  return (
    <Option onClick={handleAcceptTask}>Accept</Option>
  );
};
