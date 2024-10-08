export default function PropertyCard({ name, rent, occupancy }) {
    return (
      <div className="w-full h-[30vh] my-5 flex overflow-hidden rounded-xl bg-black justify-between relative">
        <div className="flex flex-col justify-between pl-8 py-7 z-10">
          <p className="poppins-semibold text-2xl">{name}</p>
          <div>
            <p className="poppins-medium">{rent} per month</p>
            <p className="poppins-medium">{occupancy} sharing</p>
          </div>
        </div>
        <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black from-50%"></span>
        <img className="w-1/2 h-full" src="images/home-down.png" alt="" />
      </div>
    );
  }
  