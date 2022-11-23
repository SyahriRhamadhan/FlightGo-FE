import Index from "./components/LandingPage/index";
import Login from "./components/Login/login";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
