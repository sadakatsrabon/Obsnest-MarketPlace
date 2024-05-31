import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const { login } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const login = result.user;
                console.log(login)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
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
                            <a href="/signup" className="label-text-alt link link-hover">Create New Account ?</a>
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