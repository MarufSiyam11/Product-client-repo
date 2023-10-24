import { Link } from "react-router-dom";


const Login = () => {
   

    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-8">Please Login</h1>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content ">

                    <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">

                        <form  className="card-body">
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="p-3">Do Not have an account <Link className="text-blue-500 font-bold" to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;