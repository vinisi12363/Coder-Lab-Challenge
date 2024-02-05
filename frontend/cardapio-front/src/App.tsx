import {HomePage} from './Pages/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from "react-toastify";

function App() {
  return (
  <>
    <ToastContainer></ToastContainer>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
