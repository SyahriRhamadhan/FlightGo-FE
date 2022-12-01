<<<<<<< HEAD
import { HashRouter, Route, Routes, } from 'react-router-dom'
=======
import Landing from './pages/LandingPage/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
>>>>>>> c38ae96ad483f1ef22d7e586dd41bfbe6d1fce69
import RegisterPage from "./pages/AuthPage/RegisterPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import React, { Suspense } from 'react'
import './scss/style.scss'
function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))


  return (
    <>
      {/* {
        route.pathname === '/admin'
        ? <Sidebar/> 
        : route.pathname === '/ticketschedule' ? <Sidebar />
        : route.pathname === '/listorder' ? <Sidebar />
        : ''
        
      } */}
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='*' element={<DefaultLayout/>}/>
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
