import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ProductCards = ({ product }) => {
    const { name, _id, photo, price, description } = product;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://hridoy-ten.vercel.app/product/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });
    }


    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">New</div>
                    </h2>
                    <p>{description}</p>
                    <br />
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn btn-accent"> Details</button></Link>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="btn btn-accent"> Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-accent"> Delete</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductCards;



// to={`updateProduct/${_id}`}