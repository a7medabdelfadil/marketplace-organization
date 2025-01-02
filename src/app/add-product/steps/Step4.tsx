const StepFour = () => {
    return (
      <div>
        <h2 className="text-lg font-bold">Step 4: Categories</h2>
        <form className="mt-4 flex flex-col gap-4">
          <select className="w-full rounded-lg border p-2">
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Kitchen</option>
          </select>
          <input
            type="text"
            placeholder="Tags (comma separated)"
            className="w-full rounded-lg border p-2"
          />
        </form>
      </div>
    );
  };
  