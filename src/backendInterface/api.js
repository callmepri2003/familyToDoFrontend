const apiUrl = `${import.meta.env.VITE_API_PROTOCOL}://${import.meta.env.VITE_API_HOST}/`;
const credentials = btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`); // Base64 encode username:password

const headers = {
  "Authorization": `Basic ${credentials}`,
  "Content-Type": "application/json",
};

export async function getTasks() {
  const response = await fetch(apiUrl + "tasks/", { headers });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function getFamilyMembers() {
  const response = await fetch(apiUrl + "familyMembers/", { headers });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function getUsers() {
  const response = await fetch(apiUrl + "users/", { headers });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function assignTask(taskData) {


  const response = await fetch(apiUrl + "tasks/assign_task/", {
    method: "POST",
    headers,
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error(`Failed to assign task: ${response.statusText}`);
  }

  return await response.json();
}


export async function acceptTask(taskId) {
  const response = await fetch(`${apiUrl}tasks/${taskId}/accept_task/`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to accept task: ${response.statusText}`);
  }

  return await response.json();
}

export async function rejectTask(taskId) {
  const response = await fetch(`${apiUrl}tasks/${taskId}/reject_task/`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to reject task: ${response.statusText}`);
  }

  return await response.json();
}

export async function completeTask(taskId) {
  const response = await fetch(`${apiUrl}tasks/${taskId}/complete_task/`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to complete task: ${response.statusText}`);
  }

  return await response.json();
}