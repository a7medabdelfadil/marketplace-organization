/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Box from "~/_components/Box";
import CartItems from "~/_components/CartItems";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { IoMdArrowForward } from "react-icons/io";
import Button from "~/_components/Button";
import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Products from "~/_components/Porducts";
import { useRouter } from "next/navigation";

const Market = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("product");
  const [search, setSearch] = useState("");

  const handleButtonClick = (button: any) => {
    setSelected(button);
  };

  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/computer.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/mobile.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/airpods.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/airpods.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 5,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/mobile.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 6,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/computer.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
  ];

  const cartItemsService = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/service.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/service.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/service.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/service.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 5,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/service.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 6,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/service.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/iphone.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/iphone.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
  ];

  const productsService = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/service.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/service.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
  ];

  const handleAddProductClick = () => {
    router.push("/add-product");
  }

  return (
    <>
      <Container>
        <div className="flex items-center">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="mb-2 hidden min-w-[250px] lg:block">
              <Text font={"bold"} className="text-2xl md:text-4xl">
                Market Place
              </Text>
            </div>
            <div className="hidden justify-between text-center max-[502px]:grid max-[502px]:justify-center md:flex">
              <div className="mb-3 hidden md:block">
                <label htmlFor="icon" className="sr-only">
                  Search
                </label>
                <div className="relative md:min-w-80">
                  <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                    <svg
                      className="size-4 flex-shrink-0 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    id="icon"
                    name="icon"
                    className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 flex w-full justify-end">
            <div className="flex w-[220px] items-center gap-4 md:w-fit">
              <GrFavorite size={40} color="red" />
              <HiOutlineShoppingCart size={40} className="text-primary" />
              {selected === "product" ? (
                <Button onClick={handleAddProductClick}>Add Product</Button>
              ) : (
                <Button>Add Service</Button>
              )}
            </div>
          </div>
        </div>
        <Box padding="0" className="pb-[120px] md:pb-[20px] md:my-8">
          <div className="flex w-1/5 gap-2 p-4">
            <div
              className={`${
                selected === "product" ? "bg-bgSecondary" : "bg-transparent"
              } flex min-w-[150px] cursor-pointer gap-2 rounded-xl px-6 py-4`}
              onClick={() => handleButtonClick("product")}
            >
              <img
                src="/images/product.png"
                alt="Product"
                className="w-[25px]"
              />
              <Text font={"bold"}>Product</Text>
            </div>
            <div
              className={`${
                selected === "service" ? "bg-bgSecondary" : "bg-transparent"
              } flex min-w-[150px] cursor-pointer gap-2 rounded-xl px-6 py-4`}
              onClick={() => handleButtonClick("service")}
            >
              <img
                src="/images/services.png"
                alt="Service"
                className="w-[25px]"
              />
              <Text font={"bold"}>Service</Text>
            </div>
          </div>

          {selected === "product" ? (
            <div>
              <div className="mt-24 flex flex-col items-center justify-center gap-4">
                <div className="bg-bgThird flex flex-col items-center justify-center md:bg-bgPrimary">
                  <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                    <Text
                      font={"bold"}
                      className="text-center text-[30px] md:text-[42px] xl:text-[48px]"
                    >
                      Shop for Success:
                    </Text>
                    <Text
                      font={"bold"}
                      className="text-center text-[30px] md:text-[42px] xl:text-[48px]"
                    >
                      Study Tools You Need
                    </Text>
                    <Text
                      font={"medium"}
                      size={"xl"}
                      className="mt-4 text-center"
                    >
                      Explore our wide selection of products designed to enhance
                      your study experience. From essential supplies to
                      innovative tools, discover everything you need to stay
                      organized, focused, and motivated. Start equipping
                      yourself for academic excellence today.
                    </Text>
                  </div>
                  <div className="justify-between text-center max-[502px]:grid max-[502px]:justify-center md:flex">
                    <div className="mb-3 block w-full px-4 md:hidden">
                      <label htmlFor="icon" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-[300px]">
                        <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        </div>
                        <input
                          onChange={(e) => setSearch(e.target.value)}
                          type="text"
                          id="icon"
                          name="icon"
                          className="block w-full rounded-lg border border-borderPrimary bg-bgPrimary px-4 py-3 ps-11 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-500/50 disabled:pointer-events-none disabled:opacity-50"
                          placeholder="Searching for any product"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <img
                      src="/images/devices.png"
                      alt="Devices Photo"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                  <Text
                    font={"bold"}
                    className="text-center text-[30px] md:text-[42px] xl:text-[48px]"
                  >
                    View all products
                  </Text>
                  <Text
                    font={"medium"}
                    size={"xl"}
                    className="mt-4 text-center"
                  >
                    Find any product whether it&apos;s stuff you need for
                    studying
                  </Text>
                </div>
                <CartItems cartItems={cartItems} />
                <Link
                  rel="stylesheet"
                  href="/opream"
                  className="hover:bg-bgThird flex items-center gap-2 rounded border-2 border-borderSecondary px-6 py-4 font-semibold hover:border-primary2 hover:text-primary2"
                >
                  SEE ALL <IoMdArrowForward className="text-xl" />
                </Link>
                <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                  <Text
                    font={"bold"}
                    className="text-[30px] md:text-[42px] xl:text-[48px]"
                  >
                    Top product
                  </Text>
                </div>
              </div>
              <Products products={products} />
            </div>
          ) : (
            <div>
              <div className="mt-24 flex flex-col items-center justify-center gap-4">
                <div className="bg-bgThird flex flex-col items-center justify-center md:bg-bgPrimary">
                  <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                    <Text
                      font={"bold"}
                      className="text-center text-[30px] md:text-[42px] xl:text-[48px]"
                    >
                      Boost Your Learning Journey:
                    </Text>
                    <Text
                      font={"bold"}
                      className="text-center text-[30px] md:text-[42px] xl:text-[48px]"
                    >
                      Interactive Lessons, Study Kits, and Expert Advice
                    </Text>
                  </div>
                  <div className="justify-between text-center max-[502px]:grid max-[502px]:justify-center md:flex">
                    <div className="mb-3 block w-full px-4 md:hidden">
                      <label htmlFor="icon" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-[300px]">
                        <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        </div>
                        <input
                          onChange={(e) => setSearch(e.target.value)}
                          type="text"
                          id="icon"
                          name="icon"
                          className="block w-full rounded-lg border border-borderPrimary bg-bgPrimary px-4 py-3 ps-11 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-500/50 disabled:pointer-events-none disabled:opacity-50"
                          placeholder="Searching for any product"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:1/2 mt-8 flex w-full flex-col items-center p-4 md:w-2/3">
                  <Text
                    font={"bold"}
                    className="text-[30px] md:text-[42px] xl:text-[48px]"
                  >
                    View all Service
                  </Text>
                  <Text
                    font={"medium"}
                    size={"xl"}
                    className="mt-4 text-center"
                  >
                    Find services and resources to support your study needs!
                  </Text>
                </div>
                <CartItems cartItems={cartItemsService} />
                <Link
                  rel="stylesheet"
                  href="/opream"
                  className="hover:bg-bgThird flex items-center gap-2 rounded border-2 border-borderSecondary px-6 py-4 font-semibold hover:border-primary2 hover:text-primary2"
                >
                  SEE ALL <IoMdArrowForward className="text-xl" />
                </Link>
                <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                  <Text
                    font={"bold"}
                    className="text-[30px] md:text-[42px] xl:text-[48px]"
                  >
                    Top product
                  </Text>
                </div>
              </div>
              <Products products={productsService} />
            </div>
          )}
        </Box>
      </Container>
    </>
  );
};
export default Market;
