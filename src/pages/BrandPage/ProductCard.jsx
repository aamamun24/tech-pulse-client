import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, image, brand, type, price, description, rating } = product;

    return (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <img className="w-full h-96" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p>Brand: {brand}</p>
                <p>Type: {type}</p>
                <p>Price: ${price}</p>
                <p>Rating: {rating}/5</p>
            </div>
            <div className="px-6 py-4">
                <Link to={`${_id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Details</button>
                </Link>
                <Link to={`/update-product/${_id}`}>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</button>
                </Link>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;