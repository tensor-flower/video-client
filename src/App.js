import React from "react";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    title: {
        marginRight: theme.spacing(5),
        textDecoration: "none",
        color: "black"
    },
    container: {
        margin: theme.spacing(7)
    }
}));

const App = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Button>
                        <Link to="/" className={classes.title}>
                            Home
                        </Link>
                    </Button>
                    <Button>
                        <Link to="/upload" className={classes.title}>
                            Upload
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default App;
