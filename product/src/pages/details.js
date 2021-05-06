import React from "react";
import styled from "styled-components";
import { Button, Icon, colors, ProductItem, BreadCrumb, BottomSwipe } from "design-system";
import { Link } from "react-router-dom";

const data = require("../data/data.js");
const items = data.products;

const Details = ({
  match: {
    params: { id },
  },
}) => {
  const item = items[id];
  return (
    item && (
      <div>
        <StyledDiv1>
          <BreadCrumb name={item.name} href={"/"} />
          <StyledDiv4>
            <ProductItem item={item} isLarge/>
            <Link to={`/cart/${id}`} style={{ textDecoration: "none", marginTop: "40px" }}>
              <Button isStretched>Add to Cart</Button>
            </Link>
          </StyledDiv4>
          <BottomSwipe label="Swipe Up to Checkout" />
        </StyledDiv1>
      </div>
    )
  );
};

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const StyledDiv4 = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Details;
