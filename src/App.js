import React from "react";
import { Link } from "@reach/router";

const App = ({ children }) => (
    <>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        {children}
    </>
);

export default App;
