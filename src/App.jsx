import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { SideNavbar } from './components/SideNavbar'
import { Perfil } from './pages/Perfil'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/SideNavbar" element={<SideNavbar />} />
        <Route path="/Perfil" element={<Perfil />} /> 
      </Routes>
    </Router>
  )
}

export default App
