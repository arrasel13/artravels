import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-img.jpg";

const Hero = () => {
  return (
    <div
      className="hero min-h-[600px] rounded-xl"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome AR Travels</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link
            to="/login"
            className="btn border-none bg-red-600 hover:bg-red-700 text-white"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
