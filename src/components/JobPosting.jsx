import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function JobPosting() {
  const [jobData, setJobData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=${id}`
        );

        const data = await response.json();

        if (Array.isArray(data.jobs)) {
          const job = data.jobs.find((job) => job.jobTitle === id);
          setJobData(job || {});
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, [id]); // Dependency: fetch data when `id` changes

  if (!jobData) {
    return <div>Loading...</div>;
  }

  console.log(`job companyName: ${setJobData}`);
  return (
    <div className="w-[1035px] mx-[200px] h-80  my-[130px] flex ">
      <div className="w-[872px]">
        <h1>
          <span className="font-bold">Company</span>:{" "}
          {jobData.companyName || "N/A"}
        </h1>
        <br />
        <p>
          <span className="font-bold">Job Description:</span>{" "}
          {jobData.jobExcerpt}
        </p>
      </div>
      <div className="gap-2 flex flex-col">
        <div className="bg-gradient-to-r from-[#7f8efe1A] to-[#9575ff1A] p-[20px] border rounded-lg gap-3 flex flex-col">
          <div className="">
            <p className="border border-b-black pb-3 font-bold">Job Details</p>
            <div className="">
              <p className="mb-2 mt-3">
                <span className="font-bold">Salary:</span>{" "}
                {jobData.annualSalaryMin
                  ? `${jobData.salaryCurrency} ${jobData.annualSalaryMin} - ${jobData.annualSalaryMax}`
                  : "N/A"}
              </p>
              <p>
                <span className="font-bold">Job Title</span>: {jobData.jobTitle}
              </p>
            </div>
          </div>
          <div className="">
            <p className="border border-b-black pb-3 font-bold">
              Contact Information
            </p>
            <p className="mt-3">Address: {jobData.jobGeo} </p>
          </div>
        </div>
        <button
          onClick={() => navigate(jobData.url)}
          className="rounded-lg bg-gradient-to-r from-[#7f8efe] to-[#9575ff] text-white h-15 p-2"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobPosting;
