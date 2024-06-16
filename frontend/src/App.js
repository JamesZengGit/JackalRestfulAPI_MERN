import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
// Error when using ToastContainter: Dispatch
// Occur because of auto fix of the packages.
//import { ToastContainer } from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from "./pages/Register"

function App() {
  return (
    <>
    <Router>
    <div className="Container">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
