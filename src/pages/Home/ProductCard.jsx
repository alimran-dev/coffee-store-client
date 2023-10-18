import PropTypes from "prop-types";
import { AiFillEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ coffee }) => {
  const { _id, name, chef, photo, price } = coffee || {};
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EA4744",
      cancelButtonColor: "#3C393B",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted.",
              icon: "success",
              confirmButtonColor: "#3C393B",
            });
          });
      }
    });
  };
  return (
    <div className="flex gap-2 justify-around items-center bg-[#F5F4F1] rounded-md p-5">
      <div className="w-1/3">
        <img src={photo} alt="" />
      </div>
      <div className="pr-5 flex-grow">
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
        <button
          onClick={() => navigate(`/details/${_id}`)}
          className="bg-[#D2B48C] text-2xl text-white p-3 rounded-md"
        >
          <AiFillEye />
        </button>
        <button
          onClick={() => navigate(`/updateCoffee/${_id}`)}
          className="bg-[#3C393B] text-2xl text-white p-3 rounded-md"
        >
          <FaPen />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] text-2xl text-white p-3 rounded-md"
        >
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
