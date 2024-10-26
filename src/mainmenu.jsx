import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cuisines from "./menu_item_category/cuisines.jsx";
import Salads from "./menu_item_category/salads.jsx";
import Burger from "./menu_item_category/burger.jsx";
import Pizza from "./menu_item_category/pizza.jsx";
import TeaCoffee from "./menu_item_category/teacoffee.jsx";
import Beverages from "./menu_item_category/beverages.jsx";
import Drink from "./menu_item_category/drinks.jsx";
import styles from "./menu_item_category/navitem.module.css";
function Mainmenu() {
  return (
    <>
      <Router>
        <div className={styles.navbar}>
          <nav>
            <ul>
              <li>
                <Link to="/cuisines" className={styles.link}>
                  Cuisines
                </Link>
              </li>
              <li>
                <Link to="/salads" className={styles.link}>
                  Salads
                </Link>
              </li>
              <li>
                <Link to="/burger" className={styles.link}>
                  Burger
                </Link>
              </li>
              <li>
                <Link to="/pizza" className={styles.link}>
                  Pizza
                </Link>
              </li>
              <li>
                <Link to="/teacoffee" className={styles.link}>
                  Tea & Coffee
                </Link>
              </li>
              <li>
                <Link to="/beverages" className={styles.link}>
                  Beverages
                </Link>
              </li>
              <li>
                <Link to="/drinks" className={styles.link}>
                  Drinks
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <Routes>
              <Route path="/cuisines" element={<Cuisines />} />
              <Route path="/salads" element={<Salads />} />
              <Route path="/burger" element={<Burger />} />
              <Route path="/pizza" element={<Pizza />} />
              <Route path="/teacoffee" element={<TeaCoffee />} />
              <Route path="/beverages" element={<Beverages />} />
              <Route path="/drinks" element={<Drink />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Mainmenu;
