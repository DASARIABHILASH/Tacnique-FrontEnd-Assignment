function SearchBar({
  searchTerm,
  setSearchTerm
}) {
  return (
    <div className="position-relative mb-3">

      <input
        type="text"
        className="form-control pe-5"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      {searchTerm && (
        <button
          type="button"
          className="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2 border-0 bg-transparent"
          onClick={() => setSearchTerm("")}
        >
          ✕
        </button>
      )}

    </div>
  );
}

export default SearchBar;