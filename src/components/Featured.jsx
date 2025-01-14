import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayJobs, setDisplayJobs] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Featured: " + data.jobs);
        setJobs(data.jobs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // console.log(`set jobs in feature: ${setJobs}`);
  // console.log(`Featured JOBS: ${jobs}`);
  const loadMore = () => {
    setDisplayJobs((prev) => prev + 4);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="">
      <div className="flex flex-col justify-between items-center w-[653px] h-[108px] mx-[400px]">
        <h1 className="text-[48px] font-bold">Featured Jobs</h1>
        <p className="text-[16px] mb-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-5 w-[1000px] h-[392px]">
          {jobs.slice(0, displayJobs).map((job, index) => (
            <div key={index} className="border border-gray-400 p-4 space-y-2">
              <img
                src={job.companyLogo}
                alt="Company Logo"
                className="w-20 h-20 object-contain my-2"
              />
              <h2 className="font-bold">{job.jobTitle}</h2>
              <p className="text-xs">{job.companyName}</p>
              <div className="flex items-center gap-7">
                <p className="text-sm">{job.jobGeo}</p>
                <p className="text-sm">
                  Salary: {job.annualSalaryMin} - {job.annualSalaryMax}
                </p>
              </div>
              <button
                onClick={() => navigate(`/JobPosting/${job.jobTitle}`)}
                className="px-[10px] py-[9px] rounded-lg bg-gradient-to-r from-[#7f8efe] to-[#9575ff] text-white w-[157px]"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-40">
        {displayJobs < jobs.length && (
          <button
            onClick={loadMore}
            className="px-[10px] py-[9px] rounded-lg bg-gradient-to-r from-[#7f8efe] to-[#9575ff] text-white w-[157px]"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Featured;
