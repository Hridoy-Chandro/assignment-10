import { useLoaderData } from "react-router-dom";
import ProductCards from "./ProductCards";
import Carosol from "./Carosol";


const Sony = () => {
    const products = useLoaderData();


    return (
        <div>
            <div>
                <Carosol></Carosol>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-8">
                {
                    products.map(product => <ProductCards key={product._id} product={product}>

                    </ProductCards>)
                }
            </div>
        </div>

    );
};
export default Sony;