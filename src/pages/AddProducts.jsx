import Swal from "sweetalert2";



const AddProducts = () => {
    const handleAddProduct = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const option = form.option.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newProduct = {
            name, photo, option, price, description, rating
        }
        console.log(newProduct);

        // sent data to the server
        fetch('http://localhost:5001/product', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your product added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }



    return (
        <div className="justify-center items-center">

            <h1 className="text-3xl py-5 font-bold items-center justify-center">AddProducts</h1>

            <form onSubmit={handleAddProduct}>
                <div className="justify-center py-3 items-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input w-4/6 input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input w-4/6 input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <span className="label-text">Brand Name</span>
                        <select className="select select-bordered my-4 w-4/6 " name="option">
                            <option disabled selected>Brand Name</option>
                            <option>Laptop</option>
                            <option>Mobile</option>
                            <option>Headphone</option>
                            <option>Iphone</option>
                            <option>Desktop</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Product Price" className="input w-4/6 input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Descriptions</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Product Descriptions" className="input w-4/6 h-100 input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Give Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Give Rating" className="input w-4/6 input-bordered" />
                        </label>
                    </div>

                    <button className="btn w-4/6 mt-5 text-start btn-primary"> Add Products</button>

                </div>

            </form>
        </div>
    );
};

export default AddProducts;