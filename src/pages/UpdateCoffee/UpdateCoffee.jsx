import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const [coffee] = useLoaderData() || [];
  const { _id, name, supplier, category, chef, taste, details, photo } =
    coffee || {};
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };
    console.log(updatedCoffee);
    fetch(`https://coffee-store-server-ten-coral.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (data.upsertedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Created New Coffee",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="px-24">
      <Link to={"/"}>
        <span className="font-rancho text-3xl inline-flex gap-2 my-10 drop-shadow-md">
          <BiArrowBack /> Back to Home
        </span>
      </Link>
      <div className="bg-[#F4F3F0] py-16 px-20 rounded-md">
        <h1 className="font-rancho text-5xl text-[#374151] font-semibold drop-shadow-lg text-center">
          Update Existing Coffee Details
        </h1>
        <p className="text-center w-3/4 mx-auto mt-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdate} className="space-y-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 justify-center mt-10">
            {/* form left side */}
            <div className="space-y-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xl font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter Coffee Name"
                  className="w-full py-2 px-3 rounded-md focus:outline-[#331A15]"
                  id=""
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xl font-semibold">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter Coffee Supplier"
                  className="w-full py-2 px-3 rounded-md focus:outline-[#331A15]"
                  id=""
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xl font-semibold">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter Coffee Category"
                  className="w-full py-2 px-3 rounded-md focus:outline-[#331A15]"
                  id=""
                />
              </div>
            </div>
            {/* form right side */}
            <div className="space-y-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xl font-semibold">
                  Chef
                </label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Enter Coffee Chef"
                  className="w-full py-2 px-3 rounded-md focus:outline-[#331A15]"
                  id=""
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xl font-semibold">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter Coffee Taste"
                  className="w-full py-2 px-3 rounded-md focus:outline-[#331A15]"
                  id=""
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xl font-semibold">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter Coffee Details"
                  className="w-full py-2 px-3 rounded-md focus:outline-[#331A15]"
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-xl font-semibold">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter Photo URL"
              className="w-full py-2 px-3"
              id=""
            />
          </div>
          <div>
            <button className="bg-[#D2B48C] text-[#331A15] py-1.5 w-full font-rancho text-2xl drop-shadow-md rounded-md border-2 border-[#331A15]">
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
