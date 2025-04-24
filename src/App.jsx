import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Students from "./pages/students"
import Teachers from "./pages/Teachers"
import Timetable from "./pages/Timetable"
import Attendance from "./pages/Attendance"
import Assignments from "./pages/Assignments"
import Gradebook from "./pages/Gradebook"
import Calendar from "./pages/Calendar"
import FeeManagement from "./pages/FeeManagement"
import Settings from "./pages/Settings"
import Layout from "./components/Layout"
import { ThemeProvider } from "./context/ThemeContext"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/gradebook" element={<Gradebook />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/fees" element={<FeeManagement />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
