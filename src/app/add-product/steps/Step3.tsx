const StepThree = () => {
    return (
      <div>
        <h2 className="text-lg font-bold">Step 3: Pricing & Stock</h2>
        <form className="mt-4 flex flex-col gap-4">
          <input
            type="number"
            placeholder="Price ($)"
            className="w-full rounded-lg border p-2"
          />
          <input
            type="number"
            placeholder="Stock Quantity"
            className="w-full rounded-lg border p-2"
          />
        </form>
      </div>
    );
  };
  