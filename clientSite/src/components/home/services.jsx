import { FaBed } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { FaTrain } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";

const Services = () => {
  return (
    <div className="text-center py-24">
      <h2 className="text-4xl mb-10">Our services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="p-8 space-y-3">
          <p className="border p-6 rounded-full bg-red-600 text-white text-3xl inline-block">
            <FaBed />
          </p>
          <h3 className="text-2xl">Hotel Booking</h3>
          <p>
            We will help you to booking a comfortable and best Hotel at a very
            cheapest price
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="border p-6 rounded-full bg-red-600 text-white text-3xl inline-block">
            <MdFlightTakeoff />
          </p>
          <h3 className="text-2xl">Air Tickets</h3>
          <p>
            We will help you to booking a comfortable and best Hotel at a very
            cheapest price
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="border p-6 rounded-full bg-red-600 text-white text-3xl inline-block">
            <FaTrain />
          </p>
          <h3 className="text-2xl">Transport Rentals</h3>
          <p>
            We will help you to booking a comfortable and best Hotel at a very
            cheapest price
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="border p-6 rounded-full bg-red-600 text-white text-3xl inline-block">
            <FaShip />
          </p>
          <h3 className="text-2xl">River Cruise</h3>
          <p>
            We will help you to booking a comfortable and best Hotel at a very
            cheapest price
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="border p-6 rounded-full bg-red-600 text-white text-3xl inline-block">
            <FaCity />
          </p>
          <h3 className="text-2xl">City Sightseeing</h3>
          <p>
            We will help you to booking a comfortable and best Hotel at a very
            cheapest price
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="border p-6 rounded-full bg-red-600 text-white text-3xl inline-block">
            <FaRegMap />
          </p>
          <h3 className="text-2xl">Package tour</h3>
          <p>
            We will help you to booking a comfortable and best Hotel at a very
            cheapest price
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

// 
