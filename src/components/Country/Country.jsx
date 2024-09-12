import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Country = ({ country }) => {

    const navigate = useNavigate();

    const { image, name, description } = country;

    const handleSpecificSpotOfThisCountry = () => {
        navigate(`/countries/${name}/spots`, { state: { country } });
    }

    return (
        <div>
            <a href="">
                <div onClick={handleSpecificSpotOfThisCountry} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="h-64 w-full"
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body bg-base-200">
                        <h2 className="card-title text-sky-500">{name}</h2>
                        <div className="font-medium space-y-2">
                            <p className="text-gray-600"><span className="font-semibold text-black">About: </span>{description}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Country;