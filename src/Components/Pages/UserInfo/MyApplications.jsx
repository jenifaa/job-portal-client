import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Loading from "../Loading";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const MyApplications = () => {
  const { user, loading } = useAuth(); // Make sure `useAuth` correctly returns a `user` object
  const [apply, setApply] = useState([]);
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setApply(data))
        .catch((err) => setError(err.message));
    }
  }, [user?.email]);
  if (loading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/job-application/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Application has been deleted.",
                icon: "success",
              });

              setApply(apply.filter(applyJob => applyJob.job_id != id))
            }
          });
      }
    });
  };

  return (
    <div>
      <h2>My Applications: {apply.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Company</th>
              <th>Job</th>
              <th>JobType</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {apply.map((applyJob) => (
              <tr key={applyJob._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={applyJob.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{applyJob.company}</div>
                      <div className="text-sm opacity-50">
                        {applyJob.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {applyJob.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {applyJob.category}
                  </span>
                </td>
                <td>{applyJob.jobType}</td>
                <th>
                  <button onClick={() => handleDelete(applyJob.job_id)} className="text-xl text-red-600">
                    <MdDeleteForever />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
