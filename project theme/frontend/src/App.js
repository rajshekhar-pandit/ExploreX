import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Activity from './components/Activity';
import Adventure from './components/Adventure';
import Blog from './components/Blog';
import BungeeJump from './components/BungeeJump';
import Canoeing from './components/Canoeing';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Client from './components/Client';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Home from './components/Home';
import Kayaking from './components/Kayaking';
import Layout from './components/Layout';
import Login from './components/Login';
import Product from './components/Product';
import ReadMore from './components/ReadMore';
import Shop from './components/Shop';
import Signup from './components/SignUp';
import ZipLines from './components/ZipLines';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Dashboard';
import ProductTable from './components/ProductTable';
import ProductCreate from './components/ProductCreate';
import ProductEdit from './components/ProductEdit';
import ProductView from './components/ProductView';
import { CartProvider } from './components/CartProvider';
import MyOrders from './components/MyOrders';
import OrderTable from './components/OrderTable';
import OrderView from './components/OrderView';
import UserTable from './components/UserTable';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <CartProvider>
<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="/about" element={<About />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/ProductTable" element={<ProductTable />} />
          <Route path="/ProductCreate" element={<ProductCreate />} />
          <Route path="/ProductEdit/:id" element={<ProductEdit />} />
          <Route path="/ProductView/:id" element={<ProductView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kayaking" element={<Kayaking />} />
          <Route path="/canoeing" element={<Canoeing />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/readmore" element={<ReadMore />} />
          <Route path="/bungee-jump" element={<BungeeJump />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/zip-lines" element={<ZipLines />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/product" element={<Product />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/client" element={<Client />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/UserTable" element={<UserTable />} />
          <Route path="/OrderTable" element={<OrderTable />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/OrderView/:id" element={<OrderView />} />
        </Route>
      </Routes>
            <ToastContainer />

      </CartProvider>

    </>
  );
}

export default App;