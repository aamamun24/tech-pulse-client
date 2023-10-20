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
    }
    return (
        <div className="max-w-4xl mx-auto my-20 p-10 rounded-lg bg-base shadow-xl">
            <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium">Image URL:</label>
                    <input type="text" name="image" className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium">Name:</label>
                    <input type="text" name="name" className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium">Brand Name:</label>
                    <select name="brand" className="w-full px-3 py-2 border rounded-lg"
                    >
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                        <option value="google">Google</option>
                        <option value="lenovo">Lenovo</option>
                        <option value="Sony">Sony</option>
                        <option value="Walton">Walton</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium">Type:</label>
                    <select name="type" className="w-full px-3 py-2 border rounded-lg">
                        <option value="phone">Phone</option>
                        <option value="laptop">Laptop</option>
                        <option value="computer">Computer</option>
                        <option value="headphone">Headphone</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium">Price:</label>
                    <input type="text" name="price" className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium">Description:</label>
                    <textarea name="description"
                        className="w-full px-3 py-2 border rounded-lg"
                    />
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
    );
};

export default AddProduct;