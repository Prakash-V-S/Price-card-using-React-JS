import React from "react";


function Nav() {
  const updateMenu = () => {};

  return (
    <nav className="menu">
      <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
      <label></label>
      <a href="https://www.figma.com/">
        <p><i class="fa-solid fa-hand-holding-dollar fa-2xl"></i></p>
      </a>
      <ul>
        <li>
          <a className="dropdown-arrow" href="#">
            Prodects
          </a>
          <ul className="sub-menus">
            <li>
              <a href="#">Figma</a>
            </li>
            <li>
              <a href="#">FigJam</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-arrow" href="#">
            Enterprise
          </a>
          <ul className="sub-menus">
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Contact Sales</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a className="dropdown-arrow" href="#">
            Recourses
          </a>
          <ul className="sub-menus">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Template</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Parent</a>
            </li>
            <li>
              <a href="#">Plugin and widgets</a>
            </li>
            <li>
              <a href="#">Best Practices</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-arrow" href="#">
            Community
          </a>
          <ul className="sub-menus">
            <li>
              <a href="#">Events and Live Streams</a>
            </li>
            <li>
              <a href="#">Education Programs</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Contact Sales</a>
        </li>
        <li>
          <a href="#">log in</a>
        </li>
        <li>
          <button className="btn btn-primary">Get Started for Free</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
