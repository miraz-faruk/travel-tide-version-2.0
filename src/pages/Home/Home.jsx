import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2 className="text-3xl">This is home</h2>
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