import {HomePage, ProductPage, EditProductPage , DeleteProductPage} from './Pages/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { UserProvider } from './Contexts/UserContext';
import { CategoryProvider } from './Contexts/CategoryContext';
import { ProductProvider } from './Contexts/ProductContext';


function App() {
  return (

  <UserProvider>
    <CategoryProvider>
    <ProductProvider>
    <ToastContainer></ToastContainer>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/produtos/cadastrar' element={<ProductPage></ProductPage>}></Route>
        <Route path='/produtos/editar' element={<EditProductPage></EditProductPage>}></Route>
        <Route path='/produtos/deletar' element={<DeleteProductPage></DeleteProductPage>}></Route>
      </Routes>
    </Router>
    </ProductProvider>
    </CategoryProvider>
  </UserProvider>
  );
}

export default App;
