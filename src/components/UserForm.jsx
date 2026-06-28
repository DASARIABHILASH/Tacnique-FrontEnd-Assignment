function UserForm() {
  return (
    <div className="card p-3 mt-4">
      <h4>Add User</h4>

      <input
        type="text"
        placeholder="Enter Name"
        className="form-control mb-3"
      />

      <input
        type="email"
        placeholder="Enter Email"
        className="form-control mb-3"
      />

      <input
        type="text"
        placeholder="Enter Company Name"
        className="form-control mb-3"
      />

      <button className="btn btn-success">
        Save User
      </button>
    </div>
  );
}

export default UserForm;