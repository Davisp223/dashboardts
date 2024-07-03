import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/user/login';
import IndexPage from './components/index';
import './App.css';

function App() {

  return (
    <MantineProvider>
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />

        {/* UI Dashboard */}

        <Route path="/" element={<IndexPage />} />

      </Routes>
    </Router>
    </MantineProvider>
  );
}

export default App;
