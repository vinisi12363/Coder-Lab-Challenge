import {HomePage} from './Pages/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { UserProvider } from './Contexts/UserContext';

function App() {
  return (
  <UserProvider>
    <ToastContainer></ToastContainer>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </UserProvider>
  );
}

export default App;
