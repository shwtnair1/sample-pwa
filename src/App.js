import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CacheBuster from "./CacheBuster";
function App() {
  const [state, setState] = useState();

  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }

        return (
          <div className="App">
            <p>hiii2345</p>
            <input type="text" onChange={handleChange} />
          </div>
        );
      }}
    </CacheBuster>
  );
}

export default App;
