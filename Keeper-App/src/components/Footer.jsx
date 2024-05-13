import React from "react";
const date = new Date();
const current = date.getFullYear();
function Footer() {
  return (
    <footer>
      <p>CopyRight {current}</p>
    </footer>
  );
}

export default Footer
