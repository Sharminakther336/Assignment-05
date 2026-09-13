import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [stack, setStack] = useState([]);

  const handleAdd = (tech) => {
    setStack([...stack, tech]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Technologies Section */}
      <Technologies onAdd={handleAdd} />

      {/* Toastify Container */}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;






