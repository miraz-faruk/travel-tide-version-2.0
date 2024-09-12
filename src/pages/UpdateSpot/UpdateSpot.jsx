import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: "",
        spotName: "",
        country: "",
        location: "",
        description: "",
        cost: "",
        seasonality: "",
        travelTime: "",
        visitors: "",
        userEmail: "",
        userName: "",
    });

    useEffect(() => {
        fetch(`http://localhost:5001/my-list/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log("Fetched Data:", data);
                setFormData({
                    image: data.image,
                    spotName: data.spotName,
                    country: data.country,
                    location: data.location,
                    description: data.description,
                    cost: data.cost,
                    seasonality: data.seasonality,
                    travelTime: data.travelTime,
                    visitors: data.visitors,
                    userEmail: data.userEmail,
                    userName: data.userName,
                });
            })
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateSpot = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5001/my-list/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Updated Data:", data);
                Swal.fire({
                    title: "Success!",
                    text: "Tourist spot updated successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
                navigate('/my-list');
            })
            .catch((error) => {
                console.error("Error updating spot:", error);
                Swal.fire("Error!", "Failed to update tourist spot.", "error");
            });
    };

    return (
        <div className="container mx-auto mt-10 bg-zinc-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
                Update Your Tourist Spot
            </h2>
            <form onSubmit={handleUpdateSpot}>
                {/* Row 1 */}
                <div className="flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Image</span>
                        </div>
                        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="input input-bordered w-full" required
                        />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">
                                Tourist Spot Name
                            </span>
                        </div>
                        <input type="text" name="spotName" value={formData.spotName} onChange={handleChange} placeholder="Tourist Spot Name" className="input input-bordered w-full" required
                        />
                    </label>
                </div>
                {/* Row 2 */}
                <div className="flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">
                                Country Name
                            </span>
                        </div>
                        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country Name" className="input input-bordered w-full" required
                        />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Location</span>
                        </div>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="input input-bordered w-full" required
                        />
                    </label>
                </div>
                {/* Row 3 */}
                <div>
                    <label className="form-control md:w-full">
                        <div className="label">
                            <span className="label-text text-lg font-medium">
                                Short Description
                            </span>
                        </div>
                        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Short Description" className="input input-bordered w-full" required
                        />
                    </label>
                </div>
                {/* Row 4 */}
                <div className="flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">
                                Average Cost
                            </span>
                        </div>
                        <input type="text" name="cost" value={formData.cost} onChange={handleChange} placeholder="Average Cost" className="input input-bordered w-full" required
                        />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">
                                Seasonality
                            </span>
                        </div>
                        <input type="text" name="seasonality" value={formData.seasonality} onChange={handleChange} placeholder="Seasonality" className="input input-bordered w-full" required
                        />
                    </label>
                </div>
                {/* Row 5 */}
                <div className="flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">
                                Travel Time
                            </span>
                        </div>
                        <input type="text" name="travelTime" value={formData.travelTime} onChange={handleChange} placeholder="Travel Time" className="input input-bordered w-full" required
                        />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">
                                Total Visitors Per Year
                            </span>
                        </div>
                        <input type="text" name="visitors" value={formData.visitors} onChange={handleChange} placeholder="Total Visitors Per Year" className="input input-bordered w-full" required
                        />
                    </label>
                </div>
                {/* Row 6 */}
                <div className="flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">User Email</span>
                        </div>
                        <input type="text" name="userEmail" value={formData.userEmail} onChange={handleChange} placeholder="User Email" className="input input-bordered w-full" required
                        />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">User Name</span>
                        </div>
                        <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="User Name" className="input input-bordered w-full" required
                        />
                    </label>
                </div>
                <input
                    className="btn btn-info w-full text-lg mt-5"
                    type="submit"
                    value="Update"
                />
            </form>
        </div>
    );
};

export default UpdateSpot;