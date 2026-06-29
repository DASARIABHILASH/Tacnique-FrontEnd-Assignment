
function UserTable({
  users,
  onEditUser,
  onDeleteUser,
}) {
  return (
    <div className="table-responsive">
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
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>

                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  {user.company?.name || "N/A"}
                </td>

                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() =>
                      onEditUser(user)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      onDeleteUser(user)
                    }
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center"
              >
                No users found
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default UserTable;