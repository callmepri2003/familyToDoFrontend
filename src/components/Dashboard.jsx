import Container from 'react-bootstrap/Container';
import StatisticsContainer from './dashboardPage/StatisticsSection/StatisticsContainer';
import SimpleStatistic from './dashboardPage/StatisticsSection/SimpleStatistic';
import MyTasksContainer from './dashboardPage/MyTasksSection/MyTasksContainer';
import AssignTaskContainer from './dashboardPage/AssignTaskSection/AssignTaskContainer';
import { useEffect, useState } from 'react';
import { updateDashboard } from './dashboardPage/dashboardRequests';

const Dashboard = () => {

  let [remainingTasks, setRemainingTasks] = useState([]);
  let [pendingTasks, setPendingTasks] = useState([]);
  // let [tasksToshow, setTasksToShow] = useState([])
  useEffect(()=>{
    updateDashboard({setRemainingTasks, setPendingTasks});
  }, [])

  return (
    <Container fluid style={{margin: "0 0", padding: "0 0"}}>
        <StatisticsContainer>
          <SimpleStatistic amount={remainingTasks.length} text={"remaining"}></SimpleStatistic>
          <SimpleStatistic amount={pendingTasks.length} text={"pending"}></SimpleStatistic>
        </StatisticsContainer>
        <MyTasksContainer tasks={remainingTasks.concat(pendingTasks)}>
        </MyTasksContainer>
        <AssignTaskContainer></AssignTaskContainer>

    </Container>
    )
}

export default Dashboard;