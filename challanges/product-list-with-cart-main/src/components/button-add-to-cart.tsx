import React from "react";
import { Button } from "@/components/ui/button";

const IconContainer = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="rounded-full border-white border w-5 h-5 flex items-center justify-center"
    {...props}
  />
);

type ButtonAddToCartProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({
  count,
  onDecrement,
  onIncrement,
}) => {
  if (count === 0) {
    return (
      <Button
        className="rounded-full w-40 p-150x flex gap-100x bg-white border-rose-400 border hover:bg-white"
        onClick={onIncrement}
      >
        <img src="/assets/images/icon-add-to-cart.svg" alt="Add to Cart" />
        <span className="font-semibold text-rose-900">Add to Chart</span>
      </Button>
    );
  }

  return (
    <Button className="rounded-full w-40 p-150x flex gap-100x bg-rose-red hover:bg-rose-red justify-between">
      <IconContainer onClick={onDecrement}>
        <img src="/assets/images/icon-decrement-quantity.svg" alt="increment" />
      </IconContainer>

      <span className="font-semibold text-white">{count}</span>
      <IconContainer onClick={onIncrement}>
        <img src="/assets/images/icon-increment-quantity.svg" alt="increment" />
      </IconContainer>
    </Button>
  );
};

export default ButtonAddToCart;
