import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="App">
      <h1>APP</h1>
    </div>
  );
}
