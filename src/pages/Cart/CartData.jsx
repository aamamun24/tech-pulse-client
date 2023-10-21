import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartData = ({ cart, carts, setCarts }) => {

    const { _id, name, image, type } = cart;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/cart/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your product has been deleted.',
                                    'success'
                                )
                                const remaining = carts.filter(sigleCart => sigleCart._id !== _id)
                                setCarts(remaining)
                            }
                        })
                }
            })
    }


    return (
        <div className="max-w-2xl mx-auto bg-white p-4 shadow-md rounded-lg mb-4 flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="flex items-center">
                <img src={image} alt={name} className="w-16 h-16 object-cover rounded-lg" />
                <div className="ml-4">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-gray-600">{type}</p>
                </div>
            </div>
            <button onClick={() => { handleDelete(_id) }} className="bg-red-600 w-full md:w-auto hover:bg-red-800 text-white py-2 px-4 rounded focus:outline-none">Delete</button>
        </div>
    );
};

CartData.propTypes = {
    cart: PropTypes.object,
    carts: PropTypes.array,
    setCarts: PropTypes.func
};

export default CartData;