import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const {createUser} = useContext(AuthContext);



    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, name, password);

// create user 
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error);
        })

        setRegisterError('');
        setSuccess('');

        if(password.length < 6) {
            setRegisterError('password should be 6 character ')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('password should be one uppercase')
        }

        // create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "You are successfully registered",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error);
                setRegisterError('Already have an account')
            });

    }

    return (
        <div>
            <div>
                <h1 className="text-3xl text-center my-5">Please Register</h1>

                <form onSubmit={handleRegister} className="card min-h-fit flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-3/4 lg:w-1/2 mx-auto ">

                    <div className="justify-center card-body form-control">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>

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
                            {
                                registerError && <h1 className="text-red-600">{registerError} </h1>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>
                    </div>

                    <p className="text-center mb-4">Do not have an account ? <Link className="text-blue-600 font-semibold" to="/login">Login</Link></p>
                    <div className="divider"><span>Continue with</span></div>
                    <SocialLogin></SocialLogin>


                </form>
            </div>
        </div>
    );
};

export default Register;