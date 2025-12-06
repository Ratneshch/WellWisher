import React from 'react'

const Dealership = () => {
  return (
    <div className="relative w-full h-[350px] sm:h-[280px] md:h-[300px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://s7ap1.scene7.com/is/image/tatamotors/safari-book-test-drive?$B-1228-488-D$&fit=crop&fmt=avif-alpha"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="car"
      />

      {/* Yellow Content Box */}
      <div className="absolute top-1/2 left-1/2 sm:left-10 -translate-x-1/2 sm:-translate-x-0 -translate-y-1/2
                      bg-[#E8C12F] text-black p-4 sm:p-10 max-w-xs sm:max-w-lg shadow-xl relative">
        {/* Small triangular pointer */}
        <div
          className="absolute -left-3 sm:-left-4 top-10 w-0 h-0
                     border-t-[10px] sm:border-t-[15px] border-t-transparent
                     border-b-[10px] sm:border-b-[15px] border-b-transparent
                     border-r-[10px] sm:border-r-[15px] border-r-[#E8C12F]"
        />

        <h2 className="text-xl sm:text-3xl font-extrabold leading-tight">
          CAR DEALERSHIP <br />WELLWISHER CARS
        </h2>

        <p className="text-xs sm:text-sm mt-3 sm:mt-5 font-medium opacity-90 leading-relaxed">
          With specialists on hand to help with any part of the car shopping or
          vehicle ownership experience. We provide financing, car service and a
          great selection of vehicles for luxury car shoppers.
        </p>
      </div>
    </div>
  )
}

export default Dealership
