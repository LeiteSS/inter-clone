import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Extrato from '../pages/Extrato';
import Pix from '../pages/Pix';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/pix" element={<Pix />}/>
        <Route path="/extrato" element={<Extrato />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router