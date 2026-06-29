
import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import DeleteModal from "./components/DeleteModal";
import Pagination from "./components/Pagination";

import { getUsers } from "./services/userService";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch users");
    }
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleSaveUser = (userData) => {
    if (selectedUser) {
      const updatedUsers = users.map((user) =>
        user.id === userData.id ? userData : user
      );

      setUsers(updatedUsers);
    } else {
      const newUser = {
        ...userData,
        id: Math.max(...users.map((user) => user.id)) + 1,
      };

      setUsers([...users, newUser]);
    }

    setShowForm(false);
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedUsers = users.filter(
      (user) => user.id !== userToDelete.id
    );

    setUsers(updatedUsers);
    setShowDeleteModal(false);

    if (
      currentPage > 1 &&
      updatedUsers.length <=
        (currentPage - 1) * usersPerPage
    ) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Search by name and email
  const filteredUsers = users.filter(
    (user) =>
      user.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      user.email
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  // Pagination
  const lastUserIndex =
    currentPage * usersPerPage;

  const firstUserIndex =
    lastUserIndex - usersPerPage;

  const currentUsers = filteredUsers.slice(
    firstUserIndex,
    lastUserIndex
  );

  const totalPages = Math.ceil(
    filteredUsers.length / usersPerPage
  );

  return (
    <div className="container py-4">
      <Header onAddUser={handleAddUser} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(value) => {
          setSearchTerm(value);
          setCurrentPage(1);
        }}
      />

      <UserTable
        users={currentUsers}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteClick}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      {showForm && (
        <UserForm
          selectedUser={selectedUser}
          onSaveUser={handleSaveUser}
          onCancel={() =>
            setShowForm(false)
          }
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          onDelete={confirmDelete}
          onCancel={() =>
            setShowDeleteModal(false)
          }
        />
      )}
    </div>
  );
}

export default App;
