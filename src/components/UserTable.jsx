function UserTable({ users }) {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>

            <td>
              <button className="btn btn-warning btn-sm me-2">
                Edit
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}

export default UserTable;