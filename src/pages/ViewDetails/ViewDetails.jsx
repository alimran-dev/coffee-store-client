import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const [coffee] = useLoaderData();
  const { name, supplier, category, chef, taste, details, photo } = coffee;
    console.log(coffee);
  return (
    <div className="px-24">
      <Link to={"/"}>
        <span className="font-rancho text-3xl inline-flex gap-2 my-10 drop-shadow-md">
          <BiArrowBack /> Back to Home
        </span>
      </Link>
        <div className="bg-[#F4F3F0] py-14 px-20 rounded-md flex items-center gap-10">
          <div className="w-2/5">
            <img src="/images/1.png" alt="" className="w-full"/>
          </div>
              <div className="pr-5">
                  <h2 className="font-rancho font-bold text-3xl mb-5 drop-shadow-md">Niceties</h2>
            <p className="text-[#1B1A1A] text-lg">
              <span className="text-black font-semibold">Name: </span> {name}
            </p>
            <p className="text-[#1B1A1A] text-lg">
              <span className="text-black font-semibold">Chef: </span> {chef}
            </p>
            <p className="text-[#1B1A1A] text-lg">
              <span className="text-black font-semibold">Supplier: </span> {supplier}
            </p>
            <p className="text-[#1B1A1A] text-lg">
              <span className="text-black font-semibold">Taste: </span> {taste}
            </p>
            <p className="text-[#1B1A1A] text-lg">
              <span className="text-black font-semibold">Category: </span> {category}
            </p>
            <p className="text-[#1B1A1A] text-lg">
              <span className="text-black font-semibold">Details: </span> {details}
            </p>
          </div>
        </div>
    </div>
  );
};

export default ViewDetails;
