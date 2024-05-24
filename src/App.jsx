import "./App.css";
import { Welcome } from "./components/welcome/Welcome.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { CustomerList } from "./components/customers/CustomerList.jsx";
import { CustomerDetails } from "./components/customers/CustomerDetails.jsx";
import { EmployeeList } from "./components/employees/EmployeeList.jsx";
import { NavBar } from "./components/nav/NavBar.jsx";
import { Routes, Route, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path =":customerId" element={<CustomerDetails />} /> 
        </Route>

      </Route>
    </Routes>
  );
};
