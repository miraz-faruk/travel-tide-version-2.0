import { useEffect, useState } from "react";
import TouristSpot from "../../../components/TouristSpot/TouristSpot";
import { useNavigate } from "react-router-dom";

const TouristSpots = () => {

    const [spots, setSpots] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5001/tourist-spot')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpots(data);
            })
    }, []);

    const handleSeeAll = () => {
        navigate('/all-tourist-spots')
    };

    return (
        <div className="container mx-auto flex flex-col items-center mt-2 md:mt-10">
            <h2 className="text-4xl font-semibold text-purple-700 text-center mb-10">Tourist Spots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {spots.slice(0, 6).map(touristSpot => (
                    <TouristSpot
                        key={touristSpot._id}
                        touristSpot={touristSpot}>
                    </TouristSpot>
                ))}
            </div>

            {/* Show the button if there are more than 6 spots in the section */}
            {spots.length > 6 && (
                <button
                    onClick={handleSeeAll}
                    className="btn btn-primary mt-5">
                    See All Tourist Spots
                </button>
            )}
        </div>
    );
};

export default TouristSpots;