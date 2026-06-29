
import { useState, useEffect } from "react";

function UserForm({ selectedUser, onSaveUser, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name || "");
      setEmail(selectedUser.email || "");
      setCompany(selectedUser.company?.name || "");
    } else {
      setName("");
      setEmail("");
      setCompany("");
    }
  }, [selectedUser]);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !company.trim()) {
      alert("Please fill all fields");
      return;
    }

    const userData = {
      ...(selectedUser && { id: selectedUser.id }),
      name,
      email,
      company: {
        name: company,
      },
    };

    onSaveUser(userData);
  };

  return (
    <>
      <div className="modal-backdrop show"></div>

      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                {selectedUser ? "Edit User" : "Add User"}
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={onCancel}
              ></button>
            </div>

            <div className="modal-body">

              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />

            </div>

            <div className="modal-footer">

              <button
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>

              <button
                className="btn btn-success"
                onClick={handleSubmit}
              >
                {selectedUser ? "Update User" : "Save User"}
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default UserForm;
