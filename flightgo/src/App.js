import Index from "./components/LandingPage/index";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from "./pages/AuthPage/RegisterPage";
import LoginPage from "./pages/AuthPage/LoginPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
