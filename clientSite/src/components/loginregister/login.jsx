import { useContext } from "react";
import loginImg from "../../assets/images/login-img.jpg";
import { AuthContext } from "../../providers/authprovider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    // const user = { email, password };
    // console.log(user);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log("User created Successfully", user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mx-auto py-12">
      <div className="w-full flex items-center justify-center p-8 rounded-xl gap-10 bg-slate-100">
        <div className="flex-1">
          <img className="rounded-xl w-full" src={loginImg} alt="" />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-10">Login</h2>

          <form onSubmit={handleLoginUser}>
            <div className="space-y-3">
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
                value="Sign In"
                className="w-full btn bg-red-600 hover:bg-red-700 text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
