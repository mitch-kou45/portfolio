import React from 'react';

function Header () {
  return (
  <header className = "header">
    <nav>
      <ul>
          <li><a href = "/Hero">Home</a></li>
          <li><a href = "/About me">About me</a></li>
          <li><a href = "/Projects">Projects</a></li>
          <li><a href = "/Contact Me">Contact Me</a></li>
      </ul>
    </nav>
  </header>
);
}

export default Header;