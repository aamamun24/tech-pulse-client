import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const { id } = useParams()
    const products = useLoaderData()
    const product = products.find(product => product._id == id)
    const { _id, name, image, brand, type, price, description, rating } = product;

    const handleAddToCart = () => {
        fetch('https://tech-pulse-server.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added on cart',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="bg-gray-100 py-20">
            <div className="w-10/12 md:w-96 rounded-lg overflow-hidden shadow-lg mx-auto">
                <img src={image} alt={name} className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-semibold text-xl text-gray-800 mb-2">{name}</div>
                    <p className="text-gray-600">Brand: {brand}</p>
                    <p className="text-gray-600">Type: {type}</p>
                    <p className="text-gray-600">Price: ${price}</p>
                    <p className="text-gray-600">Rating: {rating}/5</p>
                    <p className="text-gray-800 mt-4">{description}</p>
                </div>
                <div className="px-6 py-4">
                    <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;