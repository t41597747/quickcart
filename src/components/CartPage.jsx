import { useCart } from "../context/CartContext";

function CartPage() {

  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id}>

          <h4>{item.name}</h4>

          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          {item.quantity}
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>

        </div>
      ))}
    </div>
  );
}

export default CartPage;