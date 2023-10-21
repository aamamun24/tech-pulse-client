import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand";

const Home = () => {

    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 bg-gray-100 p-10">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Home;