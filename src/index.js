import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
import "../node_modules/bootstrap/dist/css/bootstrap.css"; 
import "../node_modules/font-awesome/css/font-awesome.min.css"; 
import "./assets/icon/custom-icons/css/custom-icons.css"; 
import "./assets/icon/elegant-icons/style.css"; 
import "./assets/css/normalize.css"; 
import "./assets/css/style.css";   
import "./assets/css/responsive.css";   
 
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
