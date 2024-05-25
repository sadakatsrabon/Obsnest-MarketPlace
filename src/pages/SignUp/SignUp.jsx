
const SignUp = () => {


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

    }

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
                            <a href="/login" className="label-text-alt link link-hover">Already Have An Account ?</a>
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