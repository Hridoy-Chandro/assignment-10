import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const product = useLoaderData();
    const { name, _id, photo, price, description } = product;


    return (
        <div>
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">New</div>
                </h2>
                <p>{description}</p>
                <br />
                <p>Price: {price}</p>
            </div>
            <Link to={`/myCart/${_id}`}>
            <button className="btn btn-primary">Add to cart</button>
            </Link>
        </div>
    );
};

export default Details;