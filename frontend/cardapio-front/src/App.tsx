import {HomePage} from './Pages/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { UserProvider } from './Contexts/UserContext';
import { CategoryProvider } from './Contexts/CategoryContext';

function App() {
  return (

  <UserProvider>
    <CategoryProvider>
    <ToastContainer></ToastContainer>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </CategoryProvider>
  </UserProvider>
  );
}

export default App;
