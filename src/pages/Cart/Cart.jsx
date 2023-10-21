import { useLoaderData } from "react-router-dom";
import CartData from "./CartData";
import { useState } from "react";

const Cart = () => {
    const loadedCarts = useLoaderData()
    const [carts, setCarts] = useState(loadedCarts)
    return (
        <div className="bg-gray-100 py-10 px-4">
            <h2 className="text-center text-2xl font-bold mb-10">Cart item: {carts.length}</h2>
            <div>
                {
                    carts.map(cart => <CartData
                        key={cart._id}
                        cart={cart}
                        carts={carts}
                        setCarts={setCarts}
                    ></CartData>)
                }
            </div>
        </div>
    );
};

export default Cart;