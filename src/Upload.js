import React, { Component } from "react";
import { serverUpload } from "./constants/constant";

class upload extends Component {
    state = {
        selectedFile: null
    };

    uploadVideo = async () => {
        const { selectedFile } = this.state;
        if (!selectedFile) return;

        const data = new FormData();
        data.append("file", selectedFile);

        try {
            const res = await fetch(serverUpload, {
                method: "POST",
                body: data
            });
            console.log(res);
        } catch (e) {
            console.error(e);
        }
    };

    render() {
        return (
            <>
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
export default upload;
