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
      Units Switch to Imperial/Metric Temperature Celsius (°C) Fahrenheit (°F)
      Wind Speed km/h mph Precipitation Millimeters (mm) Inches (in) How's the
      sky looking today? Search for a city, e.g., New York Search Feels like
      {/* Insert temperature here */}
      Humidity
      {/* Insert humidity here */}
      Wind
      {/* Insert wind here */}
      Precipitation
      {/* Insert precipitation here */}
      Daily forecast
      {/* Insert daily forecast for the next 7 days here */}
      Hourly forecast
      {/* Insert hourly forecast for the selected day here */}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">SelormDev</a>.
      </div>
    </>
  );
}

export default App;
