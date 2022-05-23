import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, calculateTotal } from '../features/cart/cartSlice';
import CartItem from './CartItem';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          const { id } = item;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>€{total.toFixed(2)}</span>{' '}
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
