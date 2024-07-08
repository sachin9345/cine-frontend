import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './Components/route/ProtectedRoute';
import Login from './admin/Newadmin/login/Login';
import MovieList from './admin/Newadmin/MovieList';
import Layout from './admin/Newadmin/adminlayout/adminlayout';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';
import Homeindex from './Components/Homeindex';
import ContactUs from './Components/ContactUs/ContactUS';
import Private from './Components/private/private';
import Movies from './Components/movies';

function AppContent() {
  const location = useLocation();
  const excludeNavbarPaths = ['/login', '/admin/dashboard'];

  return (
    <div>
      {!excludeNavbarPaths.includes(location.pathname) && <Navbar />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homeindex />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/private" element={<Private/>} />



        <Route path="/login" element={
           <div className="admin-dashboard-background">
            <Login />
           </div>
       
        } />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute isAdmin={true}>
             <div className="admin-dashboard-background">
                <Layout>
                  <MovieList />
                </Layout>
              </div>
            </ProtectedRoute>
          } 
        />
        </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
