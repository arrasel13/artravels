import { Link } from "react-router-dom";

const TouristSpot = ({ tspot }) => {
  const {
    _id,
    name,
    famousFor,
    tourist_point_name1,
    tourist_point_name2,
    tourist_point_name3,
    photo,
  } = tspot;

  return (
    <>
      <div className="relative group bg-transparent flex items-center justify-center rounded-xl overflow-hidden">
        {/* Image with Hover Filter */}
        <div className="relative w-full h-[380px]">
          <img
            className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:blur-sm group-hover:brightness-50"
            src={photo}
          />
        </div>

        {/* Hidden Content - Appears with Slide Effect After Delay */}
        <div
          className="absolute inset-0 flex justify-center flex-col py-5 px-12
                opacity-0 translate-y-[-50%] transition-all duration-700 delay-100 
                group-hover:opacity-100 group-hover:translate-y-0"
        >
          <h3 className="text-white text-2xl font-bold">{name}</h3>
          <p className="text-gray-300 my-2">
            <strong className="text-white">Famous For: </strong>
            {famousFor}
          </p>
          <p className="text-white">
            <strong>Popular Places: </strong>
          </p>
          <ul className="text-white list-disc list-inside">
            <li>{tourist_point_name1}</li>
            <li>{tourist_point_name2}</li>
            <li>{tourist_point_name3}</li>
          </ul>
          <div className="mt-4">
            <Link to={`/touristspot-detail/${_id}`}>
              <button className="bg-white px-8 py-2 rounded-sm">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouristSpot;
