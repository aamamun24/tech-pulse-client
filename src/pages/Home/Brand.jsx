import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { id, name, image } = brand;

    return (
        <Link to={`${id}`}>
            <div className='h-min lg:h-48 flex flex-col justify-center items-center p-6 border-2 hover:shadow-md'>
                <img className='w-24 flex-grow' src={image} alt="" />
                <h2 className='text-2xl font-bold mt-6'>{name}</h2>
            </div>
        </Link >
    );
};

Brand.propTypes = {
    brand: PropTypes.object
};

export default Brand;