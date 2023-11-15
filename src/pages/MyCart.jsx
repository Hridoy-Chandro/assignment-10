import { useLoaderData } from "react-router-dom";



const MyCart = () => {
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
        </div>
    );
};

export default MyCart;