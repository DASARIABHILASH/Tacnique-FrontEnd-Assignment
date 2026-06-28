import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";

import { getUsers } from "./services/userService";


function App() {

  // Store all users
  const [users, setUsers] = useState([]);

  // Loading message
  const [loading, setLoading] = useState(true);

  // Runs once when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // Get users from API
  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">

      <Header />

      <SearchBar />

      {
        loading
          ? <h4>Loading Users...</h4>
          : <UserTable users={users} />
      }

      <Pagination />

    </div>
  );
}
export default App;