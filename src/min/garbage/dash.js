import React from "react";
import "./dashboard.css";
import LeftMenu from "./LeftMenu";
import Item from "./Item";
const Dashboard = () => {
  return (
    //   <div class="grid-container">
    //     <header class="header"></header>
    //     <aside class="sidenav"></aside>
    //     <main class="main"></main>
    //     <footer class="footer"></footer>
    //   </div>
    <div class="grid-container">
      <div class="menu-icon">
        <i class="fas fa-bars header__menu"></i>
      </div>

      <header class="header">
        <div class="header__search">Search...</div>
        <div class="header__avatar">Your face</div>
      </header>

      <aside class="sidenav">
        <div class="sidenav__close-icon">
          <i class="fas fa-times sidenav__brand-close"></i>
        </div>
        <ul class="sidenav__list">
          <li class="sidenav__list-item">Item One</li>
          <li class="sidenav__list-item">Item Two</li>
          <li class="sidenav__list-item">Item Three</li>
          <li class="sidenav__list-item">Item Four</li>
          <li class="sidenav__list-item">Item Five</li>
        </ul>
      </aside>

      <main class="main">
        <div class="main-header">
          <div class="main-header__heading">Hello User</div>
          <div class="main-header__updates">Recent Items</div>
        </div>

        <div class="main-overview">
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
        </div>

        <div class="main-cards">
          <div class="card">Card</div>
          <div class="card">Card</div>
          <div class="card">Card</div>
        </div>
      </main>

      <footer class="footer">
        <div class="footer__copyright">&copy; 2018 MTH</div>
        <div class="footer__signature">Made with love by pure genius</div>
      </footer>
    </div>
  );
};

export default Dashboard;
