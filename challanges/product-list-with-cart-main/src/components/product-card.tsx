import { TProduct } from "@/types/product";
import Image from "@/components/ui/image";
import { useCallback } from "react";
import ButtonAddToCart from "./button-add-to-cart";

type ProductCardProps = {
  product: TProduct;
  onChange: (product: TProduct, count: number) => void;
  orderCount: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onChange,
  orderCount,
}) => {
  const incrementProductCount = useCallback(() => {
    onChange(product, orderCount + 1);
  }, [orderCount]);

  const decrementProductCount = useCallback(() => {
    if (orderCount === 0) return;
    onChange(product, orderCount - 1);
  }, [orderCount]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col -space-y-[22px] justify-center items-center">
        <Image
          source={product.image}
          alt={product.name}
          className="rounded-lg"
        />
        <ButtonAddToCart
          count={orderCount}
          onIncrement={incrementProductCount}
          onDecrement={decrementProductCount}
        />
      </div>
      <div className="flex flex-col gap-50x">
        <p className="text-preset-4 text-rose-500">{product.category}</p>
        <h3 className="text-preset-3 font-semibold text-rose-900">
          {product.name}
        </h3>
        <p className="font-semibold text-rose-red">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
