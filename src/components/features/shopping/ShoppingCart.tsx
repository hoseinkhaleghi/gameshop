import { useShoppingCart } from "../../../GlobalStates/ShoppingCartContext";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { list } from "../../../list";
import { CartItem } from "./CartItem";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { t } = useTranslation("global");
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white flex flex-col gap-5 p-4 rounded-md min-w-96 w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-lg font-bold gap-5 mb-4">{t("Cart.messsage")}</h2>
        {cartItems.map((item) => (
          <CartItem key={item.id} id={item.id} quantity={item.quantity} />
        ))}
        <div className="flex justify-between mt-4">
          <span className="font-bold">{t("Total.messsage")}</span>
          <span>{formatCurrency(calculateTotal(cartItems))}</span>
        </div>
        <button
          className="bg-red-500 text-white rounded-sm px-4 py-2 mt-4"
          onClick={closeCart}
        >
          {t("Close.messsage")}
        </button>
        <button className="bg-green-500 text-white rounded-sm px-4 py-2 ">
        {/* <Link to="/dashboard/favorite"> */}

          <a href="http://localhost:5173/dashboard/cart">
            {t("Finalize.messsage")}
          </a>
          {/* </Link> */}
        </button>
      </div>
    </div>
  );
}

function calculateTotal(cartItems: any[]) {
  return cartItems.reduce(
    (total: number, cartItem: { id: number; quantity: number }) => {
      const item = list.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    },
    0
  );
}
