import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from "../../providers/AuthProvider";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [spots, setSpots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch spots added by the logged-in user
    useEffect(() => {
        if (user && user.email) {
            console.log(`Fetching spots for user: ${user.email}`);
            fetch(`http://localhost:5001/my-list?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("Fetched spots:", data);
                    setSpots(data);
                    setIsLoading(false);
                })
        } else {
            setIsLoading(false);
        }
    }, [user]);

    // Handle delete spot
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/tourist-spot/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then(() => {
                        setSpots(spots.filter((spot) => spot._id !== id));
                        Swal.fire(
                            'Deleted!',
                            'The tourist spot has been deleted.',
                            'success'
                        );
                    });
            }
        });
    };

    // Handle update spot
    const handleUpdate = (id) => {
        navigate(`/update-spot/${id}`);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">My List</h2>
            {spots.length === 0 ? (
                <p className="text-center text-gray-600">No spots added by you yet.</p>
            ) : (
                <table className="table-auto w-full bg-white shadow-md rounded">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="px-4 py-2">Spot Name</th>
                            <th className="px-4 py-2">Location</th>
                            <th className="px-4 py-2">Cost</th>
                            <th className="px-4 py-2">Visitors</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {spots.map((spot) => (
                            <tr key={spot._id} className="border-t">
                                <td className="px-4 py-2">{spot.spotName}</td>
                                <td className="px-4 py-2">{spot.location}</td>
                                <td className="px-4 py-2">{spot.cost}</td>
                                <td className="px-4 py-2">{spot.visitors}</td>
                                <td className="px-4 py-2 space-x-2">
                                    <button
                                        onClick={() => handleUpdate(spot._id)}
                                        className="btn btn-sm btn-primary"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(spot._id)}
                                        className="btn btn-sm btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyList;