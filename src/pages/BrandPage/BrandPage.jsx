import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';

const BrandPage = () => {

    const products = useLoaderData()

    return (
        <div>
            <div className="carousel h-[70vh] w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-10">
                <h2 className="text-5xl font-bold text-center text-blue-500 my-10">Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandPage;