import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const { signInUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error);
            })





        // add validation 
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "You are successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })



    }

    return (
        <div>
            <div>
                <h1 className="text-3xl text-center my-5">Please Login</h1>

                <form onSubmit={handleLogin} className="card min-h-fit flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-3/4 lg:w-1/2 mx-auto ">

                    <div className="justify-center card-body form-control">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            registerError && <h1 className="text-red-600">{registerError} </h1>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                    </div>

                    <p className="text-center mb-4">New Here ? Please do <Link className="text-blue-600 font-semibold" to="/register">Registration</Link></p>
                    <div className="divider"><span>Continue with</span></div>

                    <SocialLogin></SocialLogin>

                </form>
            </div>
        </div>
    );
};

export default Login;