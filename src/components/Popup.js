import Image from "next/image";

const Popup = ({ title, content, imgSrc, onClose }) => {
  const scrollToSubscribe = () => {
    // Close the modal
    onClose();
    // Scroll to the Subscribe section
    document.getElementById("subscribe-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-lg p-8 w-[90%] max-w-4xl mx-auto transition-transform transform scale-95 lg:scale-100">
        <button
          className="absolute top-4 right-4 text-purple-600 hover:text-red-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600">{title}</h2>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <Image src={imgSrc} alt={title} width={400} height={300} className="rounded-lg shadow-md" />
          <p className="text-lg leading-relaxed">{content}</p>
        </div>
       <div className="mt-6 flex justify-end">
          {/* Button that closes the modal and scrolls to Subscribe */}
          <button
            onClick={scrollToSubscribe}
            className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Go to Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
