import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="shadow-md">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-200">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              Milon
            </a>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="block py-2 pr-4 pl-3">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeColor" : "penDingColor"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="block py-2 pr-4 pl-3">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeColor" : "penDingColor"
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="block py-2 pr-4 pl-3">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeColor" : "penDingColor"
                    }
                    to="/blog/Milon293"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
