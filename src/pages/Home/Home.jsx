import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand";

const Home = () => {

    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="bg-gray-100 p-10">
                <h2 className="text-5xl font-bold text-center my-10">Our <span className="text-blue-500">Brand</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {
                        brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;