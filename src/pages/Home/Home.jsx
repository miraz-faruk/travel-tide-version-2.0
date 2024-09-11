import { Link } from "react-router-dom";
import Slider from "../Shared/Slider/Slider";
import AllTouristSpots from "../Shared/AllTouristSpots/AllTouristSpots";

const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
            <Slider></Slider>
            <AllTouristSpots></AllTouristSpots>
            {/* Magic page button */}
            <div className="flex justify-center mt-10">
                <Link to="/magic-page">
                    <button className="btn btn-outline btn-error">Click here to see the magic</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;