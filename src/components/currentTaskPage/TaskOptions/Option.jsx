import { useTheme } from "styled-components"

/* eslint-disable react/prop-types */
export const Option = ({children, onClick}) => {
    const theme = useTheme();
    const style = {
        textAlign: "center",
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        padding: theme.spacing.small,
        borderRadius: theme.borderRadius.small,
        width: "fit-content",
        border: `solid ${theme.colors.border} 2px`
    }
    return (
        <p style={style} onClick={onClick}>{children}</p>
    )
}