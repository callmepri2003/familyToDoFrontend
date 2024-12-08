import { useTheme } from "styled-components";
/* eslint-disable react/prop-types */
const Heading1 = ({children}) => {
    const theme = useTheme();
    const styles = {
        fontSize: theme.typography.fontSizeXLarge,
        color: theme.colors.textPrimary,
        textAlign: "left"
    }
    
    return (
        <p style={styles}>{children}</p>
    )
}

export default Heading1;