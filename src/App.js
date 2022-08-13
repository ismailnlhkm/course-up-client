import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteLogin from "./components/ProtectedRouteLogin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import GetCourse from "./pages/GetCourse";
import MyCourse from "./pages/MyCourse";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRouteLogin>
              <Login />
            </ProtectedRouteLogin>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRouteLogin>
              <Register />
            </ProtectedRouteLogin>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/get"
          element={
            <ProtectedRoute>
              <GetCourse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/mycourse"
          element={
            <ProtectedRoute>
              <MyCourse />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
