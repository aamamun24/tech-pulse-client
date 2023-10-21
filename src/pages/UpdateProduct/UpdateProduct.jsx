import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id, name, image, brand, price, description } = product;

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedProduct = { image, name, brand, type, price, description, rating }
        console.log(updatedProduct);

        fetch(`https://tech-pulse-server.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-11/12 md:w-3/4 bg-white my-10 md:my-20 p-6 md:p-10 rounded-md shadow">
                <h1 className="text-2xl font-semibold mb-4">Update Product</h1>
                <form onSubmit={handleUpdateProduct}>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Image URL:</label>
                        <input type="text" name="image" defaultValue={image} placeholder="Photo URL" className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Name:</label>
                        <input type="text" defaultValue={name} name="name" placeholder="Product Name" className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Brand Name:</label>
                        <select name="brand" defaultValue={brand} className="w-full px-3 py-2 border rounded-lg"
                        >
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Google">Google</option>
                            <option value="Lenovo">Lenovo</option>
                            <option value="Sony">Sony</option>
                            <option value="Walton">Walton</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Type:</label>
                        <select name="type" className="w-full px-3 py-2 border rounded-lg">
                            <option value="Phone">Phone</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Computer">Computer</option>
                            <option value="Headphone">Headphone</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Price:</label>
                        <input type="text" defaultValue={price} name="price" placeholder="Price" className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Description:</label>
                        <textarea name="description" defaultValue={description} placeholder="Short Description" className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Rating:</label>
                        <select name="rating" className="w-full px-3 py-2 border rounded-lg"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
                    > Update Product </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;