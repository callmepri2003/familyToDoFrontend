/* eslint-disable react/prop-types */
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useTheme } from "styled-components";

const TaskSurface = ({task}) => {
    const theme = useTheme();
    const styles = {
        backgroundColor: theme.colors.surface,
        color: theme.colors.textSurface,
        width: "100%"
    }

    const taskStyles = {
        margin: theme.spacing.small,
        fontSize: theme.typography.fontSizeLarge,
        textAlign: "center"
    }
    return (
        
        <Row style={styles}>
            <Col xs={12} md={12}>
                <div className="taskSurface">
                    <p className="task" style={taskStyles}>{task}</p>
                </div>
            </Col>
        </Row>
    )
}

export default TaskSurface;