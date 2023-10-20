import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h1 className="text-3xl font-extrabold text-blue-400">Tech Pulse</h1>
                    <p className="text-sm opacity-70"> Your Tech, Our Passion.</p>
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <a href="#" className="hover:text-blue-400">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400">Terms of Service</a>
                    <a href="#" className="hover:text-blue-400">Contact Us</a>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-sm opacity-70">Follow us on:</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-blue-400 text-2xl hover:text-blue-600">
                        <AiFillFacebook></AiFillFacebook>
                    </a>
                    <a href="#" className="text-blue-400 text-2xl hover:text-blue-600">
                        <AiFillTwitterCircle></AiFillTwitterCircle>
                    </a>
                    <a href="#" className="text-blue-400 text-2xl hover:text-blue-600">
                        <AiFillInstagram></AiFillInstagram>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;