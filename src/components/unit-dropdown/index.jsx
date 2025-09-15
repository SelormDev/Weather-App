import { useState } from "react";
import settingsIcon from "../../assets/images/icon-units.svg";
import unitDropdownIcon from "../../assets/images/icon-dropdown.svg";
import "./index.css";

function UnitsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [system, setSystem] = useState("metric");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSystemSwitch = () => {
    setSystem((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  return (
    <div className="container">
      {/* Main button */}
      <button
        type="button"
        className="button__container"
        onClick={toggleDropdown}
      >
        <img src={settingsIcon} alt="Settings Icon" className="" />
        Units
        <img src={unitDropdownIcon} alt="Dropdown Icon" className="" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="dropdown__container">
          <button type="button" onClick={handleSystemSwitch} className="">
            Switch to {system === "metric" ? "Imperial" : "Metric"}
          </button>

          <div className="">
            <label className="">Temperature</label>
            <div className="flex gap-2">
              <button className="">Celsius (°C)</button>
              <button className="">Fahrenheit (°F)</button>
            </div>
          </div>

          <div className="">
            <label className="">Wind Speed</label>
            <div className="">
              <button className="">km/h</button>
              <button className="">mph</button>
            </div>
          </div>

          <div className="">
            <label className="">Precipitation</label>
            <div className="">
              <button
                className={`px-2 py-1 rounded ${
                  system === "metric" ? "bg-blue-300" : "bg-gray-100"
                }`}
              >
                Millimeters (mm)
              </button>
              <button
                className={`px-2 py-1 rounded ${
                  system === "imperial" ? "bg-blue-300" : "bg-gray-100"
                }`}
              >
                Inches (in)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UnitsDropdown;
