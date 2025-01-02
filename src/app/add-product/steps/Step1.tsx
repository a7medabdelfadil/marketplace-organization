const Step1 = () => {
    return (
      <div>
        <h2 className="text-lg font-bold">Step 1: Product Details</h2>
        <form className="mt-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full rounded-lg border p-2"
          />
          <textarea
            placeholder="Product Description"
            className="w-full rounded-lg border p-2"
          ></textarea>
        </form>
      </div>
    );
  };
  