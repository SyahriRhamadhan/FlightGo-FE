import React from "react";
import styled from "styled-components";
import '../landingPage.css'

// Assets
import CloseIcon from "../../assets/svg/LandingPage/CloseIcon";
import LogoIcon from "../../assets/svg/LandingPage/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate bg-gray-200" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
        </div>

        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <a
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="blackColor"
            style={{ padding: "10px 15px" }}
            href="/login"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Wishlist
          </a>
        </li>

        <li className="semiBold font15 pointer">
          <a
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="blackColor"
            style={{ padding: "10px 15px" }}
            href="/login"
            spy={true}
            smooth={true}
            offset={-60}
          >
            History
          </a>
        </li>

        <li className="semiBold font15 pointer">
          <a
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="blackColor"
            style={{ padding: "10px 15px" }}
            href="/login"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Notifications
          </a>
        </li>

        <li className="semiBold font15 pointer">
          <a
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="blackColor"
            style={{ padding: "10px 15px" }}
            href="/login"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Profile
          </a>
        </li>
      </UlStyle>

      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer flexCenter">
          <a href="/register" className="radius8 bg-orange-500 text-white" style={{ padding: "4px 15px" }}>
              Sign Up
          </a>
        </li>

        <li className="semiBold font15 pointer flexCenter">
          <a href="/login" className="radius8 bg-orange-500 text-white" style={{ padding: "4px 15px" }}>
              Sign In
          </a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
