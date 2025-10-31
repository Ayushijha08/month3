import { dogArr } from '../../dummyData/dogData';
import './index.css';

function ImageComponent({ id, imageLink, breedName }) {

    return (
        <div id={`image-component`}>
            <div className="image-card">
                <img src={imageLink} alt="Placeholder" />
                <h3>This is a {breedName}</h3>
                <button id={id} onClick={(e) => console.log(dogArr[id])}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ImageComponent;