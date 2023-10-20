import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { singIn, signInWithGoogle } = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-6">Login Your Account</h2>
                <form onSubmit={handleLogIn}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your password" required />
                    </div>
                    <button className="w-full bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 mb-4"
                    >Log In</button>
                    <button onClick={handleGoogleSignIn} className="w-full bg-red-500 text-white rounded-lg py-2 font-semibold hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
                    >Login with Google</button>
                    <p className="text-center text-gray-600 text-sm mt-4">
                        Don't have an account? <Link to="/register" className="text-blue-500"> Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;