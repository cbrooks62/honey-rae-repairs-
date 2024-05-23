import { useState, useEffect } from "react";
import { getStaffUsers } from "../../services/userService.jsx";
import { User } from "../../users/User.jsx";
import "./Employees.css"

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
          <User user={employeeObj} />
        );
      })}
    </div>
  );
}