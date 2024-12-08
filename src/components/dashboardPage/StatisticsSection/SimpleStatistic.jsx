/* eslint-disable react/prop-types */
import { useTheme } from "styled-components";

const SimpleStatistic = ({ amount, text }) => {
    const theme = useTheme();

    const simpleStatisticStyles = {
        padding: theme.spacing.large,
        color: theme.colors.textPrimary,
    };

    const amountStyles = {
        fontSize: theme.typography.fontSizeXLarge,
    };

    const innerContainerStyles = {};

    return (
        <div className="simpleStatistics" style={simpleStatisticStyles}>
            <div className="innerContainer" style={innerContainerStyles}>
                <div className="amount" style={amountStyles}>{amount}</div> {/* Display amount */}
                <div className="text">{text}</div>
            </div>
        </div>
    );
};

export default SimpleStatistic;
