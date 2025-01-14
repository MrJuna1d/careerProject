const features = [
  {
    title: "Fast Performance",
    description: "Experience blazing fast speeds with our platform.",
    color: "text-blue-500",
  },
  {
    title: "Professional Tools",
    description: "Get access to tools tailored for your profession.",
    color: "text-green-500",
  },
  {
    title: "Customer Support",
    description: "Our support team is here to help you 24/7.",
    color: "text-red-500",
  },
  {
    title: "Innovative Solutions",
    description: "Stay ahead with cutting-edge technologies.",
    color: "text-yellow-500",
  },
];

const Jcl = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center w-[653px] h-[108px] mx-[400px]">
        <h1 className="text-[48px] font-bold">Job Category List</h1>
        <p className="text-[16px]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mx-[200px] mt-[32px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#7f8efe1A] to-[#9575ff1A] text-left font-bold p-[20px] border rounded-lg w-[250px] h-[143px] "
          >
            <div>Icon</div>
            <h3 className="text-sm font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-xs">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jcl;
