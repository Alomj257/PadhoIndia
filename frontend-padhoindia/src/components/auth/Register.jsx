import { useState } from "react";
import { Input, Button, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assets/login_image.png";
import logo from "../../assets/CGL.png";
import { registerUser } from "../../services/api";
import { toast } from "react-hot-toast";

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    phone: "",
    userType: "STUDENT",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, userType: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      toast.success(response.data.message || "Registration Successful");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full h-screen md:p-4">
      <div className="bg-white shadow-lg rounded-md flex w-full h-full overflow-hidden relative max-w-4xl mx-auto">

        {/* Left Side - Image */}
        <div className="w-1/2 h-full hidden md:block">
          <img src={registerImage} alt="Register Illustration" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col justify-center items-center relative">

          {/* Logo and Title */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="h-20 w-20 rounded-full object-cover" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">Welcome to Padho India</h2>
          <p className="text-center text-gray-600 mb-4 text-sm md:text-base">Create an account to access your dashboard</p>

          {/* Form with Hidden Scrollbar */}
          <div 
            className="w-full max-w-sm overflow-y-auto" 
            style={{ maxHeight: "70vh", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>
              {`
                /* Hide scrollbar for WebKit browsers */
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            <form onSubmit={handleSubmit} className="hide-scrollbar">
              <Input 
                name="firstName" 
                placeholder="First Name" 
                size="large" 
                className="mb-3 w-full" 
                onChange={handleChange} 
                required 
              />
              
              <Input 
                name="lastName" 
                placeholder="Last Name" 
                size="large" 
                className="mb-3 w-full" 
                onChange={handleChange} 
                required 
              />
              
              <Input 
                name="email" 
                placeholder="Email" 
                size="large" 
                className="mb-3 w-full" 
                onChange={handleChange} 
                required 
              />
              
              <Input.Password 
                name="password" 
                placeholder="Password" 
                size="large" 
                className="mb-3 w-full" 
                onChange={handleChange} 
                required 
              />
              
              <Input 
                name="country" 
                placeholder="Country" 
                size="large" 
                className="mb-3 w-full" 
                onChange={handleChange} 
                required 
              />
              
              <Input 
                name="phone" 
                placeholder="Phone Number" 
                size="large" 
                className="mb-3 w-full" 
                onChange={handleChange} 
                required 
              />

              <Select 
                size="large" 
                className="mb-3 w-full" 
                defaultValue="STUDENT" 
                onChange={handleSelectChange}
              >
                <Option value="STUDENT">Student</Option>
                <Option value="ADMIN">Admin</Option>
              </Select>

              <Button type="primary" htmlType="submit" block size="large" className="mb-3">
                Register
              </Button>

              {/* Back to Home Button */}
              <Link to="/" className="block">
                <Button type="default" block size="large">
                  Back to Home
                </Button>
              </Link>
            </form>
          </div>

          <p className="text-center mt-3 text-sm md:text-base">
            Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-800">Sign In</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;
