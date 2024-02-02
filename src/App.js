import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Recent from "./components/Recent";

function App() {
  return (
    <main className="wrapper">
      <Navigation />
      <div className="body">
        <img src="images/logo.png" className="mb-4" style={{ width: "20%" }} />
        <Search />
        <Recent />
      </div>
    </main>
  );
}

export default App;
