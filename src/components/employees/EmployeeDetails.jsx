import "./Employees.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((data) => {
        const employeeObj = data[0]
       setEmployee(employeeObj) 
    })
  }, [employeeId])

  return (
    <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
            <span className="employee-info">Email : </span>
            {employee.user?.email}
        </div>
        <div>
            <span className="employee-info">Address : </span>
            {employee.address}
        </div>
        <div>
            <span className="employee-info">Phone Number : </span>
            {employee.phoneNumber}
        </div>
    </section>
  )
}