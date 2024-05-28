import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { Authorized } from "./views/Authorized.jsx";
import { ApplicationViews } from "./views/ApplicationViews.jsx";

export const App = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
          //check if the user is authorized first
          <Authorized>
            {/*ApplicationViews is the child component of Authorized */}
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
