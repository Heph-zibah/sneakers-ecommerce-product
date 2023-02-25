import React, { useState } from "react";
import Header from "./Components/HEADER/Header";
import Product from "./Components/Main/Product/Product";

function App() {
  const [itemCount, setItemCount] = useState(0)
  const [cartItems, setCartItems] = useState(0)
  
  return (
    <>
      <div className="App">
        <Header cartItems={cartItems} setCartItems={setCartItems}/>
        <main>
        <Product itemCount={itemCount} setItemCount={setItemCount} setCartItems={setCartItems}/>
        </main>
        <footer>Challenge by <a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6/hub">
          Frontend Mentor</a>. Coded by <a href="https://www.frontendmentor.io/profile/Heph-zibah">
            Oluwatosin Abigail Daramola</a>.</footer>
      </div>
    </>
  );
}

export default App;
