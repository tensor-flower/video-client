import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
    state = {
        videos: []
    };

    async componentDidMount() {
        try {
            const res = await fetch("http://localhost:8080/");
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                this.setState({ videos: data });
            }
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        const { videos } = this.state;

        return !videos.length ? (
            <p>No videos</p>
        ) : (
            <ul>
                {videos.map((v, i) => (
                    <li key={i}>
                        <Link to={`videos/${v}`}>{v}</Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Home;
