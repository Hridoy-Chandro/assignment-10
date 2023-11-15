import { useLoaderData } from "react-router-dom";
import ProductCards from "./ProductCards";
import Carosol from "./Carosol";


const Google = () => {
    const products = useLoaderData();


    return (
        <div>
            <div>
                <Carosol></Carosol>
            </div>
            <h1 className="text-4xl font-bold py-8
            "> Our Products </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-8">
                {
                    products.map(product => <ProductCards key={product._id} product={product}>

                    </ProductCards>)
                }
            </div>
        </div>

    );
};

export default Google;