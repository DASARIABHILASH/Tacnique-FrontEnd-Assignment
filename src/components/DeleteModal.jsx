function DeleteModal() {
  return (
    <div className="card p-3 mt-3">
      <h5>Are you sure you want to delete this user?</h5>

      <div className="mt-3">
        <button className="btn btn-danger me-2">
          Yes Delete
        </button>

        <button className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;