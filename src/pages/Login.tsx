import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = localStorage.getItem("roommitraUser");

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/onboarding");
    } else {
      alert("Invalid login details.");
    }

    localStorage.setItem("authToken", "loggedin");   // store login token
    navigate("/find_match");                          // go to findmatch page

  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>

      <input className="border p-2 w-full mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input className="border p-2 w-full mb-3"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleLogin}>
        Login
      </button>

      <p className="mt-4">
        Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
