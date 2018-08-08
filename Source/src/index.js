// import React from "react"
// import ReactDOM from "react-dom"
// import registerServiceWorker from "./registerServiceWorker"



//uikit
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons";
import UIkit from "uikit";

// styles
import "./index.scss";


//map
// import "mapbox-gl/dist/mapbox-gl.css";


//Icons
UIkit.use(Icons);

window.onload = function() {
  document.body.className = "loaded";
};
