import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb'; // Import Breadcrumb
import OptionsSection from './TaskOptions/OptionsSection';
import TaskSurface from './TaskOptions/TaskSurface';
import PendingBadge from '../dashboardPage/BaseComponents/StatusBadges/PendingBadge';
import AcceptedBadge from '../dashboardPage/BaseComponents/StatusBadges/AcceptedBadge';
import RejectedBadge from '../dashboardPage/BaseComponents/StatusBadges/RejectedBadge';
import CompletedBadge from '../dashboardPage/BaseComponents/StatusBadges/CompletedBadge';
import { useTheme } from 'styled-components';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import { useEffect, useState } from 'react';
import { getTasks } from '../../backendInterface/api';

const CurrentTask = () => {
    const theme = useTheme();
    const { id } = useParams();
    const [taskString, setTask] = useState("");
    const [statusBadge, setStatusBadge] = useState(null);
    const [taskId, setTaskId] = useState(-1);

    const innerContainerStyles = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    const flexChildStyles = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadius.medium,
    };

    const badgeComponents = {
        PE: <PendingBadge />,
        AC: <AcceptedBadge />,
        RE: <RejectedBadge />,
        CO: <CompletedBadge />,
    };

    useEffect(() => {
        const asyncOperations = async () => {
            let task = "";
            await getTasks()
                .then((response) => {
                    task = response.find((task) => task.id == id);
                    setTask(task.title);
                    setStatusBadge(badgeComponents[task.status]);
                    setTaskId(task.id);
                })
                .catch((error) => {
                    console.error("Failed to fetch tasks:", error);
                });
        };

        asyncOperations();
    }, [id]);

    const BreadcrumbStyles = { 
        color: theme.colors.textPrimary, // Use theme color for text
        textDecoration: "none"
    };
    
    return (
        <Container fluid style={{ margin: "0 0", padding: "0 0" }}>
            {/* Breadcrumb Section */}
            <Breadcrumb style={{margin: "20px"}}>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                    <div style={BreadcrumbStyles}>Dashboard</div>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Current Task</Breadcrumb.Item>
            </Breadcrumb>
            {/* Main Content */}
            <div className="innerContainer" style={innerContainerStyles}>
                <div className="flexChild" style={flexChildStyles}>
                    <TaskSurface task={taskString} />
                    {statusBadge}
                    <OptionsSection taskId={taskId} />
                </div>
            </div>
        </Container>
    );
    
};

export default CurrentTask;
