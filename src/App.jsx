import UnitsDropdown from "./components/unit-dropdown";
import Logo from "./assets/images/logo.svg";
import SearchIcon from "./assets/images/icon-search.svg";
import SunnyTemperatureIcon from "./assets/images/icon-sunny.webp";
import "./App.css";
import WeatherVariable from "./components/weather-variable";
import DailyForecastCard from "./components/daily_forcast_card";

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
          <span className="temperature text-preset-1">20°</span>
        </div>
      </div>
      <div className="weather-variables">
        <WeatherVariable label="Feels like" value="18°" />
        <WeatherVariable label="Humidity" value="46%" />
        <WeatherVariable label="Wind" value="14 km/h" />
        <WeatherVariable label="Precipitation" value="0 mm" />
      </div>
      <div className="daily-forecast-container">
        <h2 className="text-preset-5">Daily forecast</h2>
        <div className="daily-forecast">
          <DailyForecastCard
            day="Wed"
            weatherIcon={SunnyTemperatureIcon}
            maxTemp={22}
            minTemp={16}
          />
          <DailyForecastCard
            day="Thu"
            weatherIcon={SunnyTemperatureIcon}
            maxTemp={24}
            minTemp={18}
          />
          <DailyForecastCard
            day="Fri"
            weatherIcon={SunnyTemperatureIcon}
            maxTemp={21}
            minTemp={15}
          />
          <DailyForecastCard
            day="Sat"
            weatherIcon={SunnyTemperatureIcon}
            maxTemp={23}
            minTemp={17}
          />
          <DailyForecastCard
            day="Sun"
            weatherIcon={SunnyTemperatureIcon}
            maxTemp={25}
            minTemp={19}
          />
          <DailyForecastCard
            day="Mon"
            weatherIcon={SunnyTemperatureIcon}
            maxTemp={20}
            minTemp={14}
          />
          <DailyForecastCard
            day="Tue"
            weatherIcon={SunnyTemperatureIcon}
            maxTemp={22}
            minTemp={16}
          />
        </div>
      </div>
      {/* Insert daily forecast for the next 7 days here */}
      <h2 className="text-preset-5">Hourly forecast</h2>
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
