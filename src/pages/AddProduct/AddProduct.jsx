import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const product = { image, name, brand, type, price, description, rating }
        console.log(product);

        fetch('http://localhost:5000/products', {
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
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-11/12 md:w-3/4 bg-white my-10 md:my-20 p-6 md:p-10 rounded-md shadow">
                <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
                <form onSubmit={handleAddProduct}>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Image URL:</label>
                        <input type="text" name="image" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Name:</label>
                        <input type="text" name="name" placeholder="Product Name" className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Brand Name:</label>
                        <select name="brand" className="w-full px-3 py-2 border rounded-lg"
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
                        <input type="text" name="price" placeholder="Price" className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Description:</label>
                        <textarea name="description" placeholder="Short Description" className="w-full px-3 py-2 border rounded-lg" required />
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
                    > Add Product </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;