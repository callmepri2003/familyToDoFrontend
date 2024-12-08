import { useTheme } from "styled-components";

/* eslint-disable react/prop-types */
const TitleInput = (props) => {
    const theme = useTheme();
    const inputStyles = {
        width: "100%",
        padding: theme.spacing.unit,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.small,
        fontSize: "16px",
    };
    return (
        <input
            style={inputStyles}
            type="text"
            placeholder="Task Title"
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
        />
    )
}

export default TitleInput;