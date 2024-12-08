/* eslint-disable react/prop-types */
import { useTheme } from "styled-components";

const Badge = ({children, backgroundColor}) => {
    const theme = useTheme();

    const styles = {
        textAlign: "center",
        width: "100%",
        padding: `${theme.spacing.unit} ${theme.spacing.medium}`,
        margin: `${theme.spacing.unit} 0`,
        borderRadius: `${theme.borderRadius.small}`,
        backgroundColor: backgroundColor,
        color: theme.colors.textPrimary
    }

    
    
    return (
        <div className="flexChild">
            <div className="textContainer" style={styles}>
                <p style={{padding: "0 0", margin:"0 0"}}>{children}</p>
            </div>
        </div>
        
    )
}

export default Badge;