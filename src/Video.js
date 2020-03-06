import React from "react";
import { videoServer } from "./constants/constant";

const video = ({ videoId }) => {
    const url = `${videoServer}${videoId}.mp4`;
    return (
        <>
            <h2>{videoId}</h2>
            <video
                id={videoId}
                controls
                preload="auto"
                width="640"
                height="400"
                data-setup="{}"
            >
                <source src={url} type="video/mp4" />
            </video>
        </>
    );
};
export default video;
