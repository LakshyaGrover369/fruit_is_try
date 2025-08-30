import React from "react";

const ProductPage = () => {
  const link = "https://heyzine.com/flip-book/6f0cb37874.html";

  return (
    <iframe
      allowFullScreen
      scrolling="no"
      className="fp-iframe"
      src={link}
      style={{ border: "1px solid lightgray", width: "100%", height: "100vh" }}
    ></iframe>
  );
};

export default ProductPage;
