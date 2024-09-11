import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const TouristSpot = ({ touristSpot }) => {

    const navigate = useNavigate();

    const { _id, image, spotName, country, location, description, cost, visitors } = touristSpot;

    const handleViewDetails = () => {
        console.log(_id);
        navigate(`/spot-details/${_id}`, { state: { touristSpot } });
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="h-64 w-full"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-base-200">
                    <h2 className="card-title text-sky-500">{spotName}</h2>
                    <div className="font-medium space-y-2">
                        <p className="text-gray-600"><span className="font-semibold text-black">Country: </span>{country}</p>
                        <p className="text-gray-600"><span className="font-semibold text-black">Location: </span>{location}</p>
                        <p className="text-gray-600"><span className="font-semibold text-black">About: </span>{description}</p>
                        <p className="text-gray-600"><span className="font-semibold text-black">Total visitor per year: </span>{visitors}</p>
                        <p className="text-gray-600"><span className="font-semibold text-black">Cost: $</span>{cost}</p>
                    </div>
                    <button onClick={handleViewDetails} className="btn btn-outline btn-info text-lg mt-5">View Details</button>
                </div>
            </div>
        </div>
    );
};

TouristSpot.propTypes = {
    touristSpot: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        spotName: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        visitors: PropTypes.string.isRequired,
    }).isRequired,
};

export default TouristSpot;