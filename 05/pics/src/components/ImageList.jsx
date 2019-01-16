import React from 'react';

const ImageList = props => {
    console.log(props);
    const images = props.images.map(({description, id, urls}) => {
        return (
            <div key={id}>
                <img src={urls.regular} alt={description}/>
            </div>
        )
    });

    return (
        <div>
            {images}
        </div>
    );
};

export default ImageList;