const apiUrl = `${import.meta.env.VITE_API_PROTOCOL}://${import.meta.env.VITE_API_HOST}/`;

function getHeaders(){
  let credentials = null;
  try {
    credentials = JSON.parse(localStorage.getItem("credentials"));
    
    if(credentials === null){
      throw new Error("Unauthenticated");
    }
  } catch (error) {
    console.log(error);
   window.location.href = "login";
   return; 
  }
    
  return {
    "Authorization": `Basic ${credentials}`,
    "Content-Type": "application/json",
  }
};

export async function getTasks() {
  const username = localStorage.getItem("username");
  const response = await fetch(`${apiUrl}tasks/?username=${username}`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function getFamilyMembers() {

  const response = await fetch(apiUrl + "familyMembers/", {
    method: "GET",
    headers: getHeaders()
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function getUsers() {
  const response = await fetch(apiUrl + "users/", {
    method: "GET",
    headers: getHeaders()
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function assignTask(taskData) {
  const response = await fetch(apiUrl + "tasks/assign_task/", {
    method: "POST",
    headers: getHeaders(), // Use "headers" key
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
    headers: getHeaders(), // Use "headers" key
  });

  if (!response.ok) {
    throw new Error(`Failed to accept task: ${response.statusText}`);
  }

  return await response.json();
}

export async function rejectTask(taskId) {
  const response = await fetch(`${apiUrl}tasks/${taskId}/reject_task/`, {
    method: "GET",
    headers: getHeaders(), // Use "headers" key
  });

  if (!response.ok) {
    throw new Error(`Failed to reject task: ${response.statusText}`);
  }

  return await response.json();
}

export async function completeTask(taskId) {
  const response = await fetch(`${apiUrl}tasks/${taskId}/complete_task/`, {
    method: "GET",
    headers: getHeaders(), // Use "headers" key
  });

  if (!response.ok) {
    throw new Error(`Failed to complete task: ${response.statusText}`);
  }

  return await response.json();
}
