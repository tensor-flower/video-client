import React from "react";

const video = ({ videoId }) => {
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
                <source
                    src={`http://localhost:8080/videos/${videoId}`}
                    type="video/mp4"
                />
            </video>
        </>
    );
};
export default video;
