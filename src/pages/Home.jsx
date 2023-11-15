import { Link } from "react-router-dom";
import Banner from "../components/Banner";


const Home = () => {
    return (
        <>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <h1 className="text text-3xl pt-5 font-semibold">Our Brand Products</h1>
            </div>

            <div>
                {/* card start here  */}
                <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-6 items-center my-5">
                    <Link to={'/googleProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src="/src/images/google.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Google</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/miProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src="/src/images/mi.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Mi</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/itunesProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src="/src/images/iton.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Itunes</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/intelProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src="/src/images/intel.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Intel</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/samsungProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src="/src/images/samsung.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Samsung</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/sonyProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src="/src/images/sony.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Sony</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="text-5xl font-bold py-7 justify-center items-center">
                    Our Sponsored
                </div>

                <div>
                    <img className="w-full h-[300px]" src="/src/images/sponsorship.jpg" alt="" />
                </div>

                <div className="flex gap-20 items-center justify-evenly py-10">
                    <div>
                        <h1 className="font-bold text-xl">Free Shipping</h1>
                        <p>free shipping in all order</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">Recognizing Excellence</h1>
                        <p>Outstanding achievements</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">Guiding Principles</h1>
                        <p>Customer satisfaction</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">Less Money</h1>
                        <p>Save money for good</p>
                    </div>
                </div>



            </div>

        </>
    );
};

export default Home;