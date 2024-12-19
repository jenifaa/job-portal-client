const AddJobs = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-10 my-5">
        <input
          type="text"
          placeholder="title"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="location"
          className="input input-bordered w-full max-w-xs"
        />
         <input
          type="text"
          placeholder="applicationDeadline"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center items-center gap-10 my-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
           JobType
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
           Category
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <input
          type="text"
          placeholder="status"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center items-end gap-10 my-5">
      <div>
      <span className="label-text">Salary Range</span>
        <input
          type="text"
          placeholder="min"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
        <input
          type="text"
          placeholder="max"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="currency"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center items-center gap-10 my-5">
        <input
          type="text"
          placeholder="description"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="company"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center items-center gap-10 my-5">
        <input
          type="text"
          placeholder="requirements"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="responsibilities"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center items-center gap-10 my-5">
        <input
          type="text"
          placeholder="hr_email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="hr_name"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center items-center gap-10 my-5">
        <input
          type="text"
          placeholder="status"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="company logo"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default AddJobs;
