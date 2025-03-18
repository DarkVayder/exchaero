import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Cole Palmer",
    review: "Amazing currency exchange tool! The real-time updates are very helpful.",
    location: "West London, UK",
  },
  {
    name: "Nicolas Jackson",
    review: "Simple, fast, and reliable. I use this for tracking exchange rates daily.",
    location: "Senegal",
  },
  {
    name: "Enzo Fernandes",
    review: "The best currency app I’ve used. Highly recommended!",
    location: "Rezario, Argentina",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="py-12 bg-white text-center shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">What Our Users Say</h2>
      <div className="relative px-8">
        <p className="text-lg text-gray-700 font-semibold">&ldquo;{reviews[index].review}&rdquo;</p>
        <p className="mt-4 text-sm font-semibold text-gray-600">{reviews[index].name} - {reviews[index].location}</p>
        
        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center gap-6">
          <button onClick={prevReview} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextReview} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
