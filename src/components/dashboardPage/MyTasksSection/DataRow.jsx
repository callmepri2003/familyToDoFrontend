import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CompletedBadge from "../BaseComponents/StatusBadges/CompletedBadge";
import PendingBadge from "../BaseComponents/StatusBadges/PendingBadge";
import AcceptedBadge from "../BaseComponents/StatusBadges/AcceptedBadge";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
const DataRow = ({ elements, taskId }) => {
    const theme = useTheme();

    const navigate = useNavigate();

    const badge = () => {
        switch (elements[2].toUpperCase()) {
            case "PE":
                return <PendingBadge />;
            case "CO":
                return <CompletedBadge />;
            case "AC":
                return <AcceptedBadge />;
            default:
                return null; // Handle unexpected status
        }
    };

    const styles = {
        alignSelf: "center",
        color: `${theme.colors.textSecondary}`,
        

    };

    const taskStyles = {
        fontSize: `${theme.typography.fontSizeLarge}`,
        color: `${theme.colors.textSurface}`,
        border: `solid ${theme.colors.border} 1px`,
        borderRadius: theme.borderRadius.small,
        padding: `${theme.spacing.unit} ${theme.spacing.small}`,
        backgroundColor: theme.colors.surface,


    }

    return (
        <Row onClick={() => navigate(`task/${taskId}`)}>
            <Col md={4} style={styles} className="task-item">
                <div style={taskStyles}>{elements[0]}</div>
            </Col>
            <Col xs={6} md={4} style={styles}>
                {elements[1]}
            </Col>
            <Col xs={6} md={4} style={styles}>
                {badge()}
            </Col>
        </Row>
    );
};

export default DataRow;
