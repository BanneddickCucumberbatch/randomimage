import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./app.css";
import { useState } from "react";

library.add(fab, far, fas);

const App = () => {
  const [icon, setIcon] = useState("0");
  const getRandomIconName = () => {
    const iconsList = Object.entries(fas);
    iconsList.concat(Object.entries(far), Object.entries(fab));
    const iconIndex = Math.floor(Math.random() * iconsList.length);
    setIcon(iconsList[iconIndex][1].iconName);
  };

  let timeoutId = undefined;

  const cancel = () => clearTimeout(timeoutId);
  const clickHandler = () => {
    if (typeof timeoutId === "number") {
      cancel();
    }
    timeoutId = setTimeout(() => {
      getRandomIconName();
    }, 3000);
  };

  return (
    <div className="container d-flex" style={{transition: "all 0.2s ease-in" }}>
      <FontAwesomeIcon className="faIcon" icon={icon}  />
      <button className="button" onClick={() => clickHandler()}>
        Random Icon
      </button>
    </div>
  );
};

export default App;
