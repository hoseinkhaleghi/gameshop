import { useContext } from "react";
import { useShoppingCart } from "../../../GlobalStates/ShoppingCartContext";
import { list } from "../../../list";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { DataContext } from "../../../GlobalStates/DataProvider";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { selectedGameImages } = useContext(DataContext);
  const { removeFromCart } = useShoppingCart();
  const item = list.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex items-center space-x-2">
      <img
        className="w-20 h-20 object-cove"
        src={selectedGameImages[item.id] || item.defaultImage}
        alt={item.name}
      />
      <div className="flex-grow">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-sm text-gray-500">x{quantity}</span>
          )}
        </div>
        <div className="text-xs text-gray-500">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <button
        className="bg-red-500 text-white rounded-sm px-2 py-1"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </button>
    </div>
  );
}
