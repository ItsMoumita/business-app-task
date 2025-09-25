import React from "react";
import { LuCalendarCheck, LuChartSpline  } from "react-icons/lu";
import { PiCrosshairFill } from "react-icons/pi";
import { IoShieldOutline } from "react-icons/io5";

const Services = () => {
  return (
    <section data-aos="zoom-in-up" className="w-full py-16 bg-gradient-to-br from-[#9DFF9933]/20 via-white to-[#9DFF9933]/20">
      <div className="w-11/12 mx-auto px-4 md:px-6 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col items-start text-left space-y-3 pl-6 pt-4 border-l border-white hover:-translate-y-2 hover:shadow-lg hover:border-green-200 cursor-pointer">
            <div className="p-3 bg-[#ECFCEB] rounded-xl">
              <LuCalendarCheck className="text-[#3BA334] w-7 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Easy Service Booking
            </h3>
            <p className="text-sm lg:w-[70%] text-gray-600">
              Streamlined booking process for clients with service catalogs
              and availability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start text-left space-y-3 pl-6 pt-4 border-l border-[#F4F6F8]  hover:-translate-y-2 hover:shadow-lg hover:border-green-200 cursor-pointer">
            <div className="p-3 bg-[#ECFCEB] rounded-xl">
              <PiCrosshairFill  className="text-[#3BA334] w-7 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Real-Time Tracking
            </h3>
            <p className="text-sm lg:w-[70%] text-gray-600">
              Monitor job progress, employee hours, and project timelines 
              with live updates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start text-left space-y-3 lg:border-l border-[#F4F6F8] pl-6  pt-4 hover:-translate-y-2 hover:shadow-lg hover:border-green-200 cursor-pointer">
            <div className="p-3 bg-[#ECFCEB] rounded-xl">
              <LuChartSpline className="text-[#3BA334] w-7 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Performance Analytics
            </h3>
            <p className="text-sm lg:w-[70%] text-gray-600">
              Comprehensive reporting and insights to improve business
              operations and efficiency.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-start text-left space-y-3 border-l border-[#F4F6F8] pl-6 pt-4 hover:-translate-y-2 hover:shadow-lg hover:border-green-200 cursor-pointer">
            <div className="p-3 bg-[#ECFCEB] rounded-xl">
              <IoShieldOutline className="text-[#3BA334] w-7 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Secure & Reliable
            </h3>
            <p className="text-sm lg:w-[70%] text-gray-600">
              Enterprise-grade security with 99.9% uptime guarantee and 
              data protection.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;