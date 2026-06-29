function Header({ onAddUser }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>User Management Dashboard</h2>

      <button
        className="btn btn-success"
        onClick={onAddUser}
      >
        Add User
      </button>
    </div>
  );
}

export default Header;