import React from "react";
import Header from "./Components/HEADER/Header";
import Product from "./Components/Main/Product/Product";

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <main>
        <Product/>
        </main>
      </div>
    </>
  );
}

export default App;
