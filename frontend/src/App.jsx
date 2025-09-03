import "./App.css";
import { Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import MyBooks from "./pages/MyBooks";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Login from "./components/common/Login";
import Register from "./components/common/Register";

import ProtectedRoute from './components/common/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="mybooks" element={<MyBooks />} />
        <Route path="profile" element={<Profile />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
