import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandPage = () => {

    const products = useLoaderData()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 p-10">
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default BrandPage;