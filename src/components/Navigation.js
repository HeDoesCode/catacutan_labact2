function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg pt-3 p-2">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav align-items-center justify-content-center">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Gmail
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Images
              </a>
            </li>
            <li>
              <i className="bi bi-list"></i>
            </li>
            <li>
              <img
                src="images/profile.png"
                className="rounded-circle"
                style={{ width: "2rem" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
