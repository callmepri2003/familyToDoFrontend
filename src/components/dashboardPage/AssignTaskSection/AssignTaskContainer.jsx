import Section from "../BaseComponents/Section";
import { useEffect, useState } from "react";
import { getFamilyMembers } from "../../../backendInterface/api";
import AssignTaskForm from "./AssignTaskForm";
import TitleInput from "./inputs/TitleInput";
import FamilyMembersInput from "./inputs/FamilyMembersInput";
import LocationInput from "./inputs/LocationInput";
import DescriptionInput from "./inputs/DescriptionInput";
import SubmitButtonInput from "./inputs/SubmitButtonInput";
import handleFormSubmitAssignTask from "./handleFormSubmitAssignTask";
const AssignTaskContainer = () => {

    const styles = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px", // Adjusted gap for better alignment
    };

    const [familyMembersOptions, setFamilyMembersOptions] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignedTo, setAssignedTo] = useState(null);

    useEffect(() => {
        async function updateAssignTaskContainer() {
            try {
                const response = await getFamilyMembers();
                setFamilyMembersOptions(response);
            } catch (error) {
                console.error("Failed to fetch family members", error);
            }
        }

        updateAssignTaskContainer();
    }, []);

    return (
        <Section>
            
            <AssignTaskForm 
                styles={styles} 
                handleFormSubmit={(event) => handleFormSubmitAssignTask(event, title, description, assignedTo)} 
            >
                <TitleInput 
                        title={title}
                        setTitle={setTitle}
                    />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <FamilyMembersInput 
                        assignedTo = {assignedTo}
                        setAssignedTo = {setAssignedTo}
                        familyMembersOptions = {familyMembersOptions}
                        />
                        <LocationInput 
                        />
                    
                </div>
                <DescriptionInput 
                    value = {description}
                    setDescription = {setDescription}
                />

                <SubmitButtonInput />

            </AssignTaskForm>
        </Section>
    );
};

export default AssignTaskContainer;
