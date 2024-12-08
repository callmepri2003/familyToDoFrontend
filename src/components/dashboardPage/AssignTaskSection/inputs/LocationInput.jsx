import { useTheme } from "styled-components";
const LocationInput = () => {
    const theme = useTheme();

    const selectBoxStyles = {
        padding: theme.spacing.unit,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.small,
        fontSize: "16px",
        width: "48%",
    };
    return (
     <select style={selectBoxStyles}>
        <option value="">Select Location</option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Gym">Gym</option>
    </select>
    )
}

export default LocationInput;