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
import lonceng from '../../assets/img/LandingPage/Nav/lonceng.png'

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
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
            <li className="semiBold font15 pointer">
              <img href="/" src={lonceng} alt='lonceng' style={{height: 40, padding: "10px 30px 10px 0" }}/>
            </li>

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

