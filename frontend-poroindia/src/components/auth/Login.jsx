import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons"; // Import back icon
import loginImage from "../../assets/login_image.png";
import logo from "../../assets/CGL.png";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 w-full h-screen">
      <div className="bg-white shadow-lg rounded-md flex w-full h-full overflow-hidden relative">
        {/* Left Side - Image */}
        <div className="w-1/2 h-full hidden md:block">
          <img src={loginImage} alt="Login Illustration" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 h-full p-8 flex flex-col justify-center items-center relative">
          {/* Back to Home Button at Top-Right with Better Visibility */}
          <Link
            to="/"
            className="absolute top-4 right-4 text-blue-600 font-semibold hover:text-blue-800 text-lg flex items-center transition duration-200"
          >
            <ArrowLeftOutlined className="mr-2 text-xl" /> Home
          </Link>

          <div className="flex justify-center mb-4">
            <img src={logo} alt="CGL Logo" className="h-24 w-24 rounded-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">Welcome to Poro India</h2>
          <p className="text-center text-gray-600 mb-6">Login to access your dashboard</p>
          
          <form onSubmit={handleSubmit} className="w-3/4 max-w-sm">
            <Input
              name="email"
              placeholder="Email"
              size="large"
              className="mb-4 w-full"
              onChange={handleChange}
              required
            />
            <Input.Password
              name="password"
              placeholder="Password"
              size="large"
              className="mb-4 w-full"
              onChange={handleChange}
              required
            />

            {/* Forgot Password Link */}
            <div className="flex justify-end mb-4">
              <Link to="/forgot-password" className="text-blue-600 text-sm font-semibold hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Button type="primary" htmlType="submit" block size="large">
              Login
            </Button>
          </form>

          <p className="text-center mt-4">
            Don't have an account? <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-800">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
