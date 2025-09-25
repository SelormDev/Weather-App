import UnitsDropdown from "./components/unit-dropdown";
import Logo from "./assets/images/logo.svg";
import SearchIcon from "./assets/images/icon-search.svg";
import SunnyTemperatureIcon from "./assets/images/icon-sunny.webp";
import "./App.css";

/**
 * Root React component that renders a static weather-dashboard UI skeleton.
 *
 * The component returns a JSX fragment containing static labels and layout placeholders
 * for units, temperature, humidity, wind, precipitation, a search prompt, and sections
 * for daily and hourly forecasts. Placeholders (JSX comments) indicate where dynamic
 * values (temperature, humidity, wind, precipitation, forecast data) should be inserted.
 *
 * This component accepts no props and has no internal state or side effects.
 * @return {JSX.Element} The static UI markup for the app shell.
 */
function App() {
  return (
    <>
      <header>
        <img src={Logo} alt="App Logo" className="logo" />
        <UnitsDropdown />
      </header>
      <h1 className="text-preset-2">How's the sky looking today?</h1>
      <form action="" className="search-form text-preset-5-medium">
        <div className="input-container">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            id="city-search"
            placeholder="Search for a place..."
          />
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="weather-info">
        <div className="location-info">
          <span className="city-name text-preset-4">Berlin, Germany</span>
          <span className="date text-preset-6">Tuesday, Aug 5, 2025</span>
        </div>

        <div className="temperature-container">
          <img
            src={SunnyTemperatureIcon}
            alt="Sunny Temperature Icon"
            className="temperature-icon"
          />
          <span className="temperature text-preset-1">23°</span>
        </div>
      </div>
      Daily forecast
      {/* Insert daily forecast for the next 7 days here */}
      Hourly forecast
      {/* Insert hourly forecast for the selected day here */}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/SelormDev">SelormDev</a>.
      </div>
    </>
  );
}

export default App;
