/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, colors, Avatar, Title, ProductItem } from "design-system";
import { Link } from "react-router-dom";

const data = require("../data/data.js");

const Home = () => {
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <Avatar src={data.user.avatar} />
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        </StyledDiv2>
        <Styledh1>Store</Styledh1>
        <Title label="All Product" />
        <StyledDiv5>
          {Object.entries(data.products).map(([id, item]) => {
            return (
              <StyledLink key={id} to={`/details/${id}`}>
                <ProductItem item={item} />
              </StyledLink>
            );
          })}
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;

export default Home;
