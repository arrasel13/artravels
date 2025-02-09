import axios from "axios";
import { useEffect, useState } from "react";
import TouristSpot from "./touristspot";

const AllTouristSpot = () => {
  const [allTouristSpot, setAllTouristSpot] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:500/all-tourist-spot")
      .then((data) => {
        // console.log(data.data);
        setAllTouristSpot(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12">
        {allTouristSpot.map((tspot) => (
          <TouristSpot key={tspot._id} tspot={tspot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
