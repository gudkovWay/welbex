import React from "react";

import AppBackground from "./app";
import Header from "./widgets/header";
import Consult from "./entities/consult";
import Footer from "./widgets/footer";

function App() {
  return (
    <>
      <AppBackground />
      <main>
        <Header />
        <Consult />
        <Footer />
      </main>
    </>
  );
}

export default App;
