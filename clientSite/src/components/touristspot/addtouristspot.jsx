import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/authprovider";

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);

  const handleAddTouristSpot = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const area = form.get("area");
    const distance = form.get("distance");
    const famousFor = form.get("famousFor");
    const tourist_point_name1 = form.get("tourist_point_name1");
    const tourist_point_desc1 = form.get("tourist_point_desc1");
    const tourist_point_name2 = form.get("tourist_point_name2");
    const tourist_point_desc2 = form.get("tourist_point_desc2");
    const tourist_point_name3 = form.get("tourist_point_name3");
    const tourist_point_desc3 = form.get("tourist_point_desc3");
    const description = form.get("description");
    const photo = form.get("photo");
    const addedBy = user.email;

    const newTouristPoint = {
      name,
      area,
      distance,
      famousFor,
      tourist_point_name1,
      tourist_point_desc1,
      tourist_point_name2,
      tourist_point_desc2,
      tourist_point_name3,
      tourist_point_desc3,
      description,
      photo,
      addedBy,
    };

    // console.log(newTouristPoint);

    axios
      .post("http://localhost:500/add-tourist-spot", newTouristPoint)
      .then((data) => {
        // console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-1/2 py-12 mx-auto">
      <h2 className="text-3xl text-center font-bold mb-5">Add Tourist Spot</h2>

      <form onSubmit={handleAddTouristSpot}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist Place name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Tourist Place name"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist place area</span>
            </div>
            <input
              type="text"
              name="area"
              placeholder="Tourist place area"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Far from Dhaka</span>
            </div>
            <input
              type="text"
              name="distance"
              placeholder="Far from Dhaka"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Famous for</span>
            </div>
            <input
              type="text"
              name="famousFor"
              placeholder="Famous for"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist point name1</span>
            </div>
            <input
              type="text"
              name="tourist_point_name1"
              placeholder="Tourist point name1"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist point Description</span>
            </div>
            <input
              type="text"
              name="tourist_point_desc1"
              placeholder="Tourist point Description"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist point name2</span>
            </div>
            <input
              type="text"
              name="tourist_point_name2"
              placeholder="Tourist point name2"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist point Description</span>
            </div>
            <input
              type="text"
              name="tourist_point_desc2"
              placeholder="Tourist point Description"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist point name3</span>
            </div>
            <input
              type="text"
              name="tourist_point_name3"
              placeholder="Tourist point name3"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist point Description</span>
            </div>
            <input
              type="text"
              name="tourist_point_desc3"
              placeholder="Tourist point Description"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist Place Description</span>
            </div>
            <input
              type="text"
              name="description"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Image URL</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            value="Add Tourist Spot"
            className="w-full btn bg-red-600 hover:bg-red-700 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTouristSpot;
