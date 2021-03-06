import React from "react";
import ImageCard from "./ImageCard"
import "../css/ImageList.css"

const ImageList = (props) => {

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="imageList">{images}</div>;
};

export default ImageList;