/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, Carousel, colors, Address, Delivery, Total } from "design-system";
import { Link } from "react-router-dom";

const card = "/images/card.svg";
const cardBlue = "/images/cardBlue.svg";
const cardPink = "/images/cardPink.svg";

const StyledDiv1 = styled.div`
  padding: 64px 40px 40px 40px;
  background-color: ${colors.primary100};
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;
const StyledDiv3 = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: start;
  padding: 0 24px;
  align-items: center;
`;

const Styledh2 = styled.h2`
  margin-bottom: 36px;
`;

const StyledDiv4 = styled.div`
  padding: 40px;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.onSurface300};
  margin-top: 8px;
  margin-bottom: 32px;
`;

const Checkout = () => {
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button isIcon color="white">
              <Icon name="arrowBack" />
            </Button>
          </Link>
          <StyledDiv3>
            <h4>Card</h4>
          </StyledDiv3>
          <Button isIcon color="white">
            <Icon name="settings" />
          </Button>
        </StyledDiv2>
        <Styledh2>Payment Method</Styledh2>
        <Carousel
          images={[
            { source: card },
            { source: cardBlue },
            { source: cardPink },
          ]}
        />
      </StyledDiv1>
      <StyledDiv4>
        <Address
          postcode={195222}
          country="Finland"
          street="Norra Larsmovägen 70, KUOPIO"
        />
        <StyledBorder />
        <Delivery
          price="€00.00"
          customerName="Customer name"
          deliveryOptions={[
            { title: "DHL Express", value: "dhl" },
            { title: "Fedex", value: "fedex" },
            { title: "Pick up at store", value: "pickup" },
          ]}
        />
        <StyledBorder />
        <Total total="€105.00" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button isStretched>Place Order</Button>
        </Link>
      </StyledDiv4>
    </div>
  );
};

export default Checkout;
