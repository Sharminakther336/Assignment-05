import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [stack, setStack] = useState([]);

  const handleAdd = (tech) => {
    
    
    if (!stack.find((t) => t.id === tech.id)) {
      setStack([...stack, tech]);
      toast.success(`${tech.name} added to stack!`);
    }
  };

  const handleRemove = (id) => {
    const updated = stack.filter((t) => t.id !== id);
    setStack(updated);
    toast.info("Removed from stack");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner />

      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <Technologies onAdd={handleAdd} stack={stack} />
          </div>
          <StackSidebar stack={stack} onRemove={handleRemove} />
        </div>
      </div>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;





