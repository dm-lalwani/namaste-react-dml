import React from "react";
import ReactDOM from "react-dom/client";

// Default Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// Named Import
import { Title } from "./components/Header.js";

/**
    Header
        - Logo
        - Nav Item (right)
        - Cart
    Body
        - Search Bar
        - Restauraunt List
        - Cards
            - Image
            - Name
            - Rating
            - Cuisine
    Footer
        - Links
        - Copyright
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
// We can have only one root and one render method throughtout the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
