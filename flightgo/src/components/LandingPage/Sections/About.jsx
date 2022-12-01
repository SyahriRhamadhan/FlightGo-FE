import React from "react";
import styled from "styled-components";
import '../landingPage.css'

// Components
import ServiceBox from "../Elements/AboutBox";

export default function Services() {
  return (
    <Wrapper>
      <div className="pt-10 pb-10">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">ABOUT US</h1>
            <p className="font16">
            Booking flight ticket with Flightgo. We give many offers
            <br />
            with the best prices for passenger and good services.
            </p>
          </HeaderInfo>

          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                title="15"
                subtitle="Years of Experience"
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox
                title="1k"
                subtitle="Sucessful Trips"
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox
                title="100+"
                subtitle="Promos and Offers"
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox title="4.9" subtitle="Overall Rating" />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
