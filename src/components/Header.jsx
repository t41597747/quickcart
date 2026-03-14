import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Header() {

  const { cart } = useCart();

  const count = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <h1>QuickCart</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/category/Electronics">Electronics</Link>
        <Link to="/category/Clothing">Clothing</Link>
        <Link to="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}

export default Header;