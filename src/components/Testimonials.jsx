
import React from "react";
import user1 from "../assets/profile1.png";
import user2 from "../assets/profile2.png";
import user3 from "../assets/profile3.png";
import quoteIcon from "../assets/quote.png"; 

// === Magic Hover Wrapper ===
const clsx = (...args) => args.filter(Boolean).join(" ");
const MagicContainer = ({ children, className }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative rounded-3xl p-[1px] transition-all duration-300",
        className
      )}
      style={{
        background: isHovered
          ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, #3BA334, #0F3B34, #ECFCEB,#3BA334, transparent 80%)`
          : "rgba(255, 255, 255, 0.05)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-3xl p-6 h-full">{children}</div>
    </div>
  );
};

// === Testimonials Section ===
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Farzana H.",
      role: "Owner, CleanPro Services",
      text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
      image: user1,
    },
    {
      id: 2,
      name: "Ahmed R.",
      role: "Technician",
      text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
      image: user2,
    },
    {
      id: 3,
      name: "Farzana H.",
      role: "Rafiq M., Homeowner",
      text: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
      image: user3,
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-t from-[#9DFF9933]/20 via-[#9DFF9933]/30 to-[#9DFF9933]/20">
      <div className="w-11/12 mx-auto text-center mb-12">
        <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#212B36]">
          What Our Users Are Saying
        </h2>
        <p data-aos="fade-up" className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Real stories from clients, employees, and business owners who use our
          app every day.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div data-aos="zoom-in-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto px-4 md:px-6 ">
        {reviews.map((review) => (
          <MagicContainer key={review.id}>
            <div className="flex flex-col h-full justify-between text-left p-4">
              {/* Top user info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              {/* Feedback with background icon */}
              <div className="relative">
                {/* Quote icon in background */}
                <img
                  src={quoteIcon}
                  alt="quote"
                  className="absolute top-0 left-0 w-15 h-15 opacity-99 "
                />
                <p className="relative ml-3 mt-6 text-gray-600 z-10">{review.text}</p>
              </div>
            </div>
          </MagicContainer>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;