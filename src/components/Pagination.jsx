function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="d-flex justify-content-center gap-2 mt-3">

      <button
        className="btn btn-secondary"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      <span className="btn btn-primary">
        {currentPage}
      </span>

      <button
        className="btn btn-secondary"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;