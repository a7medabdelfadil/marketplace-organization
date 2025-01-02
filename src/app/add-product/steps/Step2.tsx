const StepTwo = () => {
    return (
      <div>
        <h2 className="text-lg font-bold">Step 2: Upload Images</h2>
        <form className="mt-4 flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            multiple
            className="w-full rounded-lg border p-2"
          />
          <p className="text-sm text-gray-500">Upload multiple images.</p>
        </form>
      </div>
    );
  };
  