import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './features/cart/cartSlice';

function App() {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
