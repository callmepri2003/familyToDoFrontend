import './App.css';
import { theme } from './components/dashboardPage/BaseComponents/theme';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CurrentTask from './components/currentTaskPage/CurrentTask'; // Ensure proper import

function App() {

  return (
      <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="task/:id" element={<CurrentTask />} />
          </Routes>
      </ThemeProvider>
  );

  
}

export default App;
