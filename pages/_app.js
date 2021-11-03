import React from "react";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  // Enable axe-core for React in development
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    const ReactDOM = require("react-dom");
    const axe = require("@axe-core/react");
    axe(React, ReactDOM, 1000);
  }

  return <Component {...pageProps} />;
}

export default MyApp;
