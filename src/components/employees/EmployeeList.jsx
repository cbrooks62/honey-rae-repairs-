import { useState, useEffect } from "react";
import { getStaffUsers } from "../../services/userService.jsx";
import { User } from "../../users/User.jsx";
import { Link } from "react-router-dom";
import "./Employees.css";

export const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployee(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employee.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
            <User user={employeeObj} key={employeeObj.id} />
          </Link>
        )
      })}
    </div>
  )
};
