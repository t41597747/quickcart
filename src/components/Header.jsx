function Header({ cartItemCount, onCartClick }) {
  return (
    <header>
      <h1>QuickCart</h1>

      <div className="cart-icon" onClick={onCartClick}>
        🛒
        <span className="cart-count">{cartItemCount}</span>
      </div>
    </header>
  );
}

export default Header;