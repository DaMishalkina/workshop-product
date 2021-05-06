import React from "react";
import styled from "styled-components";
import { Button, Icon, SummaryTable, colors, CartItem } from "design-system";
import { Link } from "react-router-dom";

const data = require("../data/data.js");
const items = data.products;

const Cart = ({
  match: {
    params: { id },
  },
}) => {
  const item = items[id];
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <StyledImage1 src={data.user.avatar} />
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        </StyledDiv2>
        <Styledh1>Shopping Cart</Styledh1>
        <CartItem
          name={item.name}
          image={item.image}
          price={item.price}
          description={item.description}
        />
        <StyledBorder />
        <StyledDiv5>
          <SummaryTable
            items={[
              { name: "Subtotal", price: item.price },
              { name: "Estimated Delivery & Handling", price: "€0.00" },
            ]}
            total={item.price}
          />
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <Button isStretched>Checkout</Button>
          </Link>
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};

const StyledImage1 = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`;

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledDiv5 = styled.div`
  margin-top: 32px;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.onSurface300};
  margin: 32px 0;
`;

export default Cart;
