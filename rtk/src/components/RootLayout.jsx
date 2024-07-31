import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Navbars from "./Navbars";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbars />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
