import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/authprovider";
import axios from "axios";
import TouristSpot from "../touristspot/touristspot";

const Mylist = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [mylists, setMylists] = useState([]);

  useEffect(() => {
    if (!email) return;

    axios
      .get(`http://localhost:500/my-list/${email}`)
      .then((response) => {
        // console.log(response.data);
        setMylists(response.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  return (
    <div className="container mx-auto">
      <h2 className="text-center pt-12 mb-10 text-3xl">My Added Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {mylists.length > 0 ? (
          mylists.map((tspot) => <TouristSpot key={tspot._id} tspot={tspot} />)
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Mylist;
