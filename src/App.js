import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Darkmode from "./components/Darkmode.js";
import Alert from "./components/Alert.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const alertmode = (message, type) => {
    setalert({
      msg: message,
      tpe: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

      alertmode("Dark mode is enabled", "success");
      // document.title = "new title";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      alertmode("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="MyApp"
          about="Darkmode"
          home="Home"
          mode={mode}
          toggle={togglemode}
        />

        <Alert alert={alert} />

        <Routes>
        <Route exact path="/" element={<div className="container">
                <TextForm
                  alertmode={alertmode}
                  heading="Enter your text to analyze"
                  mode={mode}
                />
              </div>} ></Route>

          <Route
            exact
            path="/home"
            element={
              <div className="container">
                <TextForm
                  alertmode={alertmode}
                  heading="Enter your text to analyze"
                  mode={mode}
                />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/darkmode"
            element={<Darkmode mode={mode} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
