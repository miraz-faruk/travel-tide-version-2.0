import Swal from 'sweetalert2'

const AddTouristSpot = () => {

    const handleAddSpot = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const spotName = form.spotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const visitors = form.visitors.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const newSpot = { image, spotName, country, location, description, cost, seasonality, travelTime, visitors, userEmail, userName };
        console.log(newSpot);

        // send data to the server
        fetch('http://localhost:5001/tourist-spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    form.reset();
                }
            });
    };
    return (
        <div className="container mx-auto mt-10 bg-zinc-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Add Your Tourist Spot</h2>
            <form onSubmit={handleAddSpot}>
                {/* Row 1 */}
                <div className="md:flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Image</span>
                        </div>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Tourist Spot Name</span>
                        </div>
                        <input type="text" name="spotName" placeholder="Tourist Spot Name" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row 2 */}
                <div className="md:flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Country Name</span>
                        </div>
                        <input type="text" name="country" placeholder="Country Name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Location</span>
                        </div>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row 3 */}
                <div>
                    <label className="form-control md:w-full">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Short Description</span>
                        </div>
                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row 4 */}
                <div className="md:flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Average Cost</span>
                        </div>
                        <input type="text" name="cost" placeholder="Average Cost" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Seasonality</span>
                        </div>
                        <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row 5 */}
                <div className="md:flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Travel Time</span>
                        </div>
                        <input type="text" name="travelTime" placeholder="Travel Time" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">Total Visitors Per Year</span>
                        </div>
                        <input type="text" name="visitors" placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row 6 */}
                <div className="md:flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">User Email</span>
                        </div>
                        <input type="text" name="userEmail" placeholder="User Email" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg font-medium">User Name</span>
                        </div>
                        <input type="text" name="userName" placeholder="User Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <input className="btn btn-info w-full text-lg mt-5" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddTouristSpot;