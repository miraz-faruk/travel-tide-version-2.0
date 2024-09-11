import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AllTouristSpots = () => {

    const [spots, setSpots] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const navigate = useNavigate();

    // Fetch all tourist spots from database
    useEffect(() => {
        fetch('http://localhost:5001/tourist-spot')
            .then(res => res.json())
            .then(data => {
                setSpots(data);
            })
    }, []);

    // Handle sorting
    const handleSortChange = e => {
        const order = e.target.value;
        setSortOrder(order);

        const sortedSpots = [...spots].sort((a, b) => {
            if (order === 'asc') {
                return parseInt(a.cost) - parseInt(b.cost);
            } else if (order === 'desc') {
                return parseInt(b.cost) - parseInt(a.cost);
            } else {
                return 0;
            }
        });
        setSpots(sortedSpots);
    };

    // Navigate to spot details page
    const handleViewDetails = (id) => {
        navigate(`/spot-details/${id}`);
    };
    
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold text-purple-600 text-center mb-6">All Tourist Spots</h2>
            <div className="flex justify-end items-center mb-4">
                <label htmlFor="sort" className="mr-2 font-semibold">Sort by Cost:</label>
                <select
                    id="sort"
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="border border-gray-300 rounded p-2"
                >
                    <option value="">Select</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {spots.map(spot => (
                    <div key={spot._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img className="h-64 w-full object-cover" src={spot.image} alt={spot.spotName} />
                        </figure>
                        <div className="card-body bg-base-200">
                            <h2 className="card-title text-sky-500">{spot.spotName}</h2>
                            <p className="text-gray-600"><span className="font-semibold text-black">Average Cost:</span> {spot.cost}</p>
                            <p className="text-gray-600"><span className="font-semibold text-black">Total Visitors Per Year:</span> {spot.visitors}</p>
                            <p className="text-gray-600"><span className="font-semibold text-black">Travel Time:</span> {spot.travelTime}</p>
                            <p className="text-gray-600"><span className="font-semibold text-black">Seasonality:</span> {spot.seasonality}</p>
                            <button
                                onClick={() => handleViewDetails(spot._id)}
                                className="btn btn-outline btn-info mt-4"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpots;