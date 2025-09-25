import { useState } from "react";
import settingsIcon from "../../assets/images/icon-units.svg";
import unitDropdownIcon from "../../assets/images/icon-dropdown.svg";
import checkIcon from "../../assets/images/icon-checkmark.svg";
import "./index.css";

function Button({ children, onClick, isSelected }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`unit-button text-preset-7 ${isSelected ? "selected" : ""}`}
    >
      {children}
      {isSelected && (
        <img src={checkIcon} alt="Check Icon" className="check-icon" />
      )}
    </button>
  );
}

function UnitsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [system, setSystem] = useState("metric");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSystemSwitch = () => {
    setSystem((prev) => (prev === "metric" ? "imperial" : "metric"));
    toggleDropdown();
  };

  return (
    <div className="container">
      {/* Main button */}
      <button
        type="button"
        className="button-container text-preset-7"
        onClick={toggleDropdown}
      >
        <img src={settingsIcon} alt="Settings Icon" className="" />
        Units
        <img src={unitDropdownIcon} alt="Dropdown Icon" className="" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="dropdown-container">
          <button
            type="button"
            onClick={handleSystemSwitch}
            className="text-preset-7 switch-button"
          >
            Switch to {system === "metric" ? "Imperial" : "Metric"}
          </button>

          <div className="temperature-section dropdown-container__section">
            <label className="text-preset-8">Temperature</label>
            <div className="unitsOptions__container">
              <Button
                onClick={() => setSystem("imperial")}
                isSelected={system === "imperial"}
              >
                Celsius (°C)
              </Button>
              <Button
                onClick={() => setSystem("metric")}
                isSelected={system === "metric"}
              >
                Fahrenheit (°F)
              </Button>
            </div>
          </div>

          <hr />

          <div className="wind-speed-section dropdown-container__section">
            <label className="text-preset-8">Wind Speed</label>
            <div className="unitsOptions__container">
              <Button
                onClick={() => setSystem("imperial")}
                isSelected={system === "imperial"}
              >
                km/h
              </Button>
              <Button
                onClick={() => setSystem("metric")}
                isSelected={system === "metric"}
              >
                mph
              </Button>
            </div>
          </div>

          <hr />

          <div className="precipitation-section dropdown-container__section">
            <label className="text-preset-8">Precipitation</label>
            <div className="unitsOptions__container">
              <Button
                onClick={() => setSystem("imperial")}
                isSelected={system === "imperial"}
              >
                Millimeters (mm)
              </Button>
              <Button
                onClick={() => setSystem("metric")}
                isSelected={system === "metric"}
              >
                Inches (in)
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UnitsDropdown;
