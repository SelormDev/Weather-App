import "./index.css";

function WeatherVariable({ label, value }) {
  return (
    <div className="weather-variable ">
      <span className="weather-label text-preset-6">{label}</span>
      <span className="weather-value text-preset-3">{value}</span>
    </div>
  );
}
export default WeatherVariable;
