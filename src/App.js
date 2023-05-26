import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Codepassword from './pages/Codepassword';
import Forgotpassword from './pages/Forgotpassword';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Warranty from './pages/Warranty';
import InfoCustomer from './pages/Warranty/InfoCustomer';
import ServiceCustomer from './pages/Warranty/ServiceCustomer';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/forgot-password' element={<Forgotpassword />}></Route>
      <Route path='/code-password' element={<Codepassword />}></Route>
      <Route path='/reset-password' element={<Resetpassword />}></Route>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      >
        <Route path='/' element={<Navigate to='/bao-hanh' />} />
        <Route path='/bao-hanh' element={<Warranty />}></Route>
        <Route path='/thong-tin' element={<InfoCustomer />}></Route>
        <Route path='/dich-vu-khach-hang' element={<ServiceCustomer />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
