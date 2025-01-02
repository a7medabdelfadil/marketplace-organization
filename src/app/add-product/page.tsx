/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaUpload } from "react-icons/fa6";
import { TbPhotoPlus } from "react-icons/tb";
import Button from "~/_components/Button";

const AddProduct = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const cancel = () => {
    toast.success("Product added Canceled successfully");
    router.push("/");
  };

  return (
    <>
      <Container>
        <Box className="my-8 flex justify-center pb-[120px] md:pb-[20px]">
          <div className="flex w-3/4 flex-col items-center p-4 md:p-8">
            <div className="my-4 flex w-full justify-center gap-8">
              {[
                { step: 1, label: "Product Information" },
                { step: 2, label: "Product Detail Information" },
                { step: 3, label: "Product Variant Creation" },
                { step: 4, label: "Logistics and Shipment" },
                { step: 5, label: "Bulk Purchase Discounts" },
              ].map(({ step, label }) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      currentStep >= step
                        ? "border-primary2 bg-primary2 text-white"
                        : "border-primary2 text-primary2"
                    }`}
                  >
                    {step}
                  </div>

                  <Text
                    font="bold"
                    size="sm"
                    className="mt-1"
                    color={currentStep >= step ? "default" : "gray"}
                  >
                    {label}
                  </Text>
                </div>
              ))}
            </div>

            <Box border="none" shadow="none" className="mt-4 w-full">
              {currentStep === 1 && <StepOne />}
              {currentStep === 2 && <StepTwo previousStep={previousStep} />}
              {currentStep === 3 && <StepThree previousStep={previousStep} />}
              {currentStep === 4 && <StepFour previousStep={previousStep} />}
              {currentStep === 5 && <StepFive previousStep={previousStep} />}
            </Box>

            <div className="mt-4 flex w-full justify-between gap-4 p-4">
              <div className="w-40">
                <Button
                  theme="outline"
                  onClick={cancel}
                  className="cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary"
                >
                  Cancel
                </Button>
              </div>
              <div className="w-[336px] flex gap-4">
                <Button
                  theme="outline"
                  className="cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary"
                >
                  Save As a draft
                </Button>
                <Button
                  onClick={nextStep}
                  className="rounded-lg bg-primary2 px-4 py-2 font-bold text-white hover:bg-primary2"
                  disabled={currentStep === 5}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};

const StepOne = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      <Text color={"primary2"} size={"2xl"} font={"bold"}>
        Product Information
      </Text>
      <form className="mt-4 flex flex-col gap-4">
        <Input
          label="Product Name"
          border="gray"
          type="text"
          placeholder="Enter the product name"
          theme="transparent"
        />
        <Input
          label="Product Short Description"
          border="gray"
          type="text"
          placeholder="Enter product short description"
          theme="transparent"
        />

        <Input
          id="product-image"
          name="product-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div
          onClick={() => document.getElementById("product-image")?.click()}
          className="mt-2 flex h-32 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-borderPrimary text-textSecondary"
        >
          <div className="flex flex-col items-center">
            <TbPhotoPlus size={50} />
            {fileName ? (
              <p className="mt-2 text-textPrimary">{fileName}</p>
            ) : (
              <p className="mt-2 text-textSecondary">Browse or Desktop</p>
            )}
          </div>
        </div>

        <Input
          label="Product Description"
          border="gray"
          type="text"
          placeholder="A detailed description of the product helps customers to learn more about the product."
          theme="transparent"
          className="pb-14"
        />
        <div className="flex items-center justify-start gap-4">
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="currency">
              Product Price Currency
            </label>
            <select
              name="currency"
              id="currency"
              className="mt-1 block w-48 rounded-md border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
            >
              <option value="unselected">Unselected</option>
              <option value="$">$</option>
              <option value="PE">PE</option>
            </select>
          </div>

          <div className="w-80">
            <Input
              label="Product Price"
              type="number"
              theme="transparent"
              className="w-full"
              border="gray"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const StepTwo = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline size={25} className="text-textSecondary" />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          Back
        </Text>
      </div>
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

const StepThree = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline size={25} className="text-textSecondary" />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          Back
        </Text>
      </div>
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

const StepFour = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline size={25} className="text-textSecondary" />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          Back
        </Text>
      </div>
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

const StepFive = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline size={25} className="text-textSecondary" />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          Back
        </Text>
      </div>
      <h2 className="text-lg font-bold">Step 5: Confirm & Submit</h2>
      <p className="mt-4 text-gray-700">
        Review your product details and click submit to add the product.
      </p>
      <button className="mt-4 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600">
        Submit
      </button>
    </div>
  );
};

export default AddProduct;
