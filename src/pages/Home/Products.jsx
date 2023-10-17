import { useLoaderData, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { BsCup } from "react-icons/bs";

const Products = () => {
  const coffees = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="space-y-5">
      <p className="text-center text-xl">--- Sip & Savor ---</p>
      <h2 className="font-rancho text-5xl text-[#374151] font-semibold drop-shadow-lg text-center">
        Our Popular Products
      </h2>
      <button
        onClick={() => navigate("/addCoffee")}
        className="bg-[#E3B577] flex justify-center items-center font-medium py-2 px-3 gap-2 rounded-lg mx-auto"
      >
        Add Coffee <BsCup />
      </button>
      <div className="grid lg:grid-cols-2 gap-5 px-24">
        {coffees.map((coffee) => (
          <ProductCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Products;
