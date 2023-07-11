
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div id="app">
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default App
