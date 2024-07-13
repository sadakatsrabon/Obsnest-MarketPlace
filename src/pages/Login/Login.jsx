import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    // console.log(logError);

    const { login } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const home = location?.state?.form?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                // Login Alart
                let timerInterval;
                Swal.fire({
                    title: "Please Wait sir",
                    html: "Your login Process is succesfull",
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
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("Ii was closed by the timer");
                    }
                });

                // navigete to home
                navigate(home, { replace: true })
            })
            .catch(() => {
                Swal.fire ("Please Create An Account");
                navigate('/nest/signup')
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="grid grid-cols-">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* FORM */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <span className="label-text">Email</span>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <span className="label-text">Password</span>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <a href="/nest/signup" className="label-text-alt link link-hover">Create New Account ?</a>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;