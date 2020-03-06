import React, { Component } from "react";
import { Link } from "@reach/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { server } from "./constants/constant";

class Home extends Component {
    state = {
        videos: [],
        loading: true
    };

    async componentDidMount() {
        try {
            const res = await fetch(server);
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                this.setState({ videos: data });
            }
        } catch (e) {
            console.error(e);
        }
        this.setState({ loading: false });
    }

    render() {
        const { videos, loading } = this.state;
        return (
            <>
                {loading ? (
                    <CircularProgress />
                ) : !videos.length ? (
                    <p>No videos</p>
                ) : (
                    <ul>
                        {videos.map((v, i) => (
                            <li key={i}>
                                <Link to={`videos/${v}`}>{v}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
    }
}

export default Home;
