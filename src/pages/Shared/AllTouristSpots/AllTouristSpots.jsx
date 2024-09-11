import { useEffect, useState } from "react";
import AllTouristSpot from "../../../components/AllTouristSpot/AllTouristSpot";

const AllTouristSpots = () => {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/tourist-spot')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpots(data);
            })
    }, [])
    return (
        <div className="container mx-auto flex flex-col items-center mt-2 md:mt-10">
            <h2 className="text-4xl font-semibold text-purple-700 text-center mb-10">Tourists Spots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    spots?.map(touristSpot => <AllTouristSpot
                        key={touristSpot._id}
                        touristSpot={touristSpot}>
                    </AllTouristSpot>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;