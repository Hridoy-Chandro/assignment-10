import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import images from '../images/google.jpg';
import intel from '../images/intel.jpg';
import mi from '../images/mi.jpg';
import itunes from '../images/iton.jpg';
import samsung from '../images/samsung.jpg';
import sony from '../images/sony.jpg';
import spon from '../images/sponsorship.jpg';



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
                            <figure><img src={images} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Google</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/miProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src={mi} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Mi</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/itunesProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src={itunes} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Itunes</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/intelProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src={intel} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Intel</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/samsungProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src={samsung} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-bold justify-center items-center">Samsung</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/sonyProduct'}>
                        <div className="card card-compact w-96 shadow-xl">
                            <figure><img src={sony} alt="" /></figure>
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
                    <img className="w-full h-[300px]" src={spon} alt="" />
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