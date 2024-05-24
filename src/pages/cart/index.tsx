import { useShoppingCart } from "../../GlobalStates/ShoppingCartContext";
// import storeItems from "../data/items.json";
import { formatCurrency } from "../../utilities/formatCurrency";
import { list } from "../../list";
import { CartItem } from "../../components/features/shopping/CartItem";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../GlobalStates/ThemeProvider";
import EmptyCard from "../../assets/images/shopping.png"

// type ShoppingCartProps = {
//   isOpen: boolean;
// };

export function Cart() {
  const { t } = useTranslation("global");
  const { cartItems } = useShoppingCart();
  const { isDarkMode } = useDarkMode();
  console.log(cartItems.length);
  return (
    <>
      <div className="px-60 pb-1  flex flex-col gap-5 h-full  rounded-md min-w-96 w-auto ">
        <h2 className="text-3xl font-semibold pb-5 cursor-pointer border-b-2 border-red-500">
          {t("Cart.messsage")}
        </h2>
        {cartItems.length === 0 ? (
          <div className="flex flex-col pb-20 gap-5 items-center">
            <h1 className="font-bold text-2xl">{t("emptyshopping.messsage")}</h1>
            <img className=" w-72 h-72" src={EmptyCard} alt="" />
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
          ))
        )}
        <div className={cartItems.length ===0 ?"hidden":"block"}>
          <div className="flex justify-between mt-4">
            <span className="font-bold">{t("Total.messsage")}</span>
            <span>{formatCurrency(calculateTotal(cartItems))}</span>
          </div>
          <button className={`${isDarkMode ? "bg-red-500" : "bg-blue-500"} text-white rounded-sm w-full py-2 mt-4`}>
            {t("Finalize.messsage")}
          </button>
        </div>
      </div>
    </>
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
