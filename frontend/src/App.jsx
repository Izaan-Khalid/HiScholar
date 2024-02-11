import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Inbox, Profile, Scholarships, Tasks, Volunteering } from './Pages/index';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard  />} />
            <Route path="/inbox" element={<Inbox  />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/tasks" element={<Tasks/>} />
            <Route path="/volunteering" element={<Volunteering/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
