import { getFamilyMembers, getTasks } from '../../backendInterface/api';

export async function updateDashboard(setters) {
    const { setRemainingTasks, setPendingTasks } = setters;

    let allTasks = await getTasks().then((response) => {
        return response;
    });

    let familyMembers = await getFamilyMembers().then((familyMembers)=>(familyMembers));

    setRemainingTasks(await getRemainingTasks(allTasks, familyMembers));

    setPendingTasks(await getPendingTasks(allTasks, familyMembers));
}


export async function getRemainingTasks(tasks, familyMembers) {
    let response = tasks.filter(element => element.status.toUpperCase() === "AC");

    response.forEach((task) => {
            let familyMember = familyMembers.find(familyMember => familyMember.id === task.assigned_to);
            task.assigned_to = familyMember.first_name;
            
            familyMember = familyMembers.find(familyMember => familyMember.id === task.assigned_from);
            task.assigned_from = familyMember.first_name;
    });

    return response;
}

export async function getPendingTasks(tasks, familyMembers) {
    let response = tasks.filter(element => element.status.toUpperCase() === "PE");

    response.forEach((task) => {
            let familyMember = familyMembers.find(familyMember => familyMember.id === task.assigned_to);
            task.assigned_to = familyMember.first_name;

            familyMember = familyMembers.find(familyMember => familyMember.id === task.assigned_from);
            task.assigned_from = familyMember.first_name;
    });

    return response;
}

export async function getFamilyMembersAssignTaskSection(){
    return getFamilyMembers().then((response)=>{
        return response;
    })
}