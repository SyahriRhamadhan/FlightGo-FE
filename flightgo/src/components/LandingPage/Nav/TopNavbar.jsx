import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import '../landingPage.css'

// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";

// Assets
import LogoIcon from "../../assets/svg/LandingPage/Logo";
import BurgerIcon from "../../assets/svg/LandingPage/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className={nav ? 'nav activ' : 'nav'} style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
          </Link>
          
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>

          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href='/login' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Wishlist
              </a>
            </li>

            <li className="semiBold font15 pointer">
              <a href='/login' className="text-gray-600" style={{ padding: "10px 15px" }}  spy={true} smooth={true} offset={-80}>
                History
              </a>
            </li>

            <li className="semiBold font15 pointer">
              <a href='/login' className="text-gray-600" style={{ padding: "10px 15px" }}  spy={true} smooth={true} offset={-80}>
                Notification
              </a>
            </li>

            <li className="semiBold font15 pointer">
              <a href='/login' className="text-gray-600" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Profile
              </a>
            </li>
          </UlWrapper>

          <UlWrapperRight className="flexNullCenter">

            <li className="semiBold font15 pointer flexCenter">
              <a href="/login" className="radius8 bg-orange-500 text-white" style={{ padding: "4px 15px" }}>
                Sign In
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: transparent;
  transition: 0.3s ease;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;

