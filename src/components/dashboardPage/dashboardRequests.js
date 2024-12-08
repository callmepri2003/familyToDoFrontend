import { getFamilyMembers, getTasks } from '../../backendInterface/api';

export async function updateDashboard(setters) {
    const { setRemainingTasks, setPendingTasks } = setters;

    getRemainingTasks().then((response) => {
        setRemainingTasks(response);
    });

    getPendingTasks().then((response) => {
        setPendingTasks(response);
    });
}

export async function getRemainingTasks() {
    const tasks = await getTasks().then((response) => {
        return response.filter(element => element.status.toUpperCase() === "AC");
    });

    await getFamilyMembers().then((familyMembers) => {
        tasks.forEach((task) => {
            const familyMember = familyMembers.find(familyMember => familyMember.id === task.assigned_to);
            task.assigned_to = familyMember.first_name;
        });
    });

    return tasks;
}

export async function getPendingTasks() {
    const tasks = await getTasks().then((response) => {
        return response.filter(element => element.status.toUpperCase() === "PE");
    });

    await getFamilyMembers().then((familyMembers) => {
        tasks.forEach((task) => {
            const familyMember = familyMembers.find(familyMember => familyMember.id === task.assigned_to);
            task.assigned_to = familyMember.first_name;
        });
    });

    return tasks;
}

export async function getFamilyMembersAssignTaskSection(){
    return getFamilyMembers().then((response)=>{
        return response;
    })
}