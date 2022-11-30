import React from "react";
import styled from "styled-components";
import '../landingPage.css'

// Assets
import HeaderImage from '../../assets/img/LandingPage/header/header-img.png';
import QuotesIcon from '../../assets/svg/LandingPage/Quotes';

export default function Header() {
  return (
    <div className="bg-header">
    <Wrapper id="home" className=" container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Book With Us and Ready to Take Off</h1>
          <HeaderP className="font20 semiBold">
          Explore the world by booking flight with us and get your best experience
          </HeaderP>
        </div>
      </LeftSide>
      
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Fly more comfortably and safely with Flightgo.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Flightgo owner</p>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 20px;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 3;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
