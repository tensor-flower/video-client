import React from "react";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import amber from "@material-ui/core/colors/amber";
import { loginUrl } from "./constants/constant";

const useStyles = makeStyles(theme => ({
    title: {
        textDecoration: "none",
        color: "black"
    },
    grow: {
        flexGrow: 1
    },
    container: {
        margin: theme.spacing(7)
    },
    button: {
        marginRight: theme.spacing(5),
        "&:hover": {
            backgroundColor: amber[300]
        }
    }
}));

const App = ({ children }) => {
    const classes = useStyles();

    const login = () => {
        window.location.href = loginUrl;
    };

    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <div className={classes.grow}>
                        <Link to="/" className={classes.title}>
                            <Button className={classes.button}>Home</Button>
                        </Link>
                        <Link to="/upload" className={classes.title}>
                            <Button className={classes.button}>Upload</Button>
                        </Link>
                    </div>
                    <Button onClick={login} className={classes.button}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default App;
