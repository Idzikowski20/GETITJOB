import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ButtonUsage from "./Components/ButtonUsage";
import Navigation from "./Components/Navigation";
import banner from "./images/banner.png";
import JobCards from "./Components/JobCards";
<meta name="viewport" content="initial-scale=1, width=device-width" />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <div className="welcome-center">
          <img className="banner-img" src={banner} alt="banner"></img>
          <h1>Welcome in ITJOBHERE - Save time and get hire today!</h1>
          <ButtonUsage />
        </div>
      </header>
      <div className="jobcards-header">
        <JobCards />
      </div>
    </div>
  );
}

export default App;
