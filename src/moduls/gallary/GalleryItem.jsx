import React from "react";

export const GalleryItem = ({url, onClick}) => {
    const handleClick = () => {
        onClick(url);
    }
    return (
        <div class="col-lg-3 mb-2 pt-4">
            <div class="card shadow-lg p-0 mb-5 bg-body rounded">
                <img
                    src={url} alt="" 
                    onClick={handleClick}
                    className=" card-img-top img-fluid shadow-2-strong mask gallery"
                />
            </div>
        </div>
    )
}