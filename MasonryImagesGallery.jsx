import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";
import './masonryimagesgallery.css'


const MasonryImagesGallery = () => {
    return (
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="1rem">
                    {
                        galleryImages.map((item, index) => (
                            <img 
                            className="masonary__img"
                                key={index} 
                                src={item} 
                                alt="" 
                                style={{ width: "100%", display: "block", borderRadius: "8px" }} 
                            />
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default MasonryImagesGallery;
