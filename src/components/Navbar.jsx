const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-[200px] pt-[30px]">
      <h2>CareerHub</h2>
      <ul className="flex gap-10">
        <li>Statistics</li>
        <li>Applied Jobs</li>
        <li>Blog</li>
      </ul>
      <button className="px-[18px] py-[9px] rounded-lg bg-gradient-to-r from-[#7f8efe] to-[#9575ff] text-white">
        Start Applying
      </button>
    </nav>
  );
};

export default Navbar;
