/* eslint-disable react/prop-types */

import { useTheme } from "styled-components";


const FamilyMembersInput = (props) => {
    const theme = useTheme();

    const selectBoxStyles = {
        padding: theme.spacing.unit,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.small,
        fontSize: "16px",
        width: "48%",
    };

    return (
        <select
                        style={selectBoxStyles}
                        value={props.assignedTo}
                        onChange={(e) => props.setAssignedTo(parseInt(e.target.value))}
                    >
                        <option value="">Select Family Member</option>
                        {props.familyMembersOptions.map((member, index) => (
                            <option key={index} value={member.id}>
                                {member.first_name}
                            </option>
                        ))}
                    </select>
    )
}

export default FamilyMembersInput;