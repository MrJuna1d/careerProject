const Hero = () => {
  return (
    <div className="flex flex-col w-[570px] h-[511px] ml-[200px] mt-[100px] gap-7">
      <h1 className="text-[80px] font-bold w-[570px] leading-none">
        One Step Closer To Your{" "}
        <span className="bg-gradient-to-r from-[#7f8efe] to-[#9575ff] bg-clip-text text-transparent">
          Dream Job
        </span>
      </h1>
      <p className="text-[18px]">
        Explore thousands of job opportunities with all the information you
        need. Its your future. Come find it. Manage all your job application
        from start to finish.
      </p>
      <button className="px-[18px] py-[9px] rounded-lg bg-gradient-to-r from-[#7f8efe] to-[#9575ff] text-white w-max">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
