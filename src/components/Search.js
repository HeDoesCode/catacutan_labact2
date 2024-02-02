function Search() {
  return (
    <div className="input-group search mb-4">
      <span className="input-group-text rounded-start-pill">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Search Google or type a URL"
      />
      <span className="input-group-append">
        <button className="btn rounded-0" type="button">
          <i className="bi bi-mic"></i>
        </button>
        <button className="btn rounded-end-pill" type="button">
          <i className="bi bi-camera"></i>
        </button>
      </span>
    </div>
  );
}

export default Search;
