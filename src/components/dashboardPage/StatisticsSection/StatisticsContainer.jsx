/* eslint-disable react/prop-types */
import Section from "../BaseComponents/Section";

const StatisticsContainer = ({children}) => {
    const styles = {
        display: "flex",
        justifyContent: "space-around"
    }

    

    return (
        <Section>
            <div style={styles}>
                {children}
            </div>
        </Section>
        
    )
}

export default StatisticsContainer;