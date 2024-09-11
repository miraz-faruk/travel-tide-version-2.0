import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    // Login with email and password
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast('Login successful');
                setTimeout(() => {
                    navigate('/');
                }, 5000);
            })
            .catch(error => {
                console.error(error);
                toast.error('Login failed! Please check your email and password.');
            })
    }

    // Login with Google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('Google login successful!');
                setTimeout(() => {
                    navigate('/');
                }, 5000);
            })
            .catch(error => {
                console.error(error);
                toast.error(`Google login failed! ${error.message}`);
            })
    }
    // Login with Github
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user);
                toast.success('Github login successful!');
            })
            .catch(error => {
                console.error(error);
                if (error.code === 'auth/account-exists-with-different-credential') {
                    toast.error('An account with this email already exists with a different sign-in method.');
                } else {
                    toast.error(`GitHub login failed! ${error.message}`);
                }
            })
    }

    return (
        <div>
            <div className="mb-5">
                <h2 className="text-[#D6AD60] text-3xl text-center font-bold mt-4 lg:mt-8">Please Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body w-full lg:w-1/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="flex justify-center gap-5 mb-5">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info">
                        Google Login
                    </button>
                    <button onClick={handleGithubSignIn} className="btn btn-outline">
                        Github Login
                    </button>
                </div>
                <p className="text-center">Do not have an account? <Link className="text-blue-600 font-medium" to="/register">Register</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;