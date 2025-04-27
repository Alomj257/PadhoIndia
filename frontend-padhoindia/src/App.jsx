import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useContext } from "react";
import Loader from "./utils/Loader";
import { Toaster } from "react-hot-toast";
import NavigationDashboard from "./components/common/NavigationDashboard";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Scholarship from "./pages/Scholarship";
import ScholarshipDetails from "./components/common/ScholarshipDetails";
import About from "./pages/About";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import Vailist from "./components/common/Vailist";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const ForgotPassword = lazy(() => import("./components/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/auth/ResetPassword"));
const ConfirmOtp = lazy(() => import("./components/auth/ConfirmOtp"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const UserDashboard = lazy(() => import("./pages/user/UserDashboard"));

const AppContent = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation(); // Get current route

  const hideNavbarRoutes = ["/login", "/register", "/forgot-password", "/reset-password", "/confirm-otp"];
  
  const shouldHideFooter = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <Toaster />
      {!user && !hideNavbarRoutes.includes(location.pathname) ? <Navbar /> : user && <NavigationDashboard />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-otp" element={<ConfirmOtp />} />

          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/scholarship/:id" element={<ScholarshipDetails />} />

          <Route path="/about" element={<About />} />

          <Route path="/events" element={<Events />} />

          <Route path="/contact" element={<ContactUs />} />
          
          <Route path="/prize-list" element={<Vailist />} />

          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        </Routes>
      </Suspense>

      {!shouldHideFooter && <Footer />} 
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;
