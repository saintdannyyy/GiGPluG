import { Header } from "@/components/Header";
import Image from "next/image";
import people from "../../public/images/people.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Building,
  MapPin,
  PlusCircle,
  Search,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import CountUp from "react-countup";

export default function Home() {
  const stats = [
    {
      value: 175324,
      label: "Live Jobs",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      color:
        "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800",
    },
    {
      value: 97354,
      label: "Companies",
      icon: <Building className="w-6 h-6 text-green-600" />,
      color:
        "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800",
    },
    {
      value: 3847154,
      label: "Candidates",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      color:
        "bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800",
    },
    {
      value: 7532,
      label: "New Jobs",
      icon: <PlusCircle className="w-6 h-6 text-orange-600" />,
      color:
        "bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800",
    },
  ];

  return (
    <div className="flex z-10 flex-col w-screen h-screen bg-background">
      {/* Header Section*/}
      <div className="flex justify-center top-1 w-full">
        <Header className="z-10" />
        {/* <Header onSearch={handleSearch} className="z-10" /> */}
      </div>
      {/* Main Body */}
      <div className="w-full flex flex-col items-center justify-center px-[10%]">
        {/* Info */}
        <div className="w-full flex flex-row items-center justify-center border-r-primary-foreground pt-10">
          <div className="flex flex-col w-[50%] items-start justify-center">
            <h1 className="text-5xl font-semibold text-left">
              Let Us Plug You To <br />
              <span className="text-blue-600 mt-20">Your Next Gig</span>
            </h1>
            <p className="text-lg mt-3">
              Whether it’s your next 9-5 or a Freelance gig
            </p>
            <p className="text-lg mt-3"></p>
            <p className="text-lg mt-3">We’re the plug</p>
            <p className="text-lg mt-3">Sign up now</p>
            <div className="border border-gray-300 w-[70%] rounded-sm hidden md:flex items-center space-x-1 p-3">
              {/* Job Search Bar - Only visible on homepage */}
              <div className="bg-white py-2 px-4 w-full">
                <div className="flex flex-row items-center justify-between container mx-auto space-x-4">
                  <div className="relative flex-1">
                    <Search
                      color="#0A65CC"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      type="text"
                      placeholder="Job title, keyword, company"
                      className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative flex-1">
                    <MapPin
                      color="#0A65CC"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <Button variant={"primary"}>Find Job</Button>
                </div>
              </div>
            </div>
            <p>
              <span className="text-gray-500">Suggestion:</span>
              Designer, Programming, Digital Marketing, Video Animation
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={people} alt="people" width={500} height={500} />
          </div>
        </div>
        {/* fun fact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto px-4 py-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${stat.color}`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* <div className="product-list grid grid-cols-5">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              productImage={product.images[0] ?? "default-image-path.jpg"}
              productName={product.name}
              productPrice={product.retail_price}
              availability={product.stock}
              onClick={onProductClick}
              onDoubleClick={onProductDoubleClick}
              setProductQuantities={setProductQuantities}
            />
            // <p onClick={() => onProductClick(product)}>{product.name}</p>
          );
        })}
        {products.length === 0 && (
          <Card className="bg-red-500 w-36 h-28 flex items-center justify-center">
            <p className="font-bold text-center text-white p-2">
              No products found
            </p>
          </Card>
        )}
        <style jsx>{`
          .product-list {
            display: grid;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 10px;
            gap: 5px;
            justify-items: center;
            align-items: center;
            margin: 0 auto;
          }
        `}</style>
      </div> */}
    </div>
  );
}

/* <div className="flex flex-grow h-full w-screen overflow-y-hidden">
  {/* Checkout Section */

/* <div className="lg:flex min-w-[510px] hidden">
    <Checkout selectedProducts={selectedProducts} productQuantities={productQuantities} setSelectedProducts={setSelectedProducts} />
  </div> */

/* Products Grid */

/* <div className="flex-grow w-full overflow-y-scroll">
    <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />
    <ProductList
      products={filteredProducts}
      onProductClick={handleProductClick}
      onProductDoubleClick={handleProductDoubleClick}
      setProductQuantities={setProductQuantities}
    />
  </div>
</div> */
