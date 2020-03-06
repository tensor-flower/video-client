import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./Home";
import Video from "./Video";
import Upload from "./Upload";
import { Router } from "@reach/router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Router>
        <App path="/">
            <Home path="/" />
            <Upload path="/upload" />
            <Video path="videos/:videoId" />
        </App>
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
