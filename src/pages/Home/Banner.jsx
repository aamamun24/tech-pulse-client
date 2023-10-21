import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="banner h-[60vh] flex flex-col justify-center items-center bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="text-center relative z-10">
                <h1 className="text-4xl text-white font-extrabold leading-tight mb-4">Discover Tech Pulse</h1>
                <p className="text-lg max-w-xl text-white leading-relaxed mb-8">Experience the future with Tech Pulse. Explore groundbreaking technology solutions that redefine the way you live, work, and play.</p>
                <a href="/learn-more" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default Banner;