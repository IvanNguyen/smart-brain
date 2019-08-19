import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
    const listFaceBox = box.map((box, index) => (
    <div
        key={index}
        className="bounding-box"
        style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
        }}
    />
    ));
    return (
    <div className="center ma">
        <div className="absolute mt2">
        <img
            id="inputImage"
            src={imageUrl}
            alt="your-pic"
            title="your-pic"
            width="500px"
            height="auto"
        />
        {listFaceBox}
        </div>
    </div>
    );
};

export default FaceRecognition;
