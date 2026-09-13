import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

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

      {/* Technologies + Sidebar */}
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Technologies */}
          <div className="flex-1">
            <Technologies onAdd={handleAdd} />
          </div>

          {/* Sidebar */}
          <StackSidebar />

        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Toastify */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />

    </div>
  );
}

export default App;





