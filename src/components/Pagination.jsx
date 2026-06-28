function Pagination() {
  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary">
        Previous
      </button>

      <button className="btn btn-primary">
        1
      </button>

      <button className="btn btn-secondary">
        Next
      </button>
    </div>
  );
}

export default Pagination;