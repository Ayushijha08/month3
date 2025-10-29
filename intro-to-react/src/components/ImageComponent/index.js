import './index.css';

function ImageComponent({ imageLink, breedName }) {
    return (
        <div id="image-component">
            <div className="image-card">
                <img src={imageLink} alt="Placeholder" />
                <h3>This is a {breedName}</h3>
            </div>
        </div>
    )
}

export default ImageComponent;