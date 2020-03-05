import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
    state = {
        videos: [],
        selectedFile: null
    };

    async componentDidMount() {
        try {
            const res = await fetch("https://fierce-lake-35299.herokuapp.com/");
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                this.setState({ videos: data });
            }
        } catch (e) {
            console.error(e);
        }
    }

    uploadVideo = async () => {
        const { selectedFile } = this.state;
        if (!selectedFile) return;

        const data = new FormData();
        data.append("file", selectedFile);

        try {
            const res = await fetch(
                "https://fierce-lake-35299.herokuapp.com/upload",
                {
                    method: "POST",
                    body: data
                }
            );
            console.log(res);
        } catch (e) {
            console.error(e);
        }
    };

    render() {
        const { videos } = this.state;
        return (
            <>
                {!videos.length ? (
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
                <input
                    type="file"
                    name="file"
                    onChange={e => {
                        this.setState({ selectedFile: e.target.files[0] });
                    }}
                />
                <button type="button" onClick={this.uploadVideo}>
                    Upload
                </button>
            </>
        );
    }
}

export default Home;
