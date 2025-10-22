import "./index.css";

function HourlyForecastCard({ day, times, weatherIcon, temperature }) {
  return (
    <div className="hourly-forecast-container">
      <div className="hourly-forecast-header">
        <h2 className="text-preset-5">Hourly forecast</h2>
        <span className="day text-preset-6">{day}</span>
      </div>
      {times.map((time, index) => (
        <div key={index} className="hourly-weather-card">
          <span className="time text-preset-6">{time}</span>
          <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />
          <span className="temperature text-preset-6">{temperature}°C</span>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecastCard;
