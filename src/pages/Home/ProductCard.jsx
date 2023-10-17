import PropTypes from "prop-types";
import { AiFillEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProductCard = ({ coffee }) => {
  const { name, chef, photo, price } = coffee || {};
  return (
    <div className="flex gap-2 justify-around items-center bg-[#F5F4F1] rounded-md">
      <div>
        <img src="/images/1.png" alt="" />
      </div>
      <div className="pr-5">
        <p className="text-[#1B1A1A] text-lg">
          <span className="text-black font-semibold">Name: </span> {name}
        </p>
        <p className="text-[#1B1A1A] text-lg">
          <span className="text-black font-semibold">Chef: </span> {chef}
        </p>
        <p className="text-[#1B1A1A] text-lg">
          <span className="text-black font-semibold">Price: </span> {price} Taka
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <button className="bg-[#D2B48C] text-2xl text-white p-3 rounded-md">
          <AiFillEye />
        </button>
        <button className="bg-[#3C393B] text-2xl text-white p-3 rounded-md">
          <FaPen />
        </button>
        <button className="bg-[#EA4744] text-2xl text-white p-3 rounded-md">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  coffee: PropTypes.object.isRequired,
};
