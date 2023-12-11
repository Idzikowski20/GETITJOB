import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ButtonUsage from "./Components/ButtonUsage";
import Navigation from "./Components/Navigation";
import banner from "./images/banner.png";
import Searchbar from "./Components/Searchbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobDetails from "./Components/JobDetails";
import SearchBar from "./Components/Searchbar";
<meta name="viewport" content="initial-scale=1, width=device-width" />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <div className="welcome-center">
          <img className="banner-img" src={banner} alt="banner"></img>
          <h1>
            Witaj na ITJOBhere! - Zaoszczędź czas i znajdź szybko pracę w
            sektorze IT
          </h1>
          <ButtonUsage />
        </div>
        <div className="searchbar">
          <Searchbar />
        </div>
      </header>
      <div className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/job/:jobId" element={<JobDetails />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
