import { useTheme } from "styled-components";

/* eslint-disable react/prop-types */
const DescriptionInput = (props) => {
    const theme = useTheme();
    const textAreaStyles = {
        width: "100%",
        padding: theme.spacing.unit,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.small,
        fontSize: "16px",
        resize: "none",
        height: "100px",
    };
    return (
        <textarea
                    style={textAreaStyles}
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}
                    placeholder="Describe the task..."
                >

        </textarea>
    )
}

export default DescriptionInput;