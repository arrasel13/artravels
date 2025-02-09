import { useContext } from "react";
import registerImg from "../../assets/images/register-img.jpg";
import { AuthContext } from "../../providers/authprovider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        console.log("User created Successfully");

        const createdAt = result.user?.metadata?.creationTime;
        const user = { name, photo, email, createdAt };

        axios
          .post("http://localhost:500/users", user)
          .then((data) => {
            // console.log(data.data);
            if (data.data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User Created Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });

        e.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mx-auto py-12">
      <div className="w-full flex items-center justify-center p-8 rounded-xl gap-10 bg-slate-100">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-10">Register</h2>

          <form onSubmit={handleCreateUser}>
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Your name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Profile Image</span>
                </div>
                <input
                  type="text"
                  name="photo"
                  placeholder="Profile Image URL"
                  className="input input-bordered w-full"
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email ID</span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="input input-bordered w-full"
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="mt-5">
              <input
                type="submit"
                value="Sign Up"
                className="w-full btn bg-red-600 hover:bg-red-700 text-white"
              />
            </div>
          </form>
        </div>

        <div className="flex-1">
          <img className="rounded-xl w-full" src={registerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
