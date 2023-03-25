import React, { useEffect, useState } from "react";
import { getEstimate } from "../api/api";

interface ApiResponse {
  data: string[];
}

export default function EstimatorPage(): any {
  const [response, setResponse] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEstimate();
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setResponse(data);
        } else {
          console.log("Error fetching data: ", response.statusText);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <p>Response: {response ? JSON.stringify(response) : "Loading..."}</p>
    </div>
  );
}
