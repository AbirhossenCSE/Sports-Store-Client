import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateEquip = () => {
    const { user } = useContext(AuthContext)
    const equipment = useLoaderData();
    const { _id, name, categoryName, price, rating, processingTime, stockStatus, customization, imageUrl, description } = equipment;

    const handleUpdate = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const categoryName = e.target.categoryName.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const processingTime = e.target.processingTime.value;
        const stockStatus = e.target.stockStatus.value;
        const customization = e.target.customization.value;
        const imageUrl = e.target.imageUrl.value;
        const description = e.target.description.value;
        const userEmail = e.target.userEmail.value;
        const userName = e.target.userName.value;

        const newEqu = { name, categoryName, price, rating, processingTime, stockStatus, customization, imageUrl, description, userEmail, userName }


        // send data to the server and database
        fetch(`http://localhost:5000/equipment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEqu)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    console.log('Successfully updated');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })

    }



    return (
        <div>
            <div>
                <nav>
                    <Navbar></Navbar>
                </nav>

                <div className='w-8/12 mx-auto'>
                    <form onSubmit={handleUpdate} className="p-6 space-y-4 rounded-lg">

                        {/* Two Fields in One Row: Item Name & Category Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Item Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Enter item name"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Category Name */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="categoryName"
                                    defaultValue={categoryName}
                                    placeholder="Enter category name"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>



                        {/* Price & Rating */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    defaultValue={price}
                                    placeholder="Enter price"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Rating */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    defaultValue={rating}
                                    placeholder="Enter rating (1-5)"
                                    className="input input-bordered w-full"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                />
                            </div>
                        </div>

                        {/* Processing Time & Stock Status */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Processing Time */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input
                                    type="text"
                                    name="processingTime"
                                    defaultValue={processingTime}
                                    placeholder="Enter processing/delivery time"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Stock Status */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input
                                    type="text"
                                    name="stockStatus"
                                    defaultValue={stockStatus}
                                    placeholder="Enter available quantity"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Customization */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input
                                    type="text"
                                    name="customization"
                                    defaultValue={customization}
                                    placeholder="Enter customization details"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Image URL */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="imageUrl"
                                    defaultValue={imageUrl}
                                    placeholder="Enter image URL"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* user name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input
                                    type="userName"
                                    name="userName"
                                    placeholder="User Name"
                                    defaultValue={user?.displayName}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            {/* user email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    placeholder="Enter Your Email"
                                    defaultValue={user?.email}
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                name="description"
                                defaultValue={description}
                                placeholder="Enter product description"
                                className="textarea textarea-bordered w-full"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-4">
                            <button className="btn btn-primary w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateEquip;