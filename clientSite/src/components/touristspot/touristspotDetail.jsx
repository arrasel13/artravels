import axios from "axios";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/authprovider";

const TouristSpotDetail = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  const singleItem = useLoaderData();
  // console.log(singleItem);

  const navigate = useNavigate();

  const handleDeleteSpot = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:500/all-tourist-spot/${_id}`)
          .then((data) => {
            // console.log(data.data);
            if (data.data.deletedCount > 0) {
              Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                },
              }).fire({
                icon: "success",
                title: "Tourist spot is deleted successfully!",
              });
            }

            navigate("/all-tourist-spot");
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div className="container mx-auto pt-12">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">{singleItem.name}</h1>
            <p>
              <strong>Area: </strong>
              {singleItem.area} sq km
            </p>
            <p>
              <strong>Far from Dhaka: </strong>
              {singleItem.distance} km
            </p>
            <p>
              <strong>Famous for: </strong>
              {singleItem.famousFor}
            </p>
            <div className="space-y-2">
              <p>
                <strong>Tourist Points: </strong>
              </p>
              <ul className="list-disc list-inside ml-5">
                <li>
                  <strong>{singleItem.tourist_point_name1}</strong>:{" "}
                  {singleItem.tourist_point_desc1}
                </li>
                <li>
                  <strong>{singleItem.tourist_point_name2}</strong>:{" "}
                  {singleItem.tourist_point_desc2}
                </li>
                <li>
                  <strong>{singleItem.tourist_point_name3}</strong>:{" "}
                  {singleItem.tourist_point_desc3}
                </li>
              </ul>
            </div>

            <p>
              <strong>Description:</strong> {singleItem.description}
            </p>
          </div>

          {user && (
            <>
              <div className="space-x-3 mt-12">
                <Link
                  to={`/edit-touristspot/${singleItem._id}`}
                  state={location.pathname}
                >
                  <button className="btn btn-primary">
                    <CiEdit className="text-2xl text-white" />
                  </button>
                </Link>

                <button
                  onClick={() => handleDeleteSpot(singleItem._id)}
                  className="btn btn-error"
                >
                  <RiDeleteBin6Line className="text-2xl text-white" />
                </button>
              </div>
            </>
          )}
        </div>

        <div>
          <img src={singleItem.photo} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TouristSpotDetail;
