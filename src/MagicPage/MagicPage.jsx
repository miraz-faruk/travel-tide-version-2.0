import { Link } from "react-router-dom";

const MagicPage = () => {
    return (
        <div>
            <h2 className="text4xl text-red-600 mb-5">Oops!!! 404, Page not found</h2>
            <Link to="/">
                <button className="btn btn-outline btn-error">Back to Home</button>
            </Link>
        </div>
    );
};

export default MagicPage;