import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cuisines from "./nav-items/cuisines.jsx";
import Salads from "./nav-items/salads.jsx";
import Burger from "./nav-items/burger.jsx";
import Pizza from "./nav-items/pizza.jsx";
import TeaCoffee from "./nav-items/teacoffee.jsx";
import Beverages from "./nav-items/beverages.jsx";
import Drink from "./nav-items/drinks.jsx";
import styles from "./nav-items/navitem.module.css";
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
