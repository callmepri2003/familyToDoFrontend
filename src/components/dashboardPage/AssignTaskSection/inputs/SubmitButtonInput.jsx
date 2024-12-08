import { useTheme } from "styled-components";
const SubmitButtonInput = () => {
    const theme = useTheme();

    const submitBtnStyles = {
        border: "none",
        backgroundColor: theme.colors.primary,
        color: theme.colors.textSurface,
        padding: `${theme.spacing.unit} ${theme.spacing.medium}`,
        width: "100%",
        borderRadius: theme.borderRadius.small,
        fontSize: "16px",
        cursor: "pointer",
    };
    return (
        <input style={submitBtnStyles} type="submit" value={"Assign"} />

    )
}

export default SubmitButtonInput;