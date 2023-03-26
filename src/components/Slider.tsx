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
    // Call your fetch function here with the updated value
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
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 6px #AAA",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "8px",
                width: "8px",
                backgroundColor: "#CCC",
                borderRadius: "50%",
              }}
            ></div>
          </div>
        )}
      />
      <p>{`$${value[0]}`}</p>
    </div>
  );
}