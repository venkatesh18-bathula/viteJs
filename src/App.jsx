import {Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar"
import Topbrands from "./components/topbrands";
import Toprating from "./components/toprating";
import Biggestd from "./components/biggestd";
import Contact from "./components/contact";
import About from "./components/about";
import Home from "./home";
import ProductDetails from "./product-details/product-details";
import ProductDescription from "./product-details/product-description";
import ProductSpecifiation from "./product-details/product-specifiation";
import BuyTogether from "./product-details/buytogether";
import Rating from "./product-details/rating";
import Cart from "./Cart";
import PageNotFound from "./PageNotFound";
import Register from "./Register";
import ChildTodo from "./components/ChildTodo";
import TodoParent from "./TodoParent";
import UseReducer from "./UseReducer";
function App() {

  return (
    
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/topbrands" element={<Topbrands/>}></Route>
        <Route path="/toprating" element={<Toprating/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/biggest" element={<Biggestd/>}></Route>
        <Route path="/product-details/:productId" element={<ProductDetails/>}>
        <Route path="product-description" element={<ProductDescription/>}></Route>
        <Route path="product-specification" element={<ProductSpecifiation/>}></Route>
        <Route path="buy-together" element={<BuyTogether/>}></Route>
        <Route path="rating" element={<Rating/>}></Route>
        </Route>
        <Route path="/todo" element={<TodoParent/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reducer' element={<UseReducer/>}/>


         <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    
      </>
  )
}

export default App
