function CartSidebar({ isOpen, cart, onClose, onUpdateQuantity, onRemoveItem }) {
  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>X</button>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-details">
              <h4>{item.name}</h4>
              <p>${item.price}</p>

              <div className="quantity-controls">
                <button onClick={() => onUpdateQuantity(item.id, -1)}>
                  -
                </button>

                <span style={{ margin: "0 10px" }}>{item.quantity}</span>

                <button onClick={() => onUpdateQuantity(item.id, 1)}>
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => onRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartSidebar;