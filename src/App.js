import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Recent from "./components/Recent";

function App() {
  const backgroundImgs = [
    "detroit.jpg",
    "horizon.jpg",
    "los_santos.jpg",
    "midgard.jpg",
    "skyrim.png",
  ];
  return (
    <main
      className="wrapper"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(images/backgrounds/" +
          backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)] +
          ")",
      }}
    >
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
