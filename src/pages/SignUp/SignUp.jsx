import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const home = location?.state?.form?.pathname || '/';

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // SignUp mechanism
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);

                const savedUser = { name: name, email: email, password:password };
                return fetch('https://obsnest-server.vercel.app/obsnestusers', {
                    method: "POST",
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                });
            })
            .then(res => {
                if (!res.ok) {
                    return res.text().then(text => { throw new Error(text); });
                }
                return res.json();
            })
            .then(data => {
                if (data.insertedId) {
                    // SignUp Alert
                    let timerInterval;
                    Swal.fire({
                        title: "Welcome to OBSNEST Family",
                        html: "You are the valuable one in OBSNEST World",
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log("I was closed by the timer");
                        }
                    });

                    // Navigate to Home
                    navigate(home, { replace: true });
                }
            })
            .catch(error => {
                console.error("Error during sign up or saving user:", error);
            });
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* FORM */}
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <span className="label-text">Name</span>
                            <input name="name" type="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <span className="label-text">Email</span>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <span className="lable-text">Password</span>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <a href="/nest/login" className="label-text-alt link link-hover">Already Have An Account ?</a>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;