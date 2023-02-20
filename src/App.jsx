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
      </div>
    </>
  );
}

export default App;
