import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService.jsx";
import { User } from "../../users/User.jsx";
import { Link } from "react-router-dom";
import "./Customers.css";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return (
          <Link to={`/customers/${customerObj.id}`}>
            <User key={customerObj.id} user={customerObj} />
          </Link>
        );
      })}
    </div>
  );
};
