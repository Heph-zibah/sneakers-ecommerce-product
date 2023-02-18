import React, { useState } from "react";
import Header from "./Components/HEADER/Header";
import Product from "./Components/Main/Product/Product";

function App() {
  const [itemCount, setItemCount] = useState(1)
  const [cartItems, setCartItems] = useState('')
  return (
    <>
      <div className="App">
        <Header itemCount={itemCount} setItemCount={setItemCount} cartItems={cartItems}/>
        <main>
        <Product itemCount={itemCount} setItemCount={setItemCount}/>
        </main>
      </div>
    </>
  );
}

export default App;
