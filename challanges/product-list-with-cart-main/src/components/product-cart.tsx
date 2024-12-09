import { TProduct } from "@/types/product";
import EmptyCart from "./empty-cart";
import { cn } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";
import { Button } from "./ui/button";

export const Cart = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "bg-white w-full xl:w-[384px]  h-fit rounded-xl p-300x flex flex-col gap-300x",
        className
      )}
      {...rest}
    />
  );
};

export const CartHeader = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn("text-preset-2 font-bold text-rose-red", className)}
      {...rest}
    />
  );
};

const CartItem = ({ product, count, onDelete }: { product: TProduct; count: number, onDelete : (productId : string) => void }) => {
  
  const handleDelete = () => {
    onDelete(product.id);
  }
  return (
    <div className="flex flex-row justify-between items-center pb-200x border-b border-b-rose-100">
      <div className="flex flex-col gap-100x">
        <h3 className="text-preset-4 font-semibold text-rose-900">
          {product.name}
        </h3>
        <p className="flex flex-row gap-100x items-center text-preset-4">
          <span className="font-semibold text-rose-red">{count}x</span>
          <span className="text-rose-500">@ ${product.price.toFixed(2)}</span>
          <span className="font-semibold text-rose-500">
            ${(product.price * count).toFixed(2)}
          </span>
        </p>
      </div>
      <div className="rounded-full flex justify-center items-center w-5 h-5 border border-rose-400" onClick={handleDelete}>
        <img src="/assets/images/icon-remove-item.svg" alt="close" />
      </div>
    </div>
  );
};

export const CartList = ({
  lists,
  onDelete,
}: {
  lists: { product: TProduct; count: number }[], onDelete: (productId : string) => void;
}) => {
  if (lists.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex flex-col gap-200x">
      {lists.map((cartItem, key) => (
        <CartItem key={key} product={cartItem.product} count={cartItem.count} onDelete={onDelete} />
      ))}
    </div>
  );
};

export const CartFooter = ({
  show,
  totalPrice,
  onClick,
}: {
  totalPrice: string;
  show: boolean;
  onClick: () => void;
}) => {
  if (!show) return;

  return (
    <Fragment>
      <div className="flex p-200x justify-between items-center">
        <p className="text-sm">Order Total</p>
        <h3 className="font-bold text-preset-2">${totalPrice}</h3>
      </div>
      <div className="flex bg-rose-50 p-200x rounded-lg">
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt="green-tree"
          className="w-5 h-5"
        />
        <p>This is a carbon-neutral delivery</p>
      </div>
      <Button
        className="bg-rose-red rounded-full hover:bg-rose-red"
        onClick={onClick}
      >
        Confirm Order
      </Button>
    </Fragment>
  );
};

