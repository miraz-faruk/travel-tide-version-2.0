import { Link } from "react-router-dom";
import ThemeChange from "../../components/ThemeChange/ThemeChange";

const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
            <ThemeChange></ThemeChange>
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