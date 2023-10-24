import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, brand, category, price, description, photo, reating } = product;
    const handleUpdateProduct = event =>{
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const reating = form.reating.value;
    const updateProduct = {name, brand, category, price, description, photo, reating}
    console.log(updateProduct)
    
    
    // send data to the server
    fetch(`http://localhost:5000/product/${_id}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                Swal.fire({
                    title: 'success',
                    text: 'Product Updated Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <div>
           
            <div className="bg-[#F4F3F0] p-20">
                <h1 className="text-3xl text-black mb-4 font-extrabold text-center">Update Technology and Electronics Products</h1>
                <form onSubmit={handleUpdateProduct}>
                    {/* form name and brand name row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Product Category and price row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="category" defaultValue={category}  placeholder="Product Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Short description and reationg row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Reating</span>
                            </label>
                            <label className="input-group" >

                                <input  type="number" name="reating" min="1" max="10" defaultValue={reating} placeholder=" Give Reating out of 10" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                
        
                           {/* form photo url row */}
                    <div className="mb-8 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                       
                    
                 

                    <input type="submit" value="Update Product" className="btn btn-block bg-slate-600" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;