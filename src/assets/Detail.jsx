import React, { useEffect } from "react";
import phone1 from "../assets/task-img2.png";
import phone2 from "../assets/task-img3.png";
import phone3 from "../assets/task-img4.png";
import Aos from "aos";

const Detail = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          easing: "ease", 
          once: false, 
        });
      }, []);
    return (
        <section className="w-full py-16 bg-white bg-gradient-to-br from-[#9DFF9933]/20 via-white to-[#9DFF9933]/40">
            <div className="w-11/12 mx-auto px-4 md:px-6">
                {/* Top Heading */}
                <div className="text-center mb-16 px-4">
                    <h2 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212B36]">
                        Build for <span className="text-green-600">Everyone</span>
                    </h2>
                    <p data-aos="fade-up" className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Whether you're booking services, managing tasks, or running operations, we've designed the perfect experience for you.
                    </p>
                </div>

                <div className="w-11/12 mx-auto flex flex-col space-y-20">
                    {/* --- Row 1 --- */}
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="flex flex-col md:flex-row items-center md:justify-between gap-12">
                        {/* Text */}
                        <div className="md:w-1/2 text-start md:text-left">
                            <span className="inline-block  text-[#3BA334] border border-[#3BA334] text-sm font-medium px-3 py-1 rounded-full mb-4">
                                Users
                            </span>
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                Book services, track progress <br /> and stay updated
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.
                            </p>
                            <ul className="text-gray-700 space-y-2 list-none">
                                <li className="border-l-3 pl-2 border-[#3BA334]">Book services in seconds</li>
                                <li className="border-l-3 pl-2 border-[#3BA334]">Track real-time job updates</li>
                                <li className="border-l-3 pl-2 border-[#3BA334]">Schedule appointments at your convenience</li>
                            </ul>
                        </div>
                        {/* Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src={phone1}
                                alt="users"
                                className="max-w-[200px] md:max-w-[300px] lg:max-w-[350px]"
                            />
                        </div>
                    </div>

                    {/* --- Row 2 --- */}
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-12">
                        {/* Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src={phone2}
                                alt="business owners"
                                className="max-w-[200px] md:max-w-[300px] lg:max-w-[350px]"
                            />
                        </div>
                        {/* Text */}
                        <div className="md:w-1/2 text-start md:text-left">
                            <span className="inline-block text-[#3BA334] border border-[#3BA334] text-sm font-medium px-3 py-1 rounded-full mb-4">
                                Business Owners
                            </span>
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                Assign jobs, monitor performance, <br /> and streamline operations
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Gain full control of your workforce with real-time tracking, smart scheduling,
                                and service management in one app.
                            </p>
                            <ul className="text-gray-700 space-y-2 list-none">
                                <li className="border-l-3 pl-2 border-[#3BA334]">Assign jobs to the right team member</li>
                                <li className="border-l-3 pl-2 border-[#3BA334]">Monitor performance in real-time</li>
                                <li className="border-l-3 pl-2 border-[#3BA334]">Manage clients and services seamlessly</li>
                            </ul>
                        </div>
                    </div>

                    {/* --- Row 3 --- */}
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="flex flex-col md:flex-row items-center md:justify-between gap-12">
                        {/* Text */}
                        <div className="md:w-1/2 text-start md:text-left">
                            <span className="inline-block text-[#3BA334] border border-[#3BA334] text-sm font-medium px-3 py-1 rounded-full mb-4">
                                Employees
                            </span>
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                See tasks, track time, and navigate <br /> routes with ease
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Everything you need to manage your workday from job assignments
                                to optimized routes and time logging.
                            </p>
                            <ul className="text-gray-700 space-y-2 list-none">
                                <li className="border-l-3 pl-2 border-[#3BA334]"> Assign jobs to the right team member</li>
                                <li className="border-l-3 pl-2 border-[#3BA334]"> Monitor performance in real-time</li>
                                <li className="border-l-3 pl-2 border-[#3BA334]"> Manage clients and services seamlessly</li>
                            </ul>
                        </div>
                        {/* Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src={phone3}
                                alt="employees"
                                className="max-w-[200px] md:max-w-[300px] lg:max-w-[350px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;