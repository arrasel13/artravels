import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditTouristSpot = () => {
  const [sTouristSpot, setSTouristSpot] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:500/edit-touristspot/${id}`)
      .then((response) => {
        // console.log(response.data);
        setSTouristSpot(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleUpdateTouristSpot = (e) => {
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

    const updateTouristPoint = {
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
    };

    // console.log(updateTouristPoint);

    axios
      .put(`http://localhost:500/update-tourist-spot/${id}`, updateTouristPoint)
      .then((response) => {
        // console.log(response.data);
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(location.state);
        }
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-1/2 py-12 mx-auto">
      <h2 className="text-3xl text-center font-bold mb-5">
        Update Tourist Spot:
      </h2>

      <form onSubmit={handleUpdateTouristSpot}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Tourist Place name</span>
            </div>
            <input
              type="text"
              name="name"
              defaultValue={sTouristSpot.name}
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
              defaultValue={sTouristSpot.area}
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
              defaultValue={sTouristSpot.distance}
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
              defaultValue={sTouristSpot.famousFor}
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
              defaultValue={sTouristSpot.tourist_point_name1}
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
              defaultValue={sTouristSpot.tourist_point_desc1}
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
              defaultValue={sTouristSpot.tourist_point_name2}
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
              defaultValue={sTouristSpot.tourist_point_desc2}
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
              defaultValue={sTouristSpot.tourist_point_name3}
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
              defaultValue={sTouristSpot.tourist_point_desc3}
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
              defaultValue={sTouristSpot.description}
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
              defaultValue={sTouristSpot.photo}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            value="Update Tourist Spot"
            className="w-full btn bg-red-600 hover:bg-red-700 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTouristSpot;
