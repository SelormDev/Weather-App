import "./index.css";

function DailyForecastCard({ day, weatherIcon, maxTemp, minTemp }) {
  return (
    <div className="daily-forecast-card">
      <span className="day text-preset-6">{day}</span>
      <img
        src={weatherIcon}
        alt={`${day} weather icon`}
        className="weather-icon"
      />
      <div className="temperature-range">
        <span className="min-temp text-preset-7">{minTemp}°</span>
        <span className="max-temp text-preset-7">{maxTemp}°</span>
      </div>
    </div>
  );
}
export default DailyForecastCard;
