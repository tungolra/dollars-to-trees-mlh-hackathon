import React, { useState } from "react";
import { Range } from "react-range";

interface SliderProps {
  setMoney: (money: number) => void;
}

export default function Slider({ setMoney }: SliderProps) {
  const [value, setValue] = useState([0]);

  const handleChange = (newValue: number[]) => {
    setValue(newValue);
    setMoney(value[0]);
  };

  return (
    <div>
      <Range
        values={value}
        step={100}
        min={0}
        max={10000}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
              borderRadius: "4px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "25px",
              width: "25px",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 6px #AAA",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // animation: `${isDragged ? "" : "pulse"} 1s infinite`
              // add pulse animation
            }}
          >
            <div
              style={{
                height: "8px",
                width: "8px",
                backgroundColor: `${isDragged ? "#CCC" : "#008000"}`,
                borderRadius: "50%",
                animation: `${isDragged ? "" : "pulse"} 1s infinite`,
              }}
            ></div>
          </div>
        )}
      />
      
      <p
        className="bg-success mx-auto text-white font-bold"
        style={{
          marginTop: "3vmin",
          width: "50%",
          padding: "10px",
          fontSize: "1.5rem",
          borderRadius: "10px",
          opacity: "0.8",
        }}
      >{`$${value[0]}`}</p>
    </div>
  );
}
