import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const TouristSpotCard = ({ spot }) => {
    const navigate = useNavigate();
    const { _id, spotName, country, location, description, cost, seasonality } = spot;

    const handleViewDetails = () => {
        navigate(`/spot-details/${_id}`);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body bg-base-200 rounded-2xl">
                    <h2 className="card-title text-sky-500">{spotName}</h2>
                    <p><strong>Country:</strong> {country}</p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Average Cost:</strong> {cost}</p>
                    <p><strong>Seasonality:</strong> {seasonality}</p>
                    <button onClick={handleViewDetails} className="btn btn-outline btn-info mt-5">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

TouristSpotCard.propTypes = {
    spot: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        spotName: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        seasonality: PropTypes.string.isRequired,
    }).isRequired,
};

export default TouristSpotCard;