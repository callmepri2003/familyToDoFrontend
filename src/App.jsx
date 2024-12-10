import './App.css';
import { theme } from './components/dashboardPage/BaseComponents/theme';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CurrentTask from './components/currentTaskPage/CurrentTask'; // Ensure proper import
import LoginPage from './components/authentication/LoginPage';
import LogoutPage from './components/authentication/LogoutPage';

function App() {

  return (
      <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="task/:id" element={<CurrentTask />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            
          </Routes>
      </ThemeProvider>
  );

  
}

export default App;
