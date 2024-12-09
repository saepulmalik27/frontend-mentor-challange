import { Fragment, useCallback, useState } from "react";
import data from "./data.json";
import ProductCard from "./components/product-card";
import { TProduct } from "./types/product";
import  { Cart, CartFooter, CartHeader, CartList } from "./components/product-cart";
import { ResponsiveDialog } from "./components/responsive-dialog";

function App() {
  const [selectedProducts, setSelectedProducts] = useState<
    { product: TProduct; count: number }[]
  >([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOrder = () => {
    setOpenDialog(true);
  }

  const handleConfirmOrder = useCallback(() => {
    setOpenDialog(false);
    setSelectedProducts([]);
  }, [selectedProducts, openDialog]);

  const getTotalOrder = useCallback(() => {
    return selectedProducts
      .reduce((total, item) => total + item.product.price * item.count, 0)
      .toFixed(2);
  }, [selectedProducts]);

  const removeSelectedProduct = useCallback((productId : string) => {
      setSelectedProducts((prevSelectedProducts) =>
        prevSelectedProducts.filter(
          (selectedProduct) => selectedProduct.product.id !== productId
        )
      );
  }, [selectedProducts])

  const getOrderCount = useCallback((productId : string) => {
    return selectedProducts.find(
      (selectedProduct) => selectedProduct.product.id === productId
    )?.count ?? 0
  }, [selectedProducts])

  const handleProductChange = useCallback(
    (product: TProduct, count: number) => {
      setSelectedProducts((prevSelectedProducts) => {
        const productIndex = prevSelectedProducts.findIndex(
          (selectedProduct) => selectedProduct.product.id === product.id
        );
        if (productIndex === -1 && count > 0) {
          return [...prevSelectedProducts, { product, count }];
        }
        if (productIndex !== -1) {
          if (count === 0) {
            return prevSelectedProducts.filter(
              (_, index) => index !== productIndex
            );
          } else {
            return prevSelectedProducts.map((selectedProduct, index) =>
              index === productIndex ? { product, count } : selectedProduct
            );
          }
        }
        return prevSelectedProducts;
      });
    },
    []
  );

  return (
    <Fragment>
      <main className="p-300x md:p-500x xl:py-1100x xl:px-500x min-h-screen flex flex-col xl:flex-row gap-400x">
        <div className="flex flex-col gap-400x ">
          <h1 className="font-bold text-preset-1">Desserts</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-300x">
            {data.map((product, key) => (
              <ProductCard
                key={key}
                product={product}
                orderCount={getOrderCount(product.id)}
                onChange={handleProductChange}
              />
            ))}
          </div>
        </div>
        <Cart>
          <CartHeader>
            Your Cart ({selectedProducts.length})
          </CartHeader>
          <CartList lists={selectedProducts}  onDelete={removeSelectedProduct} />
          <CartFooter show={selectedProducts.length > 0} totalPrice={getTotalOrder()} onClick={handleOrder} />
        </Cart>
      </main>
      <ResponsiveDialog isOpen={openDialog} setIsOpen={setOpenDialog}>
        <div className="p-300x flex flex-col gap-400x">
          <div className="flex flex-col gap-300x">
            <img
              src="/assets/images/icon-order-confirmed.svg"
              alt="confirmed"
              className="aspect-square w-12 h-12"
            />
            <div className="flex flex-col gap-100x">
              <h1 className="text-preset-1 font-bold text-rose-900">
                Order Confirmed
              </h1>
              <p className="text-rose-500 text-base">
                We hope you enjoy your food!
              </p>
            </div>
          </div>
          <div className="bg-rose-50 p-300x flex flex-col gap-300x rounded-md">
            {selectedProducts.map(({product, count}, key) => (

                <div className="flex flex-row gap-200x pb-200x border-b border-b-rose-100" key={key}>
                  <img className="w-12 h-12 rounded-sm aspect-square" src={product.image.thumbnail} alt={product.name} />
                  <div className="flex flex-col gap-100x">
                    <h3 className="text-preset-3 font-semibold text-rose-900">
                      {product.name}
                    </h3>
                    <div className="text-preset-4 flex flex-row gap-100x">
                      <p className="font-bold text-rose-red">{count}x</p> <p className="text-rose-500">@ ${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
           
            ))}
            <div className="flex justify-between items-center"><p className="text-preset-4">Order Total</p> <h3 className="text-preset-2 font-bold">${getTotalOrder()}</h3></div>
          </div>
          <button
            className="bg-rose-red rounded-full px-300x py-200x text-white font-semibold hover:bg-rose-red"
            onClick={handleConfirmOrder}>Start New Order</button>
        </div>
      </ResponsiveDialog>
    </Fragment>
  );
}

export default App;
