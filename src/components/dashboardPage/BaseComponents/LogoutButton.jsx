import { useTheme } from "styled-components";
const LogoutButton = () => {
    const theme = useTheme();

    const submitBtnStyles = {
        border: "none",
        backgroundColor: theme.colors.error,
        color: theme.colors.textSurface,
        padding: `${theme.spacing.unit} ${theme.spacing.medium}`,
        width: "100%",
        borderRadius: theme.borderRadius.small,
        fontSize: "16px",
        cursor: "pointer",
    };
    return (
        <>
        <p>Version 1.0.0</p>
        <input style={submitBtnStyles} type="submit" value={"Logout"} onClick={()=>{window.location.href="/logout"}}/>
        </>

    )
}

export default LogoutButton;