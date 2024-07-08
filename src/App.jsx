

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './Dashboard'


function App() {
  const [sideCollaps, setSideCollaps] = useState(true)

  const toggleSideBar = ()=>{
    setSideCollaps(!sideCollaps)
  }
  return (
    <div className="flex dark:bg-black ">
    <Sidebar sideCollaps={sideCollaps} />

    {/* Main Content */}
    <div className="flex flex-col flex-1">
      {/* Header */}
      <Header toggleSideBar={toggleSideBar}/>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <Dashboard/>
      </main>
    </div>
  </div>
  )
}

export default App
