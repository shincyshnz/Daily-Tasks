import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [cities, setCities] = useState([]);
  const [disabled, setdisabled] = useState(true);

  const country = [
    {
      name: "India",
      cities: ["Delhi", "Bombay"],
    },
    {
      name: "Pakistan",
      cities: ["Lahore"],
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    setCount((prev) => (prev = prev + 1));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setCities(prev => prev = country[value].cities)
    setdisabled(false);
  };

  return (
    <>
      <div>
        <h1>
          count : <span>{count}</span>
        </h1>
        <button className="button" onClick={handleClick}>
          {" "}
          Increment{" "}
        </button>
        <select id="country" name="country" onChange={handleChange}>
          {country.map((cont, index) => {
            return <option value={index}>{cont.name}</option>;
          })}
        </select>

        {!disabled && (
          <select id="cities" name="cities" disabled={disabled}>
            {cities.map((city, index) => {
              return <option value={index}>{cities[index]}</option>;
            })}
          </select>
        )}
      </div>
    </>
  );
}

export default App;
