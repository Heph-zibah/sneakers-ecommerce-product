import React from "react";
import Header from "./Components/HEADER/Header";
import Content from "./Components/Main/Content";

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <main>
        <Content/>
        </main>
      </div>
    </>
  );
}

export default App;
