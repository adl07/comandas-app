import { useCallback, useEffect } from "react";
import "./App.css";
import { GetAllRoles } from "./services/allRoles";
import { GetAllUsers } from "./services/allUsers";
import { GetAllOrders } from "./services/allOrders";

function App() {
  const getRoles = useCallback(() => {
    GetAllRoles();
  }, []);

  const getUsers = useCallback(() => {
    GetAllUsers();
  }, []);

  const getOrders = useCallback(async () => {
    const allOrdersResult = await GetAllOrders();
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="back-office-home">
      <button onClick={getOrders}>Ordenes</button>
      <button onClick={getRoles}>Roles</button>
      <button onClick={getUsers}>Users</button>
    </div>
  );
}

export default App;
