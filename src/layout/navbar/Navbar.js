import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CgUser } from 'react-icons/cg';
import { FiShoppingBag } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../components/Modals/Login';
import { SidebarContext } from '../../Context/PopUpContex';
import Cart from '../../components/Drawer/Cart';

const Navbar = () => {
  const { toggleCartDrawer, cartDrawerOpen } = useContext(SidebarContext);
  const [modalOpen, setModalOpen] = useState(false);

  const hover = 'hover:text-main transitions';
  const Hover = ({ isActive }) => (isActive ? 'text-main' : hover);
  return (
    <>
      <Login modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Cart
        cartDrawerOpen={cartDrawerOpen}
        closeCartDrawer={toggleCartDrawer}
      />
      <div className="bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-4 px-2 gap-10 lg:grid grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-full object-contain"
              />
            </Link>
          </div>
          <div className="col-span-3">
            <form className="w-full bg-dryGray rounded flex gap-4 justify-between">
              <button
                type="button"
                className="w-12 transitions hover:bg-subMain flex-colo text-sm h-12 rounded bg-main text-white"
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search Your Product from here"
                className="font-semibold text-sm w-11/12 bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          <div className="col-span-3 font-bold hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink className={Hover} to="/shop">
              Shop
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              Contact Us
            </NavLink>
            <button
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
              className={Hover}
            >
              <CgUser className="w-8 h-8" />
            </button>
            <button onClick={toggleCartDrawer} className={`${hover} relative`}>
              <FiShoppingBag className="w-6 h-6" />
              <div className="px-2 py-1 rounded-full text-xs bg-flash text-white absolute -top-4 -right-2">
                23
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
