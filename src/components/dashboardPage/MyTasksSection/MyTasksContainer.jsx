/* eslint-disable react/prop-types */
import Section from "../BaseComponents/Section";
import Heading1 from "../BaseComponents/text/Heading1";
import DataRow from "./DataRow";

const MyTasksContainer = ({tasks}) => {
    return (
        <Section>
            <Heading1>My tasks</Heading1>
                {tasks.map((element, index)=>(
                    <DataRow key={index} taskId={element.id} elements={[element.title, element.assigned_to, element.status]}></DataRow>
                ))
                }
        </Section>
    )
}


export default MyTasksContainer;