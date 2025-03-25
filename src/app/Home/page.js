import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex z-10 flex-col w-screen h-screen bg-background">
      {/* Header Section*/}
      <div className="flex justify-center top-1 w-full">
        <Header className="z-10" />
        {/* <Header onSearch={handleSearch} className="z-10" /> */}
        {/* <Separator className="w-auto" /> */}
      </div>
      {/* Main Body */}
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-9xl">Welcome To GiGPluG</h1>
        <p>Your Ultime Job Finder</p>
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
